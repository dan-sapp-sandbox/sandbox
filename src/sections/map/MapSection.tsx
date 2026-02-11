import { ExternalLink } from "lucide-react";
import Card from "@/components/Card";
import { MapProvider } from "react-map-gl/mapbox";
import MapComponent from "./Map";
import { useMapState } from "./useMapState";

const MapSection = () => {
  const mapState = useMapState();
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Card>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Geospatial Software</span>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Features:</span>
          <span className="ml-6">- Mapbox</span>
          <span className="ml-6">- GeoJSON</span>
          <span className="ml-6">- Tiles</span>
          <span className="ml-6">- Layers</span>
          <span className="ml-6">- Icons</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Used in previous projects:</span>
          <span className="ml-6">- Search and Rescue App for the Dept of Defense</span>
          <span className="ml-6">- Military Geospatial Intelligence App for the Dept of Defense</span>
        </div>
        <div className="flex flex-row items-center gap-16">
          <div
            onClick={handleOpenGithubLink}
            className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
          >
            <span>Code</span>
            <ExternalLink className="size-5" />
          </div>
          <div
            // onClick={handleOpenGithubLink}
            className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
          >
            <span>Open app in new tab</span>
            <ExternalLink className="size-5" />
          </div>
        </div>
      </div>
      <MapProvider>
        <MapComponent mapState={mapState} />
      </MapProvider>
    </Card>
  );
};

export default MapSection;
