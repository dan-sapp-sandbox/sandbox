import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const TriviaCard = () => {
  return (
    <Card className="col-span-12 rounded bg-slate-200 my-8">
      <CardContent className="grid-cols-12 grid justify-between">
        <div className="col-span-7 items-start">
          <Typography variant="h5" component="div" className="font-bold">
            Horseshoes and Hand Grenades
          </Typography>
          <Typography variant="subtitle1" component="div" className="my-2">
            The game where being close counts!
          </Typography>
          <Typography variant="body1" component="div">
            This is a trivia game where you try to be as close as you can to the
            right answer. The problem was designed to get me more experience
            using statistics and machine learning to generate questions for a
            game.
          </Typography>
        </div>
        <Link
          className="flex col-span-5 justify-self-end"
          href="/projects/trivia"
        >
          {/* eslint-disable-next-line */}
          <img
            alt="trivia-screen-shot"
            className="max-h-80"
            src="/static/images/trivia-screen-shot.png"
          />
        </Link>
      </CardContent>
      <CardActions>
        <Button size="large">
          <Link href="/projects/trivia">
            Check it out!
          </Link>
        </Button>
        <Button size="large">
          <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia">
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

export default TriviaCard;
