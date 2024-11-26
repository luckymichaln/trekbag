import { Button } from "../Button/Button";

type buttonGroupProps = {
  onCompleteAllItems: () => void;
  onIncompleteAllItems: () => void;
  onResetAllItems: () => void;
  onRemoveAllItems: () => void;
};

export const ButtonGroup = ({
  onCompleteAllItems,
  onIncompleteAllItems,
  onResetAllItems,
  onRemoveAllItems,
}: buttonGroupProps) => {
  const buttonsGroup = [
    {
      label: "Mark all as complete",
      onClick: onCompleteAllItems,
    },
    {
      label: "Mark all as incomplete",
      onClick: onIncompleteAllItems,
    },
    {
      label: "Reset to initial",
      onClick: onResetAllItems,
    },
    {
      label: "Remove all items",
      onClick: onRemoveAllItems,
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
