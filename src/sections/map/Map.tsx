import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl/mapbox";
import { useMapState } from "./useMapState";

export const MapComponent = () => {
  const mapState = useMapState();
  return (
    <div className="h-full min-h-175 flex-1 w-full">
      <Map
        {...mapState.viewState}
        onMove={(e) => mapState.setViewState(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapState.mapStyle}
        mapboxAccessToken="pk.eyJ1Ijoia2luZ2lubWVsbG93IiwiYSI6ImNtbGZlMWxhMzAwdzMzam9qd3dra2JkZ2UifQ.Rl-zH4YnA0F1-GRyafTb9w"
        attributionControl={false}
        projection={mapState.projection}
      />
    </div>
  );
};
