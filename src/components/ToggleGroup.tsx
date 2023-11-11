import { useState } from "react";
import "../styles/ToggleGroup.css";

interface Props {
  labels: string[];
  groupName: string;
  selected: string;
  onChange?: (value: string) => void;
}

const ToggleGroup = ({ labels, groupName, selected, onChange }: Props) => {
  const [active, setActive] = useState<string>(selected);

  return (
    <form className="toggle-group">
      {labels.map((label, index) => (
        <label
          key={index}
          className={active === label ? "active" : undefined}
          htmlFor={`${groupName}-${label}`}
        >
          <input
            id={`${groupName}-${label}`}
            name={groupName}
            type="radio"
            value={active}
            onChange={() => {
              setActive(label);
              if (onChange) {
                onChange(label);
              }
            }}
          />
          {label}
        </label>
      ))}
    </form>
  );
};

export default ToggleGroup;
