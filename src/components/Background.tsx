export default function Background() {
  const dotArray = Array.from(Array(25).keys()).map((dot) => {
    const color = setColor(dot);
    const color2 = setColor(dot + 5);
    const size = 20 + (Math.random() * 15);
    return (
      <span
        key={dot}
        style={{
          width: `${size}vmin`,
          height: `${size}vmin`,
          borderRadius: `${size}vmin`,
          backfaceVisibility: "visible",
          position: "absolute",
          animation: dot % 2 === 0 ? "move" : "moveback",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          color,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${20 + (Math.random() * 40)}s`,
          animationDelay: `0s`,
          transformOrigin: `${15 + (Math.random() * 10)}vw ${
            20 + (Math.random() * 10)
          }vh`,
          boxShadow: `${size * 2}vmin ${size * 2}vmin ${
            size * .5
          }vmin ${color}, ${size * -.8}vmin ${size * -.8}vmin ${
            size * .5
          }vmin ${color2}`,
          opacity: .3,
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
    </div>
  );
}

const setColor = (index: number) => {
  switch (index % 10) {
    case 0:
      return "#2a032b";
    case 1:
      return "#240659";
    case 2:
      return "#200636";
    case 3:
      return "#49204a";
    case 4:
      return "#2d1675";
    case 5:
      return "#143661";
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
