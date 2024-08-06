import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loader"]}>
      <div className={styles["item1"]} />
      <div className={styles["item2"]} />
      <div className={styles["item3"]} />
    </div>
  );
};


export default Loading;