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

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto mt-6">
      <main className="grid grid-rows-12 grid-flow-row gap-8 row-start-2 items-center sm:items-start">
        <div className="flex-grow font-semibold mx-auto text-center flex flex-col">
          <h1 className="flex text-4xl">Dan Sapp</h1>
        </div>
        <Card className="flex flex-row">
          <CardHeader className="basis-1">
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
          <CardFooter className="flex basis-1 justify-end gap-2 mt-auto items-center">
            <Button asChild className="basis-1/3">
              <Link href={`/`}>View Resume</Link>
            </Button>
            <Button asChild>
              <Link href={`https://github.com/dan-sapp-sandbox/sandbox`}>
                GitHub
              </Link>
            </Button>
            <Button asChild>
              <Link href={`https://www.linkedin.com/in/dan-sapp-744145B6/`}>
                LinkedIn
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <div>Projects</div>
        <Card className="flex-auto">
          <CardHeader>
            <CardTitle>Pokemon Team Builder</CardTitle>
            <CardDescription>
              Build the best team or see how your favorites compare!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Technologies Used:</p>
            <p>What&apos;s cool about it:</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 mt-auto">
            <Button asChild>
              <Link href={`/pokemon`}>Check it out</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex-auto">
          <CardHeader>
            <CardTitle>Magic The Gathering Deck Builder</CardTitle>
            <CardDescription>Build a magic the gathering Deck</CardDescription>
          </CardHeader>
          <CardContent>
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
