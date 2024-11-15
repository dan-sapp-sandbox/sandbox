export default function Background() {
  const dotArray = Array.from(Array(40).keys()).map((dot) => {
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
          top: `${-10 + (Math.random() * 120)}%`,
          left: `${-10 + (Math.random() * 120)}%`,
          animationDuration: `${10 + (Math.random() * 10)}s`,
          animationDelay: `0s`,
          transformOrigin: `${15 + (Math.random() * 5)}vw ${
            15 + (Math.random() * 5)
          }vh`,
          boxShadow: `${size * 1}vmin ${1 * 1}vmin ${size * 1}vmin ${color}`,
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
  switch (index % 6) {
    case 0:
      return "#7a46f2";
    case 1:
      return "#3c0cab";
    case 2:
      return "#761a91";
    case 3:
      return "#742b8a";
    case 4:
      return "#731239";
    case 5:
      return "#780533";
  }
};
