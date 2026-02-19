import { Separator } from "@/components/ui/separator";

const ComponentRow = ({
  isLast,
  name,
  onClick,
  selected,
}: {
  isLast?: boolean;
  name: string;
  onClick: (name: string) => void;
  selected: string;
}) => {
  const isSelected = selected === name;
  const handleOnClick = () => {
    onClick(name);
  };
  return (
    <div>
      <div
        onClick={handleOnClick}
        className={`capitalize cursor-pointer px-1 py-2 hover:bg-(--foreground) ${isSelected ? "text-(--primary)" : ""}`}
      >
        {name}
      </div>
      {!isLast && <Separator />}
    </div>
  );
};

export default ComponentRow;
