import { useRouter } from "next/router";
import { LayoutProps } from "../types/layout";
import Header from "./header";

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
