export default function Background() {
  const dotArray = Array.from(Array(20).keys()).map((dot) => {
    const color = setColor(dot);
    const size = 5 + (Math.random() * 15);
    return (
      <span
        key={dot}
        style={{
          width: `${size}vmin`,
          height: `${size}vmin`,
          borderRadius: `${size}vmin`,
          backfaceVisibility: "hidden",
          position: "absolute",
          animation: "move",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          color,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + (Math.random() * 30)}s`,
          animationDelay: `0s`,
          transformOrigin: `${15 + (Math.random() * 10)}vw ${
            -15 + (Math.random() * 10)
          }vh`,
          // boxShadow: `${size * .75}vmin ${size * .75}vmin ${size * .5}vmin ${color}`,
          boxShadow: `${size * .75}vmin ${size * .75}vmin ${
            size * .75
          }vmin ${color}, ${size * -.7}vmin ${size * -.7}vmin ${
            size * .75
          }vmin ${color}`,
          opacity: .45,
        }}
      >
      </span>
    );
  });
  const dotArray2 = Array.from(Array(15).keys()).map((dot) => {
    const color = "#150226";
    const size = 5 + (Math.random() * 5);
    return (
      <span
        key={dot}
        style={{
          width: `${size}vmin`,
          height: `${size}vmin`,
          borderRadius: `${size}vmin`,
          backfaceVisibility: "hidden",
          position: "absolute",
          animation: "move",
          animationTimingFunction: "ease-in",
          animationIterationCount: "infinite",
          color,
          bottom: `${Math.random() * 10}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + (Math.random() * 30)}s`,
          animationDelay: `0s`,
          transformOrigin: `${10 + (Math.random() * 20)}vw -20vh`,
          boxShadow: `${size * .75}vmin ${size * .75}vmin ${
            size * .25
          }vmin #150226`,
          opacity: .05,
        }}
      >
      </span>
    );
  });
  return (
    <div
      style={{ background: "#150226" }}
      className="z-0 top-0 left-0 right-0 bottom-0 fixed overflow-hidden"
    >
      {dotArray}
      {dotArray2}
    </div>
  );
}

const setColor = (index: number) => {
  switch (index % 10) {
    case 0:
      return "#2b0b63";
    case 1:
      return "#240659";
    case 2:
      return "#200636";
    case 3:
      return "#450947";
    case 4:
      return "#2d1675";
    case 5:
      return "#1f0a63";
    case 6:
      return "#450947";
    case 7:
      return "#3d0613";
    case 8:
      return "#470b19";
    case 9:
      return "#36020e";
  }
};
