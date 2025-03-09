import Components from "../components";
import { Suspense } from "react";
import Section from "./components/Section";
import Cards from "./cards";

export default async function ProjectsPage() {
  return (
    <div className="background mx-auto max-w-6xl my-4 px-2 md:px-6 pb-16 md:pb-0">
      <Suspense fallback={<Components.Loading />}>
        <Section
          leftIcon="/static/images/typescript.svg"
          rightIcon="/static/images/react.svg"
          title="Typescript & React "
        >
          <Cards.TowerSurvivorCard />
          <Cards.PlatformerCard />
          <Cards.FlappyBirdCard />
          <Cards.CalculatorCard />
          <Cards.SimonCard />
          <Cards.DmHelperCard />
          <Cards.PokemonCard />
        </Section>
        <Section
          leftIcon="/static/images/python.svg"
          rightIcon="/static/images/django.svg"
          title="Python & Django"
        >
          <Cards.TriviaCard />
          <Cards.BernoulliCard />
        </Section>
        <Section
          leftIcon="/static/images/flutter.svg"
          rightIcon="/static/images/golang.svg"
          title="Flutter & Go"
        >
          <Cards.BastionCard />
        </Section>
      </Suspense>
    </div>
  );
}
