import Section from "../Section";
import MapApp from "./MapApp";

const MapSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map",
    demoURL: "/map",
    title: "Geospatial Visualization System",
    description:
      "Interactive geospatial visualization built with React and Cesium featuring synchronized map views, draggable widgets, and user-driven geospatial data interaction.",
    features: [
      "Multi-map synchronization: Main map, overview map, and picture-in-picture map share camera state",
      "Draggable map widgets with dynamic layout",
      "Camera bounds visualization between map views",
      "Configurable base layers",
      "Interactive drawing tools for points, lines, and polygons (WIP)",
      "GeoJSON import/export pipeline (WIP)",
      "Map icon placement system (WIP)",
    ],
    usedPreviously: [
      {
        where: "EarthDaily Federal",
        what: "Search and Rescue geospatial visualization system",
      },
      {
        where: "EarthDaily Federal",
        what: "Military geospatial intelligence platform",
      },
    ],
    tech: ["React", "TypeScript", "CesiumJS", "Resium", "GeoJSON"],
  };

  return (
    <Section config={config}>
      <MapApp />
    </Section>
  );
};

export default MapSection;
