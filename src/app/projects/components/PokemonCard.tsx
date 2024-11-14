import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const PokemonCard = () => {
  return (
    <Card className="col-span-12 rounded bg-slate-200 my-8">
      <CardContent className="grid-cols-12 grid justify-between">
        <div className="col-span-7">
          <Typography variant="h5" component="div" className="font-bold">
            Pokemon Team Builder
          </Typography>
          <Typography variant="subtitle1" component="div" className="my-2">
            Build the best team or see how your favorites compare!
          </Typography>
          <Typography variant="body1" component="div">
            This is an end-to-end proof-of-concept for the portfolio. It uses a
            postGres database to store the pokemon and an Express/Node Web
            Server to deliver them to a Next.js App which server-side renders
            the content.
          </Typography>
        </div>
        <Link
          className="flex col-span-5 justify-self-end"
          href="/projects/pokemon"
        >
          <img
            className="max-h-80"
            src="/static/images/pokemon-screen-shot.png"
          />
        </Link>
      </CardContent>
      <CardActions>
        <Button size="large">
          <Link href="/projects/pokemon">
            Check it out!
          </Link>
        </Button>
        <Button size="large">
          <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon">
            App Code
          </Link>
        </Button>
        <Button size="large">
          <Link href="https://github.com/dan-sapp-sandbox/node_server">
            Server Code
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
