import { useRouter } from "next/router";
import { LayoutProps } from "../../../types/layout";
import Header from "./Header";
import BestGearSection from "../bestGearSection/BestGearSection";
import Footer from "../footer/Footer";

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      <Header />
      {children}
      {pathname !== "/checkout" && <BestGearSection />}
      <Footer />
    </>
  );
};
export default Layout;
