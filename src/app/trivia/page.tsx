import { getTags, getTrivia } from "./api/trivia";
import LandingPage from "./components/landing";

export default async function TriviaPage() {
  const tags = await getTags();
  const triviaList = await getTrivia();
  return (
    <div className="mx-auto">
      <LandingPage triviaList={triviaList} tags={tags} />
    </div>
  );
}
