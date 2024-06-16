function SelectCategory({ form, setForm }) {
  // change selected option value in form
  const changeOption = (e) => {
    setForm({ ...form, category: e.target.value });
  };


  return (
    <div className="flex flex-col gap-2">
      <label>دسته بندی</label>
      <select
        className={`w-40 p-2 rounded-md border-2 dark:bg-zinc-700 shadow-medium ${
          form.category === "coffee"
            ? "border-orange-200 shadow-orange-200 dark:shadow-none"
            : "border-purple-300 shadow-purple-300 dark:shadow-none"
        } cursor-pointer outline-none`}
        value={form.category}
        name="category"
        onChange={changeOption}
      >
        <option value="coffee">قهوه ها</option>
        <option value="accessory">لوازم جانبی</option>
      </select>
    </div>
  );
}

export default SelectCategory;
