import { buttonsGroup } from "../../lib/contants";
import { Button } from "../Button/Button";

export const ButtonGroup = () => {
  return (
    <div className="button-group">
      {buttonsGroup.map((label) => (
        <Button key={label} type="secondary" label={label} />
      ))}
    </div>
  );
};
