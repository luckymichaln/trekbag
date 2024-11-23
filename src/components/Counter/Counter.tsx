type CounterProps = {
  itemsPackedAmount: number;
  allItemsAmount: number;
};

export const Counter = ({
  itemsPackedAmount,
  allItemsAmount,
}: CounterProps) => {
  return (
    <p>
      <b>{itemsPackedAmount}</b> / {allItemsAmount} items packed
    </p>
  );
};
