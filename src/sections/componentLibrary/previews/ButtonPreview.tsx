import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { ArrowRight, Compass, Ghost, Lamp, Pen, Trash } from "lucide-react";

const ButtonPreview = () => {
  const sizes = ["icon", "sm", "default", "lg"] as const;
  const variants = ["default", "secondary", "destructive", "ghost", "link", "outline"] as const;
  type Size = (typeof sizes)[number];
  type Variant = (typeof variants)[number];
  const [size, setSize] = useState<Size>("default");
  const [variant, setVariant] = useState<Variant>("default");
  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <div className="w-full flex flex-col justify-center items-center gap-4 xl:hidden">
        <SelectGroup>
          <SelectLabel>Button Size</SelectLabel>
          <Select value={size} onValueChange={(val) => setSize(val as Size)}>
            <SelectTrigger className="w-30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Button Variant</SelectLabel>
          <Select value={variant} onValueChange={(val) => setVariant(val as Variant)}>
            <SelectTrigger className="w-30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {variants.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
        <Button size={size} variant={variant}>
          {size === "icon" ? <Compass /> : <span className="capitalize">{variant}</span>}
        </Button>
      </div>
      <div className="hidden xl:flex flex-row gap-2">
        <div className="hidden 2xl:flex flex-col justify-between h-55">
          <span className="text-xl w-22 mr-12">size="icon"</span>
          <span className="text-xl w-22 mr-12">size="sm"</span>
          <span className="text-xl w-22 mr-12">size="default"</span>
          <span className="text-xl w-22 mr-12">size="lg"</span>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="default">
            <Compass />
          </Button>
          <Button size="sm" variant="default">
            Default
          </Button>
          <Button size="default" variant="default">
            Default
          </Button>
          <Button size="lg" variant="default">
            Default
          </Button>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="secondary">
            <Pen />
          </Button>
          <Button size="sm" variant="secondary">
            Secondary
          </Button>
          <Button size="default" variant="secondary">
            Secondary
          </Button>
          <Button size="lg" variant="secondary">
            Secondary
          </Button>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="destructive">
            <Trash />
          </Button>
          <Button size="sm" variant="destructive">
            Destructive
          </Button>
          <Button size="default" variant="destructive">
            Destructive
          </Button>
          <Button size="lg" variant="destructive">
            Destructive
          </Button>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="ghost">
            <Ghost />
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
          <Button size="default" variant="ghost">
            Ghost
          </Button>
          <Button size="lg" variant="ghost">
            Ghost
          </Button>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="link">
            <ArrowRight />
          </Button>
          <Button size="sm" variant="link">
            Link
          </Button>
          <Button size="default" variant="link">
            Link
          </Button>
          <Button size="lg" variant="link">
            Link
          </Button>
        </div>
        <div className="flex flex-col justify-between h-55">
          <Button size="icon" variant="outline">
            <Lamp />
          </Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="default" variant="outline">
            Outline
          </Button>
          <Button size="lg" variant="outline">
            Outline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPreview;
