import { getTrivia } from "./api/trivia";
import LandingPage from "./components/landing";

export default async function TriviaPage() {
  const triviaList = await getTrivia();

  return (
    <div className="mx-auto">
      <LandingPage triviaList={triviaList} />
    </div>
  );
}
