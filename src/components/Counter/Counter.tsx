type CounterProps = {
  allItems: number;
  itemsPacked: number;
};

export const Counter = ({ allItems, itemsPacked }: CounterProps) => {
  return (
    <p>
      <b>{itemsPacked}</b> / {allItems} items packed
    </p>
  );
};
