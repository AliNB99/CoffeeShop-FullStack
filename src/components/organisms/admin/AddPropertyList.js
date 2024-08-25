import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import Button from "@/atoms/Button";
import Input from "@/atoms/Input";

function AddPropertyList({ color, bgColor, name, title, form, setForm }) {
  // add new Property
  const addHandler = () => {
    const list = [...form[name]];
    list.push("");
    setForm({ ...form, [name]: list });
  };

  // change property value in form
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...form[name]];
    list[index] = value;
    setForm({ ...form, [name]: list });
  };

  // delete property value in from
  const deleteHandler = (index) => {
    const list = [...form[name]];
    list.splice(index, 1);
    setForm({ ...form, [name]: list });
  };

  return (
    <div className="w-full flex flex-col items-start space-y-4">
      <label
        className={`${color} font-bold
      `}
      >
        {title}
      </label>

      <div className="w-full space-y-2">
        {form[name].map((i, index) => (
          <div key={index} className="flex items-center gap-1">
            <Input
              placeholder="توضیحات را وارد نمایید"
              type="text"
              value={i}
              changeHandler={(e) => changeHandler(e, index)}
            />
            <Button
              clickHandler={() => deleteHandler(index)}
              type="button"
              color="text-orange-500"
              bgColor="bg-orange-100"
              borderColor="border-orange-200"
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>

      <Button
        color={color}
        bgColor={bgColor}
        clickHandler={addHandler}
        type="button"
      >
        <PlusCircleIcon />
        <span>افزودن</span>
      </Button>
    </div>
  );
}

export default AddPropertyList;
