import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import Loader from "@/atoms/Loader";
import SelectCategory from "@/atoms/SelectCategory";
import { addAccessoryItem, addCoffeeItem } from "@/constants/dashboard";
import AddMoreSpecification from "@/molecules/form/AddMoreSpecification";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function AddSpecifications({ form, setForm, warning, touched }) {
  // add more item in specifications in form
  const [addItem, setAddItem] = useState(null);
  const [categoryItem, setCategoryItem] = useState({});

  // set specification value based on category
  useEffect(() => {
    // When a value is not recorded in the form
    if (form.category === "coffee") {
      setForm({ ...form, specifications: addCoffeeItem });
      setCategoryItem(addCoffeeItem);
    } else {
      setForm({ ...form, specifications: addAccessoryItem });
      setCategoryItem(addAccessoryItem);
    }
  }, [form.category]);

  useEffect(() => {
    if (form.specifications.length) {
      setCategoryItem(form.specifications);
      return;
    }
  });

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
      <div className="flex flex-col gap-5 justify-between mb-5 sm:mb-10">
        <SelectCategory form={form} setForm={setForm} />
        {touched.specifications && (
          <span className="text-red-500 text-sm">{warning.specifications}</span>
        )}
      </div>
      {form.specifications.length ? (
        <ul className="w-full grid sm:grid-cols-2 gap-6 sm:gap-4">
          {form.specifications.map((i, index) => (
            <li key={index}>
              {console.log(index, categoryItem.length)}
              <div className="flex items-end gap-1">
                <Input
                  touched={touched.specifications}
                  warning={warning}
                  required={
                    index+1 < form.specifications.length ? true : false
                  }
                  label={i.title}
                  placeholder={i.placeholder}
                  type="text"
                  value={i.value}
                  changeHandler={(e) => changeHandler(e, index)}
                />

                {index > categoryItem.length - 1 && (
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

      <AddMoreSpecification
        addItem={addItem}
        setAddItem={setAddItem}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}

export default AddSpecifications;
