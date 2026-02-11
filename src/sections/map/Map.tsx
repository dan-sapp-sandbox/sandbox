import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl/mapbox";
import Toolbar from "./Toolbar";
import LayerDrawer from "./drawers/LayerDrawer";
import DrawDrawer from "./drawers/DrawDrawer";
import SettingsDrawer from "./drawers/SettingsDrawer";
import IconDrawer from "./drawers/IconDrawer";
import WidgetDrawer from "./drawers/WidgetDrawer";
import type { IMapState } from "./useMapState";
// import DrawLayer from "./DrawLayer";

const MapComponent = ({ mapState }: { mapState: IMapState }) => {
  return (
    <div className="relative h-full min-h-175 flex-1 w-full flex flex-row">
      <Toolbar mapState={mapState} />
      <LayerDrawer mapState={mapState} />
      <DrawDrawer mapState={mapState} />
      <IconDrawer mapState={mapState} />
      <WidgetDrawer mapState={mapState} />
      <SettingsDrawer mapState={mapState} />
      <Map
        key={mapState.projection}
        id="mainMap"
        {...mapState.viewState}
        onMove={(e) => mapState.setViewState(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapState.mapStyle}
        mapboxAccessToken="pk.eyJ1Ijoia2luZ2lubWVsbG93IiwiYSI6ImNtbGZlMWxhMzAwdzMzam9qd3dra2JkZ2UifQ.Rl-zH4YnA0F1-GRyafTb9w"
        attributionControl={false}
        projection={mapState.projection}
      />
      {/* <DrawLayer key={`drawlayer-${mapState.projection} `} mapState={mapState} enabled={mapState.drawEnabled} /> */}
    </div>
  );
};

export default MapComponent;
