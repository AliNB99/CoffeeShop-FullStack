import { CategoryColorMap } from "@/constants/dashboardItem";
import { UserIcon } from "@heroicons/react/24/outline";
import CustomImage from "@/atoms/CustomImage";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
  User,
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
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody className="scrollbarCustom flex flex-col gap-6">
                {commentInfo ? (
                  <>
                    <div>
                      <h4 className="title-modal mb-2">نویسنده دیدگاه</h4>
                      <User
                        avatarProps={{
                          src: commentInfo.userInfo.avatar,
                          radius: "full",
                          fallback: <UserIcon className="opacity-50" />,
                          showFallback: true,
                        }}
                        description={commentInfo.userInfo.email}
                        name={`${commentInfo.userInfo.firstName} ${commentInfo.userInfo.lastName}`}
                      />
                    </div>

                    <div>
                      <h4 className="title-modal">متن دیدگاه:</h4>
                      <p>{commentInfo.description}</p>
                    </div>
                    <div className="space-y-5">
                      <h4 className="title-modal">جزئیات محصول</h4>
                      <div className="flex items-center justify-between gap-1">
                        <h6 className="text-xs text-blue-400">عنوان محصول:</h6>
                        <p>{commentInfo.productInfo.title}</p>
                      </div>
                      <div className="flex items-center justify-between gap-1">
                        <h6 className="text-xs text-blue-400">دسته بندی:</h6>
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
                        <div className="flex items-enter justify-center py-5 w-full h-48">
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
