import Loading from "../loading";
import PokemonCard from "./containers/PokemonCard";
import TriviaCard from "./containers/TriviaCard";
import BastionCard from "./containers/BastionCard";
import BernoulliCard from "./containers/BernoulliCard";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <div className="background mx-auto max-w-6xl my-4 px-2 md:px-6 pb-16 md:pb-0">
      <Suspense fallback={<Loading />}>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-zinc-200 text-3xl md:text-4xl flex pl-2">
            {/* eslint-disable-next-line */}
            <img
              key="react-logo"
              alt="react-logo"
              className="h-8 pr-4 inline self-center"
              src="/static/images/react.svg"
            />
            React & Typescript
            {/* eslint-disable-next-line */}
            <img
              key="typescript-logo"
              alt="typescript-logo"
              className="h-8 pl-4 inline self-center"
              src="/static/images/typescript.svg"
            />
          </span>
          <PokemonCard />
        </div>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-zinc-200 text-3xl md:text-4xl flex pl-2">
            {/* eslint-disable-next-line */}
            <img
              key="python-logo"
              alt="python-logo"
              className="h-8 pr-4 inline self-center"
              src="/static/images/python.svg"
            />
            Python & Django
            {/* eslint-disable-next-line */}
            <img
              key="django-logo"
              alt="django-logo"
              className="h-8 pl-4 inline self-center"
              src="/static/images/django.svg"
            />
          </span>
          <TriviaCard />
          <BernoulliCard />
        </div>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-zinc-200 text-3xl md:text-4xl flex pl-2">
            {/* eslint-disable-next-line */}
            <img
              key="flutter-logo"
              alt="flutter-logo"
              className="h-8 pr-4 inline self-center"
              src="/static/images/flutter.svg"
            />
            Flutter & Go
            {/* eslint-disable-next-line */}
            <img
              key="go-logo"
              alt="go-logo"
              className="h-8 pl-4 inline self-center"
              src="/static/images/golang.svg"
            />
          </span>
          <BastionCard />
        </div>
      </Suspense>
    </div>
  );
}
