import { isCheckout } from "@/redux/features/cart/CartSlice";
import { listCheckout } from "@/constants/dashboardItem";
import { sp } from "@/utils/helper/replaceNumber";
import useLoading from "src/hooks/useLoading";
import { useDispatch } from "react-redux";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import toast from "react-hot-toast";

function CheckOutInfo({ user, cart }) {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    if (!user) {
      return toast.error("لطفا ابتدا وارد حساب کاربری خود شوید");
    } else if (
      !user.phone ||
      !user.bankInfo ||
      !user.postalCode ||
      !user.address
    ) {
      return toast.error("لطفا اطلاعات کاربری خود را تکمیل کنید");
    }
    startLoading();
    setTimeout(() => {
      dispatch(isCheckout());
      stopLoading();
      toast.success("خرید شما با موفقیت انجام شد");
    }, [1000]);
  };
  return (
    <div className="min-w-80 space-y-5 h-fit border-2 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-700 rounded-lg shadow-medium">
      {listCheckout.map((i, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <span className="text-orange-300">{i.icon}</span>
            <span className="text-xs md:text-sm font-bold">{i.title}</span>
          </div>
          <span>{sp(cart[i.keyValue])}</span>
        </div>
      ))}
      {isLoading ? (
        <Loader size={2} color="bg-green-300" />
      ) : (
        <Button
          clickHandler={checkoutHandler}
          width="w-full"
          height="h-10"
          fontSize="text-base"
          color="text-green-500"
          bgColor="bg-green-100"
        >
          تکمیل سفارش
        </Button>
      )}
    </div>
  );
}

export default CheckOutInfo;
