"use client";

import { addProductForm } from "@/constants/dashboard";
import AddImage from "src/components/molecules/form/AddImage";
import InputForm from "src/components/molecules/form/InputForm";
import AddPropertyList from "src/components/organisms/admin/AddPropertyList";
import AddSpecifications from "src/components/organisms/admin/AddSpecifications";
import { formProductValidation } from "@/utils/validation/dashboard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "src/components/atoms/Loader";
import TitlePage from "src/components/atoms/TitlePage";
import Button from "@/atoms/Button";

function ProductForm({ product }) {
  const [isLoading, setIsLoading] = useState(false);
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

  const { productId } = useParams();

  useEffect(() => {
    if (product) {
      setForm(product);
      console.log(product);
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
    setIsLoading(true);
    const res = await fetch("/api/admin/products", {
      method: product ? "PATCH" : "POST",
      body: product
        ? JSON.stringify({ ...form, _id: productId })
        : JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setIsLoading(false);
    if (result.error) {
      return toast.error(result.error);
    } else {
      return toast.success(result.message);
    }
  };

  return (
    <div className="admin-page">
      <form className="flex flex-col gap-10 lg:w-[75%]">
        {product ? (
          <TitlePage
            title="ویرایش محصول"
            borderColor="border-green-400"
            color="text-green-400"
          />
        ) : (
          <TitlePage
            title="ثبت محصول"
            borderColor="border-blue-400"
            color="text-blue-400"
          />
        )}
        {addProductForm.map((i, index) => (
          <InputForm
            placeholder={i.placeholder}
            key={index}
            type={i.type}
            name={i.name}
            label={i.label}
            form={form}
            touched={touched}
            setForm={setForm}
            setTouched={setTouched}
            error={warning[i.name]}
            textarea={i.textarea}
            max={i.max}
            min={i.min}
          />
        ))}
        <div>
          <AddSpecifications
            form={form}
            setForm={setForm}
            warning={warning}
            touched={touched}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
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

        {isLoading ? (
          <Loader color="#3B82F6" size={10} />
        ) : product ? (
          <Button
            type="submit"
            color="text-green-500"
            bgColor="bg-green-100"
            title="ویرایش"
            clickHandler={submitHandler}
          />
        ) : (
          <Button
            type="submit"
            color="text-blue-500"
            bgColor="bg-blue-100"
            title="ثبت"
            clickHandler={submitHandler}
          />
        )}
      </form>
    </div>
  );
}

export default ProductForm;
