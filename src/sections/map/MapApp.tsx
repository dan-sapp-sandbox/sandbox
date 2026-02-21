import { MapProvider } from "react-map-gl/mapbox";
import MapComponent from "./Map";
import { useMapState } from "./useMapState";
import Toolbar from "./Toolbar";
import Drawers from "./drawers";

const MapApp = () => {
  const mapState = useMapState();

  return (
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
  );
};

export default MapApp;
