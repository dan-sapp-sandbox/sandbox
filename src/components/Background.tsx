import "./Background.css";
export default function Background() {
  return (
    <div className="background">
      {Array.from(Array(21).keys()).map(() => <span></span>)}
    </div>
  );
}
