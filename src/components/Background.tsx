export default function Background() {
  const dotArray = Array.from(Array(60).keys()).map((dot) => {
    const color = setColor(dot);
    const size = 1 + (Math.random() * 0);
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
          top: `${-50 + (Math.random() * 200)}%`,
          left: `${-50 + (Math.random() * 200)}%`,
          animationDuration: `${30 + (Math.random() * 200)}s`,
          animationDelay: `0s`,
          transformOrigin: `${15 + (Math.random() * 5)}vw ${
            15 + (Math.random() * 5)
          }vh`,
          boxShadow: `${size + 1}vmin 0 1vmin currentColor`,
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
