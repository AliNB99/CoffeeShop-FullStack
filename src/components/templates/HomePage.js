import Banner from "@/organisms/home/Banner";
import BestSellerProducts from "@/organisms/home/BestSellerProducts";
import BlogList from "@/organisms/home/BlogList";
import CategoryCoffee from "@/organisms/home/CategoryCoffee";
import CategoryProduct from "@/organisms/home/CategoryProduct";
import CoffeeClub from "@/organisms/home/CoffeeClub";
import NewProducts from "@/organisms/home/NewProducts";
import OptionsStore from "@/organisms/home/OptionsStore";
import OrderRegistration from "@/organisms/home/OrderRegistration";

function HomePage() {
  return (
    <>
      <Banner />
      <NewProducts />
      <CategoryCoffee />
      <CategoryProduct />
      <BestSellerProducts />
      <CoffeeClub />
      <BlogList />
      <OrderRegistration />
      <OptionsStore />
    </>
  );
}

export default HomePage;
