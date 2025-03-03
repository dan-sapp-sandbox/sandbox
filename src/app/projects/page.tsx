import Loading from "../loading";
import { Suspense } from "react";
import Section from "./components/Section";
import PokemonCard from "./containers/PokemonCard";
import TriviaCard from "./containers/TriviaCard";
import BastionCard from "./containers/BastionCard";
import BernoulliCard from "./containers/BernoulliCard";
import CalculatorCard from "./containers/CalculatorCard";
import SimonCard from "./containers/SimonCard";
import DmHelperCard from "./containers/DmHelperCard";

export default async function ProjectsPage() {
  return (
    <div className="background mx-auto max-w-6xl my-4 px-2 md:px-6 pb-16 md:pb-0">
      <Suspense fallback={<Loading />}>
        <Section
          leftIcon="/static/images/react.svg"
          rightIcon="/static/images/typescript.svg"
          title="React & Typescript"
        >
          <CalculatorCard />
          <SimonCard />
          <DmHelperCard />
          <PokemonCard />
        </Section>
        <Section
          leftIcon="/static/images/python.svg"
          rightIcon="/static/images/django.svg"
          title="Python & Django"
        >
          <TriviaCard />
          <BernoulliCard />
        </Section>
        <Section
          leftIcon="/static/images/flutter.svg"
          rightIcon="/static/images/golang.svg"
          title="Flutter & Go"
        >
          <BastionCard />
        </Section>
      </Suspense>
    </div>
  );
}
