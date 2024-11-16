export default function Background() {
  const dotArray = Array.from(Array(80).keys()).map((dot) => {
    const color = setColor(dot);
    const size = 10 + (Math.random() * 10);
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
          top: `${-5 + (Math.random() * 110)}%`,
          left: `${-5 + (Math.random() * 110)}%`,
          animationDuration: `${10 + (Math.random() * 60)}s`,
          animationDelay: `0s`,
          transformOrigin: `${15 + (Math.random() * 7)}vw ${
            15 + (Math.random() * 7)
          }vh`,
          boxShadow: `${size * 1}vmin ${5 * 1}vmin ${size * .75}vmin ${color}`,
        }}
      >
      </span>
    );
  });
  return (
    <div
      style={{ background: "#0f011e" }}
      className="z-0 top-0 left-0 right-0 bottom-0 fixed overflow-hidden"
    >
      {dotArray}
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
