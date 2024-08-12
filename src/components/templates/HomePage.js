import Banner from "@/organisms/home/Banner";
import CategoryCoffee from "@/organisms/home/CategoryCoffee";
import CategoryProduct from "@/organisms/home/CategoryProduct";
import NewProducts from "@/organisms/home/NewProducts";

function HomePage() {
  return (
    <>
      <Banner />
      <NewProducts />
      <CategoryCoffee />
      <CategoryProduct />
    </>
  );
}

export default HomePage;
