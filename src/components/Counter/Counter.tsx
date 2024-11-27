import styles from "./Counter.module.scss";

type CounterProps = {
  allItems: number;
  itemsPacked: number;
};

export const Counter = ({ allItems, itemsPacked }: CounterProps) => {
  return (
    <p className={styles.counter}>
      <b>{itemsPacked}</b> / {allItems} items packed
    </p>
  );
};
