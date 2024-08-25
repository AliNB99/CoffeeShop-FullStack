import OrderRegistrationByPhone from "@/organisms/home/OrderRegistrationByPhone";
import BestSellerProducts from "@/organisms/home/BestSellerProducts";
import CategoryProduct from "@/organisms/home/CategoryProduct";
import CategoryCoffee from "@/organisms/home/CategoryCoffee";
import OptionsStore from "@/organisms/home/OptionsStore";
import NewProducts from "@/organisms/home/NewProducts";
import CoffeeClub from "@/organisms/home/CoffeeClub";
import BlogList from "@/organisms/home/BlogList";
import Banner from "@/organisms/home/Banner";

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
      <OrderRegistrationByPhone />
      <OptionsStore />
    </>
  );
}

export default HomePage;
