import { ExternalLink } from "lucide-react";
import Card from "@/components/Card";
import { MapProvider } from "react-map-gl/mapbox";
import MapComponent from "./Map";
import { useMapState } from "./useMapState";
import Toolbar from "./Toolbar";
import LayerDrawer from "./drawers/LayerDrawer";
import DrawDrawer from "./drawers/draw/DrawDrawer";
import SettingsDrawer from "./drawers/SettingsDrawer";
import IconDrawer from "./drawers/IconDrawer";
import WidgetDrawer from "./drawers/WidgetDrawer";

const MapSection = () => {
  const mapState = useMapState();
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Card>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold mb-4">Geospatial Software</span>
          <span className="">This is a map made with Mapbox/Deck.gl.</span>
          <span>Layer 1 contains most major airports.</span>
          <span>Layer 2 connects each airport to the north pole with an arc.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Features:</span>
          <div className="ml-6">
            <span className="font-bold">Layers: </span>
            <span className="">Can be toggled on/off</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">GeoJSON: </span>
            <span className="">Can be uploaded/downloaded</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Draw: </span>
            <span className="">Draw points, lines, and polygons on map</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Icons: </span>
            <span className="">Place icons on map</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Widgets: </span>
            <span className="">Compass, PIP Map, Overview Map</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Settings: </span>
            <span className="">Change basemap/projection</span>
          </div>
          {/* <span className="ml-6">- Tiles</span>
          <span className="ml-6">- Icons</span> */}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Used in previous projects:</span>
          <div className="ml-6">
            <span className="font-bold">Dept of Defense: </span>
            <span className="">Search and Rescue App</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Dept of Defense: </span>
            <span className="">Military Geospatial Intelligence App</span>
          </div>
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
      <div className="relative h-full min-h-175 flex-1 w-full min-w-100 flex flex-row">
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
    </Card>
  );
};

export default MapSection;
