import { buttonsGroup } from "../../lib/contants";
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
  const handleButtonGroupClick = (role: string) => {
    switch (role) {
      case "complete":
        onCompleteAllItems();
        break;
      case "incomplete":
        onIncompleteAllItems();
        break;
      case "reset":
        onResetAllItems();
        break;
      case "remove":
        onRemoveAllItems();
        break;
      default:
        () => null;
    }
  };

  return (
    <div className="button-group">
      {buttonsGroup.map((button: { label: string; role: string }) => (
        <Button
          onClick={() => handleButtonGroupClick(button.role)}
          key={button.label}
          buttonType="secondary"
          label={button.label}
        />
      ))}
    </div>
  );
};
