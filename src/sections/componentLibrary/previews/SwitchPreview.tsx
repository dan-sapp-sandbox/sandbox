import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SwitchPreview = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch checked={checked} onCheckedChange={(checked: boolean) => setChecked(checked)} />
    </div>
  );
};

export default SwitchPreview;
