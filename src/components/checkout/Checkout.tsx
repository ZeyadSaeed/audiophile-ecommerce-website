import GoBackBtn from "@/components/common/product/productInfo/GoBackBtn";
import styles from "@/styles/Checkout.module.scss";
import FormSection from "./FormSection";
import SubmitSection from "./SubmitSection";

const Checkout = () => {
  return (
    <main className={styles.main}>
      <section className={styles.formContainer}>
        <GoBackBtn />

        <form>
          <FormSection />
          <SubmitSection />
        </form>
      </section>
    </main>
  );
};

export default Checkout;
