import Section from "../Section";
import MapApp from "./MapApp";

const MapSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map",
    demoURL: "/map",
    title: "Geospatial Software",
    features: [
      "Overview Map: Draggable, main map overlay",
      "Picture-in-Picture Map: Draggable, bounds shown on main map",
      "Base Layer: Selectable in settings",
      "GeoJSON: Can be uploaded/downloaded (WIP)",
      "Draw: Draw points, lines, and polygons on map (WIP)",
      "Icons: Place icons on map (WIP)",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Search and Rescue App" },
      { where: "EarthDaily Federal", what: "Military Geospatial Intelligence App" },
    ],
  };

  return (
    <Section config={config}>
      <MapApp />
    </Section>
  );
};

export default MapSection;
