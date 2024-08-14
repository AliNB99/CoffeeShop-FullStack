import CustomImage from "@/atoms/CustomImage";
import { CategoryColorMap } from "@/constants/dashboard";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModalShowInfoCommentCustom({
  isOpen,
  isPending,
  onOpenChange,
  clickHandler,
  commentInfo,
  title,
}) {
  const [status, setStatus] = useState("");
  return (
    <>
      <Modal
        scrollBehavior="inside"
        placement="center"
        backdrop="blur"
        className="capitalize"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="scrollbarCustom">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {commentInfo ? (
                  <>
                    <div>
                      <span className="text-sm font-bold text-blue-400">
                        متن دیدگاه:
                      </span>
                      <p>{commentInfo.description}</p>
                    </div>
                    <div className="space-y-5">
                      <span className="text-sm font-bold text-blue-400">
                        جزئیات محصول
                      </span>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs text-blue-400">
                          عنوان محصول:
                        </span>
                        <p>{commentInfo.productInfo.title}</p>
                      </div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs text-blue-400">
                          دسته بندی:
                        </span>
                        <Chip
                          className="px-2"
                          size="sm"
                          variant="flat"
                          color={
                            CategoryColorMap[commentInfo.productInfo.category]
                          }
                        >
                          {commentInfo.productInfo.category}
                        </Chip>
                      </div>
                      {!!commentInfo.productInfo.images.length && (
                        <div className="flex items-enter justify-center py-5">
                          <CustomImage
                            className="rounded-md"
                            src={commentInfo.productInfo.images[0]}
                            width={200}
                            height={200}
                            alt="product image"
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <p>
                    شما میتوانید وضعیت نمایش مواردی که انتخاب کرده اید را تغییر
                    دهید.
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button
                  onPress={async () => {
                    setStatus("unaccepted");
                    await clickHandler({
                      action: "changeStatus",
                      status: "unaccepted",
                    });
                    onClose();
                  }}
                  isLoading={status === "unaccepted" && isPending}
                  color="warning"
                  variant="flat"
                >
                  عدم نمایش
                </Button>
                <Button
                  onPress={async () => {
                    setStatus("accepted");
                    await clickHandler({
                      action: "changeStatus",
                      status: "accepted",
                    });
                    onClose();
                  }}
                  isLoading={status === "accepted" && isPending}
                  color="success"
                  variant="flat"
                >
                  نمایش
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
