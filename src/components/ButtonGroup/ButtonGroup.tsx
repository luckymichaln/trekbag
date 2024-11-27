import { ItemsState, useItemsStore } from "../../stores/itemsStore";
import { Button } from "../Button/Button";

export const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore(
    (state: ItemsState) => state.markAllAsComplete
  );
  const markAllAsIncomplete = useItemsStore(
    (state: ItemsState) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore(
    (state: ItemsState) => state.resetToInitial
  );
  const removeAllItems = useItemsStore(
    (state: ItemsState) => state.removeAllItems
  );

  const buttonsGroup = [
    {
      label: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      label: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      label: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      label: "Remove all items",
      onClick: removeAllItems,
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
