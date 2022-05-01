import { useRouter } from "next/router";
import { LayoutProps } from "../../types/layout";
import Header from "./header/Header";
import BestGearSection from "./bestGearSection/BestGearSection";
import Footer from "./footer/Footer";

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
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
