import { StyledCard } from "./components";

const PokemonCard = () => {
  return (
    <StyledCard
      title="Pokemon Team Builder"
      description={"Build the best team or see how your favorites compare!"}
      screenshot="/static/images/pokemon-screen-shot.png"
      projectLink="/pokemon"
      serverLink="https://github.com/dan-sapp-sandbox/node_server"
      appLink="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon"
    >
      <div className="col-span-12 lg:col-span-8">
        <p className="max-w-4xl text-zinc-200 lg:text-xl">
          This is an end-to-end proof-of-concept for the portfolio. It uses a
          postGres database to store the pokemon and an Express/Node Web Server
          to deliver them to a Next.js App which server-side renders the
          content.
        </p>
      </div>
    </StyledCard>
  );
};

export default PokemonCard;
