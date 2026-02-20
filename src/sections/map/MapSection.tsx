import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/map";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 flex flex-row justify-between text-(--card-foreground) shadow-md transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2 md:gap-12 p-4 md:p-8">
          <div className="flex flex-col md:gap-1">
            <span className="text-lg md:text-2xl font-bold md-2 md:mb-4">Geospatial Software</span>
            <span className="text-xs md:text-sm">This is a map made with Mapbox/Deck.gl.</span>
            <span className="text-xs md:text-sm">Layer 1 contains most major airports.</span>
            <span className="text-xs md:text-sm">Layer 2 connects each airport to the north pole with an arc.</span>
          </div>
          <div className="flex flex-col md:gap-2">
            <span className="text-lg font-bold">Features:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Layers: </span>
              <span className="text-xs md:text-sm">Can be toggled on/off</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">GeoJSON: </span>
              <span className="text-xs md:text-sm">Can be uploaded/downloaded</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Draw: </span>
              <span className="text-xs md:text-sm">Draw points, lines, and polygons on map</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Icons: </span>
              <span className="text-xs md:text-sm">Place icons on map</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Widgets: </span>
              <span className="text-xs md:text-sm">Compass, PIP Map, Overview Map</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Settings: </span>
              <span className="text-xs md:text-sm">Change basemap/projection</span>
            </div>
            {/* <span className="ml-2 md:ml-6">- Tiles</span>
          <span className="ml-2 md:ml-6">- Icons</span> */}
          </div>
          <div className="flex flex-col md:gap-2">
            <span className="text-md md:text-lg font-bold">Used in previous projects:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">EarthDaily Federal: </span>
              <span className="text-xs md:text-sm">Search and Rescue App</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">EarthDaily Federal: </span>
              <span className="text-xs md:text-sm">Military Geospatial Intelligence App</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div onClick={handleOpenGithubLink} className={linkStyles}>
              <span className="text-xs md:text-sm">Code</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span className="text-xs md:text-sm">Open app in new tab</span>
              <ExternalLink className="size-5" />
            </div>
          </div>
        </div>
        <div className="relative h-full md:min-h-175 flex-1 w-full md:min-w-100 flex flex-row">
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
      </CardContent>
    </Card>
  );
};

export default MapSection;
