import {
  listUserInfo,
  roleColorMap,
  roleTitle,
} from "@/constants/dashboardItem";
import { UserIcon } from "@heroicons/react/24/outline";
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
import { useCallback } from "react";

export default function ModalShowInfoUserCustom({
  isOpen,
  onOpenChange,
  userInfo,
}) {
  const createUserInfo = useCallback(
    (item, index) => {
      switch (item.name) {
        case "user":
          return (
            <div className="w-full flex items-center justify-between">
              <User
                key={index}
                avatarProps={{
                  src: userInfo.avatar,
                  radius: "full",
                  fallback: <UserIcon className="opacity-50" />,
                  showFallback: true,
                }}
                description={userInfo.email}
                name={`${userInfo.firstName} ${userInfo.lastName}`}
              />
              <Chip
                className="capitalize px-2"
                color={roleColorMap[userInfo.role]}
                size="sm"
                variant="flat"
              >
                {roleTitle[userInfo.role]}
              </Chip>
            </div>
          );

        default:
          return (
            <div key={index}>
              <div>
                {item.icon}
                <h4 className="text-sm font-bold text-blue-500">
                  {item.title}
                </h4>
              </div>
              <span>{userInfo[item.name] ? userInfo[item.name] : "-"}</span>
            </div>
          );
      }
    },
    [userInfo]
  );

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
              <ModalHeader className="flex flex-col gap-1">
                مشخصات کاربر
              </ModalHeader>
              <ModalBody className="scrollbarCustom flex flex-col items-start gap-6">
                {listUserInfo.map((item, index) => createUserInfo(item, index))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
