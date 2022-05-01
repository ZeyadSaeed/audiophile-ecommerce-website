import Categories from "@/components/common/categories";
import styles from "@/styles/Layout.module.scss";

const MenuOpen = ({
  setIsMenuOpen,
  isMenuOpen,
  scroll,
}: {
  setIsMenuOpen: (open: boolean) => void;
  isMenuOpen: boolean;
  scroll: boolean;
}) => {
  return (
    <>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${styles.blackScreen} ${
          !scroll && styles.blackScreenFullScreen
        }`}
      />
      <dialog className={styles.burgerMenuOpen} open={isMenuOpen}>
        <Categories />
      </dialog>
    </>
  );
};
export default MenuOpen;
