import { StyledCard } from "./components";

const TriviaCard = () => {
  return (
    <StyledCard
      title="Horseshoes and Hand Grenades"
      description={"The game where being close counts!"}
      screenshot="/static/images/trivia-screen-shot.png"
      projectLink="/trivia"
      serverLink="https://github.com/dan-sapp-sandbox/node_server"
      appLink="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia"
    >
      <div className="col-span-12 xl:col-span-12">
        <p className="max-w-4xl text-zinc-200 lg:text-xl">
          This is a trivia game where you try to be as close as you can to the
          right answer.
        </p>
        <p className="max-w-4xl text-zinc-200 lg:text-xl">
          This is a scaffold for me to get more experience with using statistics
          and machine learning to generate questions for a game.
        </p>
      </div>
    </StyledCard>
  );
};

export default TriviaCard;
