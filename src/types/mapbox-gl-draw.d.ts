declare module "@mapbox/mapbox-gl-draw" {
  import type { IControl } from "mapbox-gl";

  interface DrawOptions {
    displayControlsDefault?: boolean;
    controls?: {
      point?: boolean;
      line_string?: boolean;
      polygon?: boolean;
      trash?: boolean;
      combine_features?: boolean;
      uncombine_features?: boolean;
    };
    styles?: any[];
  }

  export default class MapboxDraw implements IControl {
    constructor(options?: DrawOptions);

    onAdd(map: mapboxgl.Map): HTMLElement;
    onRemove(): void;

    getAll(): GeoJSON.FeatureCollection;
    get(id: string): GeoJSON.Feature | undefined;
    add(feature: GeoJSON.Feature | GeoJSON.FeatureCollection): string[];
    delete(ids: string | string[]): void;
    deleteAll(): void;
    changeMode(mode: string, options?: any): void;
  }
}
