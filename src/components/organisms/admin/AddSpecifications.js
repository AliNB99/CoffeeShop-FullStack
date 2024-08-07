import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import Loader from "@/atoms/Loader";
import SelectCategory from "@/atoms/SelectCategory";
import { addAccessoryItem, addCoffeeItem } from "@/constants/dashboard";
import AddMoreSpecification from "@/molecules/form/AddMoreSpecification";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function AddSpecifications({ product, form, setForm, warning, touched }) {
  // set specification value based on category
  const [listCategory, setListCategory] = useState(null);

  useEffect(() => {
    if (product) {
      setForm({ ...form, specifications: [...product.specifications] });
      setListCategory(
        product.category === "coffee" ? addCoffeeItem : addAccessoryItem
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
            : addCoffeeItem,
      });
      setListCategory(addCoffeeItem);
    } else {
      setForm({
        ...form,
        specifications:
          product?.category === "accessory"
            ? product.specifications
            : addAccessoryItem,
      });
      setListCategory(addAccessoryItem);
    }
  }, [form.category]);

  // change value in specification input in form
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const newList = [...form.specifications];
    newList[index].value = value;
    setForm({ ...form, specifications: newList });
  };

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
          {form.specifications.map((i, index) => (
            <li key={index}>
              <div className="flex items-end gap-1">
                <Input
                  touched={touched.specifications}
                  warning={warning}
                  required={index < 6 ? true : false}
                  label={i.title}
                  placeholder={i.placeholder}
                  type="text"
                  value={i.value}
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
          ))}
        </ul>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Loader color="#FDBA74" size={10} />
        </div>
      )}

      <AddMoreSpecification form={form} setForm={setForm} />
    </div>
  );
}

export default AddSpecifications;
