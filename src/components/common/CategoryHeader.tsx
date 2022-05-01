import styles from "@/styles/Common.module.scss";

const CategoryHeader = ({ category }: { category: string }) => {
  return (
    <header className={styles.categoryHeader}>
      <div>
        <h1>{category}</h1>
      </div>
    </header>
  );
};
export default CategoryHeader;
