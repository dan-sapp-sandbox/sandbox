import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 0;

export default function Portfolio() {
  // preview images for projects
  return (
    <div className="max-w-8xl mx-auto mt-6">
      <main className="gap-2 grid grid-flow-row-dense grid-cols-12">
        <div className="col-span-12 font-semibold mx-auto text-center flex flex-col my-6">
          <h1 className="flex text-4xl">Dan Sapp</h1>
        </div>
        <Card className="col-span-12 rounded-lg justify-center items-center my-6">
          <CardHeader className="col-span-3">
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Summary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Experienced Software Engineer with 7+ years of experience in
              designing, building, and maintaining complex web applications.
              Expertise in React.js and modern JavaScript frameworks, proficient
              in building scalable, high-performance applications with clean and
              reusable code. Strong background in front-end architecture, API
              integrations, state management, and collaboration with
              cross-functional teams.
            </p>
          </CardContent>
          <CardFooter className="gap-2 flex grid-cols-12 justify-end">
            <Button asChild className="col-span-2">
              <Link href={`/`}>View Resume</Link>
            </Button>
            <Button asChild className="col-span-2">
              <Link href={`https://github.com/dan-sapp-sandbox/sandbox`}>
                GitHub
              </Link>
            </Button>
            <Button asChild className="col-span-2">
              <Link href={`https://www.linkedin.com/in/dan-sapp-744145B6/`}>
                LinkedIn
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <div className="mt-5 p-0 col-span-12 font-bold rounded-lg justify-center items-center text-3xl">
          Projects
        </div>
        <Card className="col-span-12 rounded-lg justify-center items-center my-5">
          <CardHeader>
            <CardTitle>Pokemon Team Builder</CardTitle>
            <CardDescription>
              Build the best team or see how your favorites compare!
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <p>
              Technologies Used: Next.js, React Query, Tailwind, shadCN,
              Node.js, Drizzle, PostgreSQL
            </p>
            <p>What&apos;s cool about it: Uses server side rendering.</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 mt-auto">
            <Button asChild>
              <Link href={`/pokemon`}>Check it out</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 rounded-lg justify-center items-center">
          <CardHeader>
            <CardTitle>Magic The Gathering Deck Builder</CardTitle>
            <CardDescription>Build a Magic the Gathering deck</CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <p>Technologies Used:</p>
            <p>What&apos;s cool about it:</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 mt-auto">
            <Button asChild>
              <Link href={`/mtg`}>Check it out</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
