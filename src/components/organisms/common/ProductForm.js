"use client";

import toast from "react-hot-toast";
import Button from "@/atoms/Button";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "src/components/atoms/Loader";
import { addProductForm } from "@/constants/dashboard";
import AddImage from "src/components/molecules/form/AddImage";
import InputForm from "src/components/molecules/form/InputForm";
import { formProductValidation } from "@/utils/validation/dashboard";
import AddSpecifications from "src/components/organisms/admin/AddSpecifications";
import AddPropertyList from "src/components/organisms/admin/AddPropertyList";
import {
  useSubmitAddProduct,
  useSubmitEditProduct,
} from "src/hooks/useQuery/mutations";
import { useRouter } from "next/navigation";

function ProductForm({ product }) {
  const [action, setAction] = useState(product ? "editProduct" : "addProduct");
  const {
    isPending: isPendingAddProduct,
    isError: isErrorAddProduct,
    mutateAsync: mutateAsyncAddProduct,
  } = useSubmitAddProduct();

  const {
    isPending: isPendingEditProduct,
    isError: isErrorEditProduct,
    mutateAsync: mutateAsyncEditProduct,
  } = useSubmitEditProduct();

  const [warning, setWarning] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
    discount: "",
    category: "coffee",
    images: [],
    advantages: [],
    disadvantages: [],
    specifications: [],
  });

  const { back } = useRouter();
  const { productId } = useParams();

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
      data = await mutateAsyncEditProduct({ form, id: productId });
    } else {
      data = await mutateAsyncAddProduct(form);
    }

    if (data.data.error || isErrorAddProduct || isErrorEditProduct) {
      console.log("error");
      toast.error(data.data.error);
    } else {
      back();
      toast.success(data.data.message);
    }
  };

  return (
    <form className="flex flex-col gap-5 lg:w-[75%]">
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
        <AddPropertyList
          color="text-green-500"
          bgColor="bg-green-100"
          name="advantages"
          title="مزایا"
          form={form}
          setForm={setForm}
        />
        <AddPropertyList
          color="text-red-500"
          bgColor="bg-red-100"
          name="disadvantages"
          title="معایب"
          form={form}
          setForm={setForm}
        />
      </div>
      {/* add images */}

      <AddImage form={form} setForm={setForm} />

      {isPendingAddProduct || isPendingEditProduct ? (
        product ? (
          <Loader color="#22C55E" size={10} />
        ) : (
          <Loader color="#3B82F6" size={10} />
        )
      ) : product ? (
        <Button
          type="button"
          color="text-green-500"
          bgColor="bg-green-100"
          clickHandler={submitHandler}
        >
          ویرایش
        </Button>
      ) : (
        <Button
          type="button"
          color="text-blue-500"
          bgColor="bg-blue-100"
          clickHandler={submitHandler}
        >
          ثبت
        </Button>
      )}
    </form>
  );
}

export default ProductForm;
