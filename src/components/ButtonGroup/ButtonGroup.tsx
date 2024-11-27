import { useItemsContext } from "../../hooks/useItemsContext";
import { Button } from "../Button/Button";

export const ButtonGroup = () => {
  const {
    handleCompleteAllItems,
    handleIncompleteAllItems,
    handleResetAllItems,
    handleRemoveAllItems,
  } = useItemsContext();

  const buttonsGroup = [
    {
      label: "Mark all as complete",
      onClick: handleCompleteAllItems,
    },
    {
      label: "Mark all as incomplete",
      onClick: handleIncompleteAllItems,
    },
    {
      label: "Reset to initial",
      onClick: handleResetAllItems,
    },
    {
      label: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <div className="button-group">
      {buttonsGroup.map(
        ({ label, onClick }: { label: string; onClick: () => void }) => (
          <Button
            onClick={onClick}
            key={label + onClick.toString()}
            buttonType="secondary"
            label={label}
          />
        )
      )}
    </div>
  );
};
