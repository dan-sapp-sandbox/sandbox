import { UseFormRegister } from "react-hook-form";
import { Player } from "../hooks/usePartyState";

interface Props {
  title: string;
  fieldName:
    | "hp"
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma";
  readOnly: boolean;
  register: UseFormRegister<Player>;
}

const StyledInput = ({ title, fieldName, readOnly, register }: Props) => {
  return (
    <div className="flex">
      <label className="text-2xl mr-2">{title}:</label>
      <input
        className={`text-2xl w-16 ${
          readOnly ? "bg-transparent" : "bg-blue-900"
        }`}
        disabled={readOnly}
        type="number"
        {...register(fieldName)}
      />
    </div>
  );
};

export default StyledInput;
