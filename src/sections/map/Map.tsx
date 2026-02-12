import { useState, useMemo } from "react";
import { Map, NavigationControl, Popup, useControl } from "react-map-gl/mapbox";
import { GeoJsonLayer, ArcLayer, COORDINATE_SYSTEM } from "deck.gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DeckGLOverlay(props: any) {
  const overlay = useControl(() => new DeckOverlay(props));
  overlay.setProps(props);
  return null;
}

const MapComponent = ({ projection, mapStyle, viewState }: { projection: any; mapStyle: any; viewState: any }) => {
  console.log("rerender");
  const [selected, setSelected] = useState<any>(null);
  const AIR_PORTS = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";
  const layers = useMemo(() => {
    const geoJsonLayer = new GeoJsonLayer({
      id: "airports",
      data: AIR_PORTS,
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      pickable: true,
      autoHighlight: true,
      onClick: (info) => setSelected(info.object),
      coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    });

    const arcLayer = new ArcLayer({
      id: "arcs",
      data: AIR_PORTS,
      dataTransform: (data: any) => (data?.features || []).filter((f: any) => f.properties?.scalerank < 4),
      getSourcePosition: () => [0, 89],
      getTargetPosition: (f) => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1,
    });

    return [geoJsonLayer, arcLayer];
  }, [AIR_PORTS, projection]);
  // const geoJsonLayer = new GeoJsonLayer({
  //   id: "airports",
  //   data: AIR_PORTS,
  //   // Styles
  //   filled: true,
  //   pointRadiusMinPixels: 2,
  //   pointRadiusScale: 2000,
  //   getPointRadius: (f) => 11 - f.properties.scalerank,
  //   getFillColor: [200, 0, 80, 180],
  //   // Interactive props
  //   pickable: true,
  //   autoHighlight: true,
  //   onClick: (info) => setSelected(info.object),
  //   coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  //   // beforeId: 'waterway-label' // In interleaved mode render the layer under map labels
  // });
  // const arcLayer = new ArcLayer({
  //   id: "arcs",
  //   data: AIR_PORTS,
  //   dataTransform: (data: any) => data.features.filter((feature: any) => feature.properties?.scalerank < 4),
  //   // Styles
  //   getSourcePosition: () => [0, 89],
  //   getTargetPosition: (f) => f.geometry.coordinates,
  //   getSourceColor: [0, 128, 200],
  //   getTargetColor: [200, 0, 80],
  //   getWidth: 1,
  // });
  // const layers = [geoJsonLayer, arcLayer];
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoia2luZ2lubWVsbG93IiwiYSI6ImNtbGZlMWxhMzAwdzMzam9qd3dra2JkZ2UifQ.Rl-zH4YnA0F1-GRyafTb9w";
  return (
    <Map
      key={projection}
      id="mainMap"
      initialViewState={viewState}
      style={{ width: "100%", height: "100%" }}
      mapStyle={mapStyle}
      projection={projection === "globe" ? undefined : projection}
      attributionControl={false}
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {selected && (
        <Popup
          key={selected?.properties?.name}
          anchor="bottom"
          style={{ zIndex: 10, color: "black" }}
          longitude={selected?.geometry?.coordinates?.[0]}
          latitude={selected?.geometry?.coordinates?.[1]}
        >
          {selected?.properties?.name} ({selected?.properties?.abbrev})
        </Popup>
      )}
      <DeckGLOverlay
        key={projection}
        layers={layers}
        // onViewStateChange={(evt) => {
        //   if ("viewState" in evt) {
        //     mapState.setViewState(evt.viewState as MapViewState);
        //   }
        // }}
        // projection={projection}
      />
      <NavigationControl position="bottom-right" />
    </Map>
  );
};

export default MapComponent;
