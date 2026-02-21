import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";

const CardPreview = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Card className="w-full md:w-100">
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Card Title</CardTitle>
          <CardDescription className="text-sm md:text-base">Card Description</CardDescription>
        </CardHeader>
        <CardContent className="text-sm md:text-base">Card Content</CardContent>
        <CardFooter className="text-sm md:text-base">Card Footer</CardFooter>
      </Card>
      <Card isAlt={true} className="w-full md:w-100">
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Card Title</CardTitle>
          <CardDescription className="text-sm md:text-base">Card Description</CardDescription>
        </CardHeader>
        <CardContent className="text-sm md:text-base">Card Content</CardContent>
        <CardFooter className="text-sm md:text-base">Card Footer</CardFooter>
      </Card>
    </div>
  );
};

export default CardPreview;
