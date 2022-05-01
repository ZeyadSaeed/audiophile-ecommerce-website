import { useEffect } from "react";
import type { AppProps } from "next/app";
import { default as uuid } from "node-uuid";
import Layout from "@/components/layout/Layout";
import FormContextWrapper from "contexts/formContext";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const addUser = async () => {
      if (!localStorage.getItem("device")) {
        const generateDeviceId = uuid.v4();
        localStorage.setItem("device", generateDeviceId);
        // ADD USER TO THE DATABASE
        const res = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deviceId: generateDeviceId,
          }),
        });
        const data = await res.json();
        console.log(data);
        return;
      }
    };
    addUser();
  }, []);

  return (
    <Layout>
      <FormContextWrapper>
        <Component {...pageProps} />
      </FormContextWrapper>
    </Layout>
  );
}

export default MyApp;
