import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import InputIcon from "react-multi-date-picker/components/input_icon";

import "react-multi-date-picker/styles/layouts/mobile.css";

function CustomDatePicker({ changeHandler, value, title }) {
  // const changeHandler = (e) => {
  //   const date = new Date(e);
  //   setForm((form) => ({ ...form, constructionDate: date }));
  // };

  return (
    <div className="w-full flex flex-col gap-2 text-sm">
      <label className="text-sm font-medium">{title}</label>
      <DatePicker
        render={
          <InputIcon
            placeholder="جهت انتخاب تاریخ کلیک کنید..."
            className="border-2 cursor-pointer dark:bg-zinc-900 dark:border-zinc-700 h-12 w-full px-2 rounded-lg"
          />
        }
        placeholder="انتخاب تاریخ"
        className="rmdp-mobile customer-calendar"
        animations={[
          opacity(),
          transition({
            from: 40,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
        name="constructionDate"
        value={value}
        onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="top-right"
      />
    </div>
  );
}

export default CustomDatePicker;
