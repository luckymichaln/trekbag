import styles from "./EmptyView.module.scss";

export const EmptyView = () => {
  return (
    <section className={styles.emptyView}>
      <h3>Empty Packing List</h3>
      <p>Start by adding some items you don't want to forget</p>
    </section>
  );
};
