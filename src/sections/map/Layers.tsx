import type { ILayer } from "./types";
import { useMemo } from "react";
import { ImageryLayer } from "resium";
import { OpenStreetMapImageryProvider, IonImageryProvider, UrlTemplateImageryProvider } from "cesium";

const Layers = ({ layer }: { layer: ILayer }) => {
  const osmProvider = useMemo(
    () =>
      new OpenStreetMapImageryProvider({
        url: "https://tile.openstreetmap.org/",
      }),
    [],
  );
  const esriSat = new UrlTemplateImageryProvider({
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  });
  const cartoLight = new UrlTemplateImageryProvider({
    url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  });
  const cartoDark = new UrlTemplateImageryProvider({
    url: "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
  });
  const cartoVoyager = new UrlTemplateImageryProvider({
    url: "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
  });

  const satProvider = useMemo(() => IonImageryProvider.fromAssetId(2), []);
  return (
    <>
      {layer === "esriSat" && <ImageryLayer imageryProvider={esriSat} />}
      {layer === "osm" && <ImageryLayer imageryProvider={osmProvider} />}
      {layer === "satellite" && <ImageryLayer imageryProvider={satProvider} />}
      {layer === "carto-light" && <ImageryLayer imageryProvider={cartoLight} />}
      {layer === "carto-dark" && <ImageryLayer imageryProvider={cartoDark} />}
      {layer === "carto-voyager" && <ImageryLayer imageryProvider={cartoVoyager} />}
    </>
  );
};

export default Layers;
