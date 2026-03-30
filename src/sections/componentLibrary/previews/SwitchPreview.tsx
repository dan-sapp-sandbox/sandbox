import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SwitchPreview = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-(--text) font-bold">Label</span>
      <Switch checked={checked} onCheckedChange={(checked: boolean) => setChecked(checked)} />
    </div>
  );
};

export default SwitchPreview;
