import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export default function ModalShowInfoCommentCustom({
  isOpen,
  isPending,
  onOpenChange,
  clickHandler,
  textComment,
}) {
  const [status, setStatus] = useState("");
  return (
    <>
      <Modal
        placement="center"
        backdrop="blur"
        className="capitalize"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                جزئیات دیدگاه
              </ModalHeader>
              <ModalBody>
                <p>{textComment}</p>
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
