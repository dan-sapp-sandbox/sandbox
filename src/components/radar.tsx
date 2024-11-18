import * as d3 from "d3";
import { AxisConfig, INNER_RADIUS, RadarGrid } from "./radarGrid";

export type Variable =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

type DataItem<T extends string> = {
  [key in T]: number;
};

export type Data = DataItem<Variable>;

const MARGIN = 30;

type YScale = d3.ScaleRadial<number, number, never>;

type RadarProps = {
  width: number;
  height: number;
  data: Data;
  axisConfig: AxisConfig[];
};

export const Radar = ({ width, height, data, axisConfig }: RadarProps) => {
  const outerRadius = Math.min(width, height) / 2 - MARGIN;

  const allVariableNames = axisConfig.map((axis) => axis.name);

  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  const yScales: { [name: string]: YScale } = {};

  axisConfig.forEach((axis) => {
    yScales[axis.name] = d3
      .scaleRadial()
      .domain([0, axis.max])
      .range([INNER_RADIUS, outerRadius]);
  });
  const lineGenerator = d3.lineRadial();
  const allCoordinates = axisConfig.map((axis) => {
    const yScale = yScales[axis.name];
    const angle = xScale(axis.name) ?? 0;
    const radius = yScale(data[axis.name]);
    const coordinate: [number, number] = [angle, radius];
    return coordinate;
  });

  allCoordinates.push(allCoordinates[0]);
  const linePath = lineGenerator(allCoordinates);
  const lineColor = "#cb1dd1";
  return (
    <svg width={width} height={height}>
      <g transform={"translate(" + width / 2 + "," + height / 2 + ")"}>
        <RadarGrid
          outerRadius={outerRadius}
          xScale={xScale}
          axisConfig={axisConfig}
        />
        <path
          d={linePath || undefined}
          stroke={lineColor}
          strokeWidth={3}
          fill={lineColor}
          fillOpacity={0.1}
        />
      </g>
    </svg>
  );
};
