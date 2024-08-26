import { addAccessoryItem, addCoffeeItem } from "@/constants/dashboardItem";
import AddMoreSpecification from "@/molecules/form/AddMoreSpecification";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import SelectCategory from "@/atoms/SelectCategory";
import CustomDatePicker from "./CustomDatePicker";
import Button from "@/atoms/Button";
import Loader from "@/atoms/Loader";
import Input from "@/atoms/Input";

function AddSpecifications({ product, form, setForm, warning, touched }) {
  const [listCategory, setListCategory] = useState(null);

  useEffect(() => {
    if (product) {
      setForm({ ...form, specifications: [...product.specifications] });
      setListCategory(
        product.category === "coffee"
          ? JSON.parse(JSON.stringify(addCoffeeItem))
          : JSON.parse(JSON.stringify(addAccessoryItem))
      );
    }
  }, [product]);

  useEffect(() => {
    if (form.category === "coffee") {
      setForm({
        ...form,
        specifications:
          product?.category === "coffee"
            ? product.specifications
            : JSON.parse(JSON.stringify(addCoffeeItem)),
      });
      setListCategory(JSON.parse(JSON.stringify(addCoffeeItem)));
    } else {
      setForm({
        ...form,
        specifications:
          product?.category === "accessory"
            ? product.specifications
            : JSON.parse(JSON.stringify(addAccessoryItem)),
      });
      setListCategory(JSON.parse(JSON.stringify(addAccessoryItem)));
    }
  }, [form.category]);

  // change value in specification input in form
  const changeHandler = (e, index) => {
    if (!e.target) {
      const date = new Date(e);
      const newList = [...form.specifications];
      newList[index].value = date;
      setForm({ ...form, specifications: newList });
    } else {
      const newList = [...form.specifications];
      newList[index].value = e.target.value;
      setForm({ ...form, specifications: newList });
    }
  };

  const createInput = useCallback(
    (item, index) => {
      switch (item.name) {
        case "productionDate":
          return (
            <li key={index}>
              <div className="flex items-end gap-1">
                <CustomDatePicker
                  value={item.value}
                  changeHandler={(e) => changeHandler(e, index)}
                  title={item.title}
                />
              </div>
            </li>
          );
        default:
          return (
            <li key={index}>
              <div className="flex items-end gap-1">
                <Input
                  name={item.name}
                  touched={touched.specifications}
                  warning={warning}
                  required={index < listCategory.length ? true : false}
                  label={item.title}
                  placeholder={item.placeholder}
                  type="text"
                  value={item.value}
                  changeHandler={(e) => changeHandler(e, index)}
                />

                {index + 1 > listCategory.length && (
                  <Button
                    color="text-red-500"
                    bgColor="bg-red-100"
                    borderColor="border-red-200"
                    clickHandler={() => deleteMoreItemHandler(index)}
                    type="button"
                  >
                    <TrashIcon />
                  </Button>
                )}
              </div>
            </li>
          );
      }
    },
    [listCategory, warning, touched]
  );

  // delete the added item
  const deleteMoreItemHandler = (index) => {
    const specificationsList = [...form.specifications];
    specificationsList.splice(index, 1);
    setForm({ ...form, specifications: specificationsList });
  };
  return (
    <div className="w-full">
      <h4 className="mb-5 font-bold">مشخصات</h4>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-5 sm:mb-10">
        <SelectCategory form={form} setForm={setForm} />
        {touched.specifications && (
          <span className="text-red-500 text-sm">{warning.specifications}</span>
        )}
      </div>
      {form.specifications.length ? (
        <ul className="w-full grid sm:grid-cols-2 gap-6 sm:gap-4">
          {form.specifications.map((item, index) => createInput(item, index))}
        </ul>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Loader color="bg-zinc-500" size={2} />
        </div>
      )}

      <AddMoreSpecification form={form} setForm={setForm} />
    </div>
  );
}

export default AddSpecifications;
