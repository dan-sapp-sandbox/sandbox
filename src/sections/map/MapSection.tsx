import Section from "../Section";
import MapApp from "./MapApp";

const MapSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map";
  const demoURL = "/map";
  const title = "Geospatial Software";
  const features = [
    "Layers: Can be toggled on/off",
    "GeoJSON: Can be uploaded/downloaded",
    "Draw: Draw points, lines, and polygons on map",
    "Icons: Place icons on map",
    "Widgets: Compass, PIP Map, Overview Map",
    "Settings: Change basemap/projection",
  ];
  const usedPreviously = [
    { where: "EarthDaily Federal", what: "Search and Rescue App" },
    { where: "EarthDaily Federal", what: "Military Geospatial Intelligence App" },
  ];

  return (
    <Section title={title} features={features} usedPreviously={usedPreviously} githubURL={githubURL} demoURL={demoURL}>
      <MapApp />
    </Section>
  );
};

export default MapSection;
