import { Counter } from "../Counter/Counter";
import { Logo } from "../Logo/Logo";
import { useItemsContext } from "../../hooks/useItemsContext";

export const Header = () => {
  const { packedItemsAmount, itemsAmount } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter allItems={itemsAmount} itemsPacked={packedItemsAmount} />
    </header>
  );
};
