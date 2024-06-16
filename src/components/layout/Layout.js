import Header from "@/layout/Header";
import Overlay from "@/molecules/common/Overlay";
// import Footer from "@/layout/Footer";

async function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Overlay />
    </>
  );
}

export default Layout;
