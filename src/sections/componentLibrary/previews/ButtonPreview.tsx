import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Ghost, Lamp, Pen, Trash } from "lucide-react";

const ButtonPreview = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col justify-between h-55">
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
  );
};

export default ButtonPreview;
