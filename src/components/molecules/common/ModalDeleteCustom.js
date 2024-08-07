"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

function ModalDeleteCustom({
  warningMessage,
  title,
  isOpen,
  isPending,
  onOpenChange,
  clickHandler,
}) {
  return (
    <>
      <Modal
        placement="center"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="capitalize"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{warningMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="font-bold"
                  color="danger"
                  variant="light"
                >
                  خیر
                </Button>
                <Button
                  isLoading={isPending}
                  onPress={async () => {
                    await clickHandler();
                    onClose();
                  }}
                  className="font-bold"
                  color="primary"
                >
                  بله
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDeleteCustom;
