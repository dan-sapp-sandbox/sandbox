import { SectionWrapper } from "../SectionWrapper";
import { MapComponent } from "./Map";

const MapSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Geospatial Software</span>
        <span>Mapbox, geojson, tiles, layers, icons</span>
        <span>Explain where you used this in the past</span>
        <span>Explain map features</span>
        <span>Link to code</span>
      </div>
      <MapComponent />
    </SectionWrapper>
  );
};

export default MapSection;
