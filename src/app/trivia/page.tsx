import Prompt from "./components/prompt";
import { getTrivia } from "./api/trivia";

export default async function TriviaPage() {
  const triviaList = await getTrivia();

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <Prompt triviaList={triviaList}/>
    </div>
  );
}
