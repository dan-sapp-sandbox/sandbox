import { MapProvider } from "react-map-gl/mapbox";
import MapComponent from "./Map";
import { useMapState } from "./useMapState";
import Toolbar from "./Toolbar";
import Drawers from "./drawers";
import Section from "../Section";

const MapSection = () => {
  const mapState = useMapState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map";
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
    <Section title={title} features={features} usedPreviously={usedPreviously} githubUrl={githubURL}>
      <div className="relative h-full flex-1 w-full flex flex-row">
        <Toolbar mapState={mapState} />
        <Drawers.Layer mapState={mapState} />
        <Drawers.Draw mapState={mapState} />
        <Drawers.Icon mapState={mapState} />
        <Drawers.Widget mapState={mapState} />
        <Drawers.Settings mapState={mapState} />
        <MapProvider>
          <MapComponent
            showLayer1={mapState.showLayer1}
            showLayer2={mapState.showLayer2}
            projection={mapState.projection}
            mapStyle={mapState.mapStyle}
            viewState={mapState.viewState}
          />
        </MapProvider>
      </div>
    </Section>
  );
};

export default MapSection;
