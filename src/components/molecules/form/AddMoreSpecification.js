import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import {
  CheckIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function AddMoreSpecification({ form, setForm }) {
  const [addItem, setAddItem] = useState(null);
  const [warning, setWarning] = useState(null);
  // add more item in specifications in form
  const changeItemHandler = (e) => {
    const { name, value } = e.target;
    setAddItem({ ...addItem, [name]: value });
  };

  const addSpecificationHandler = () => {
    if (!addItem.title || !addItem.value) {
      return setWarning("لطفا مقادیر را کامل وارد نمایید");
    }
    console.log(form.specifications)
    setForm({ ...form, specifications: [...form.specifications, addItem] });
    setAddItem(null);
    setWarning(null);
  };

  const removeHandler = () => {
    setAddItem(null);
    setWarning(null);
  };

  const addHandler = () => {
    if (addItem) {
      return setWarning("لطفا مقادیر را کامل وارد نمایید");
    } else {
      setAddItem({ title: "", value: "" });
    }
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div>
        <Button
          color="text-blue-500 bg-blue-100"
          clickHandler={addHandler}
          type="button"
        >
          <PlusCircleIcon />
          <span>افزودن</span>
        </Button>
      </div>

      {addItem && (
        <div className="w-full flex flex-col sm:flex-row items-center gap-2">
          <div className="w-full sm:h-20 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="عنوان"
                name="title"
                type="text"
                value={addItem.title}
                changeHandler={changeItemHandler}
                warning={warning}
              />
              <Input
                placeholder="توضیحات"
                name="value"
                type="text"
                value={addItem.value}
                changeHandler={changeItemHandler}
                warning={warning}
              />
            </div>
            {warning && (
              <span className="text-xs md:text-sm text-red-600 dark:text-red-400 mr-2 rounded-sm">
                {warning}
              </span>
            )}
          </div>

          <div className="w-full h-20 sm:w-auto flex justify-end gap-3">
            <Button
              clickHandler={removeHandler}
              type="button"
              color="text-orange-600"
              bgColor="bg-orange-100"
              borderColor="border-orange-200"
            >
              <XMarkIcon />
            </Button>
            <Button
              clickHandler={addSpecificationHandler}
              type="button"
              color="text-green-600"
              bgColor="bg-green-100"
              borderColor="border-green-200"
            >
              <CheckIcon />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMoreSpecification;
