import { MapProvider } from "react-map-gl/mapbox";
import MapComponent from "./Map";
import { useMapState } from "./useMapState";
import Toolbar from "./Toolbar";
import LayerDrawer from "./drawers/LayerDrawer";
import DrawDrawer from "./drawers/draw/DrawDrawer";
import SettingsDrawer from "./drawers/SettingsDrawer";
import IconDrawer from "./drawers/IconDrawer";
import WidgetDrawer from "./drawers/WidgetDrawer";
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

  const Demo = () => (
    <div className="relative h-full flex-1 w-full flex flex-row">
      <Toolbar mapState={mapState} />
      <LayerDrawer mapState={mapState} />
      <DrawDrawer mapState={mapState} />
      <IconDrawer mapState={mapState} />
      <WidgetDrawer mapState={mapState} />
      <SettingsDrawer mapState={mapState} />
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
  );

  return (
    <Section title={title} Demo={Demo} features={features} usedPreviously={usedPreviously} githubUrl={githubURL} />
  );
};

export default MapSection;
