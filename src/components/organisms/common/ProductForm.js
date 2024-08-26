"use client";

import {
  addProductForm,
  AddPropertyListItem,
  formItem,
} from "@/constants/dashboardItem";
import AddSpecifications from "src/components/organisms/admin/AddSpecifications";
import AddPropertyList from "src/components/organisms/admin/AddPropertyList";
import { formProductValidation } from "@/utils/validation/dashboard";
import InputForm from "src/components/molecules/form/InputForm";
import AddImage from "src/components/molecules/form/AddImage";
import Loader from "src/components/atoms/Loader";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/atoms/Button";
import {
  useSubmitAddProduct,
  useSubmitEditProduct,
} from "src/hooks/useQuery/mutations";
import { useRouter } from "next/navigation";

function ProductForm({ product }) {
  const { isPending: isPendingAdd, mutateAsync: mutateAsyncAdd } =
    useSubmitAddProduct();
  const { isPending: isPendingEdit, mutateAsync: mutateAsyncEdit } =
    useSubmitEditProduct();

  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState(formItem);
  const { productId } = useParams();
  const { back } = useRouter();

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, []);
  useEffect(() => {
    setWarning(formProductValidation(form));
  }, [form]);

  // function to store information in the database
  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(warning).length) {
      toast.error("لطفا مقادیر مورد نیاز را وارد نمایید");
      return setTouched({
        title: true,
        description: true,
        quantity: true,
        price: true,
        specifications: true,
      });
    }
    let data;
    if (product) {
      data = await mutateAsyncEdit({ form, id: productId });
    } else {
      data = await mutateAsyncAdd(form);
    }

    back();
  };
  return (
    <form className="w-full lg:w-[75%] flex flex-col gap-5">
      {addProductForm.map((i, index) => (
        <div key={index} className="space-y-2">
          <label htmlFor={i.name} className="font-bold">
            {i.label}
          </label>
          <InputForm
            id={i.name}
            placeholder={i.placeholder}
            key={index}
            type={i.type}
            name={i.name}
            form={form}
            touched={touched}
            setForm={setForm}
            setTouched={setTouched}
            error={warning[i.name]}
            textarea={i.textarea}
            max={i.max}
            min={i.min}
          />
        </div>
      ))}
      <div>
        <AddSpecifications
          product={product}
          form={form}
          setForm={setForm}
          warning={warning}
          touched={touched}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 my-10">
        {AddPropertyListItem.map((i, index) => (
          <AddPropertyList
            key={index}
            color={i.color}
            bgColor={i.bgColor}
            name={i.name}
            title={i.title}
            form={form}
            setForm={setForm}
          />
        ))}
      </div>
      <AddImage form={form} setForm={setForm} />
      {isPendingAdd || isPendingEdit ? (
        <Loader color={product ? "bg-green-500" : "bg-blue-500"} size={2} />
      ) : (
        <Button
          type="button"
          color={product ? "text-green-500" : "text-blue-500"}
          bgColor={product ? "bg-green-100" : "bg-blue-100"}
          clickHandler={submitHandler}
        >
          {product ? "ویرایش" : "ثبت"}
        </Button>
      )}
    </form>
  );
}

export default ProductForm;
