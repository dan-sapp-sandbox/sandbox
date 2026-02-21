import Section from "../Section";
import MapApp from "./MapApp";

const MapSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map",
    demoURL: "/map",
    title: "Geospatial Software",
    features: [
      "Layers: Can be toggled on/off",
      "GeoJSON: Can be uploaded/downloaded",
      "Draw: Draw points, lines, and polygons on map",
      "Icons: Place icons on map",
      "Widgets: Compass, PIP Map, Overview Map",
      "Settings: Change basemap/projection",
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
