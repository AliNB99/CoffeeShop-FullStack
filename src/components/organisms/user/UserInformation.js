"use client";

import {
  CheckBadgeIcon,
  CheckCircleIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  PencilSquareIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import FormUserInformation from "../../molecules/user/FormUserInformation";
import { useChangeUserInformation } from "src/hooks/useQuery/mutations";
import CardUserPanel from "@/molecules/user/CardUserPanel";
import { userInformation } from "@/constants/dashboard";
import { Button, Tooltip } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const listCartUserPanel = [
  {
    title: "مجموع پرداخت",
    value: 5640000,
    unit: "تومان",
    bgColor: "bg-amber-300",
    bgColorIcon: "bg-amber-200",
    icon: <CreditCardIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "موجودی حساب",
    value: 850000,
    unit: "تومان",
    bgColor: "bg-green-500",
    bgColorIcon: "bg-green-400",
    icon: <CurrencyDollarIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "مجموع تیکت ها",
    unit: "تیکت",
    value: 3,
    bgColor: "bg-rose-600",
    bgColorIcon: "bg-rose-500",
    icon: <TicketIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "تعداد سفارش",
    unit: "بار",
    value: 15,
    bgColor: "bg-blue-500",
    bgColorIcon: "bg-blue-400",
    icon: <CheckBadgeIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
];

function UserInformation({ user }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [form, setForm] = useState({});

  const { isPending, isError, mutateAsync } = useChangeUserInformation();

  const { refresh } = useRouter();

  const createItem = useCallback(
    (item) => {
      switch (item.name) {
        case "bankInfo":
          return (
            <div className="relative user-info">
              <div className="flex items-center min-w-28 gap-1">
                {item.icon}
                <h4>{item.title}:</h4>
              </div>
              <span className="absolute left-4 font-bold opacity-60">IR</span>
              <span className="font-medium">
                {user[item.name] || (
                  <span className="opacity-50">{`${item.title} ثبت نشده است`}</span>
                )}
              </span>
            </div>
          );
        case "address":
          return (
            <div className="user-info md:col-span-2">
              <div className="flex items-center min-w-28 gap-1">
                {item.icon}
                <h4>{item.title}:</h4>
              </div>
              <p className="h-16 flex items-center font-medium">
                {user[item.name] || (
                  <span className="opacity-50">{`${item.title} ثبت نشده است`}</span>
                )}
              </p>
            </div>
          );
        default:
          return (
            <div className="user-info">
              <div className="flex items-center min-w-28 gap-1">
                {item.icon}
                <h4>{item.title}:</h4>
              </div>
              <span className="font-medium">
                {user[item.name] || (
                  <span className="opacity-50">{`${item.title} ثبت نشده است`}</span>
                )}
              </span>
            </div>
          );
      }
    },
    [user]
  );

  const submitFormHandler = async () => {
    const data = await mutateAsync({
      action: "changeInformation",
      id: user._id,
      form,
    });

    if (!form.firstName || !form.lastName || !form.email) {
      return toast.error("لطفا تمامیه مقادیر مورد نیاز را وارد نمایید");
    }
    if (data.data.error || isError) {
      toast.error(data.data.error);
    } else {
      toast.success(data.data.message);
      setShowEditForm(false);
      refresh();
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {listCartUserPanel.map((i, index) => (
          <CardUserPanel
            key={index}
            title={i.title}
            value={i.value}
            bgColor={i.bgColor}
            bgColorIcon={i.bgColorIcon}
            icon={i.icon}
            unit={i.unit}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center px-3">
          <h1 className="text-orange-300 text-xl font-bold">مشخصات کاربر</h1>
          <div className="flex items-center gap-3">
            {showEditForm ? (
              <Tooltip content="ثبت تغییرات">
                <Button
                  className="flex items-center"
                  isLoading={isPending}
                  onPress={submitFormHandler}
                  variant="flat"
                  color="success"
                >
                  <span className="text-xs font-bold">ثبت تغییرات</span>
                  <CheckCircleIcon />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip content="ویرایش پروفایل">
                <Button
                  onPress={() => setShowEditForm((item) => !item)}
                  isIconOnly
                  variant="flat"
                  color="warning"
                >
                  <PencilSquareIcon />
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
        {showEditForm ? (
          <FormUserInformation user={user} form={form} setForm={setForm} />
        ) : (
          <div className="bg-white dark:bg-zinc-900 p-5 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userInformation.map((item) => createItem(item))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInformation;
