import { useState, createContext } from "react";
import MainMap from "./MainMap";
import LayerSwitcher from "./LayerSwitcher";
import OverviewMapSwitch from "./OverviewMapSwitch";
import CameraControls from "./CameraControls";
import SettingsContainer from "./SettingsContainer";
import type { ILayer } from "./types";
import OverviewMap from "./OverviewMap";
import type { Cartographic } from "cesium";
import Layers from "./Layers";

export const CameraContext = createContext<{
  center: Cartographic | null;
  setCenter: (c: Cartographic) => void;
  mainViewer: any;
  setMainViewer: (v: any) => void;
}>({
  center: null,
  setCenter: () => {},
  mainViewer: null,
  setMainViewer: () => {},
});

const MapApp = () => {
  const [center, setCenter] = useState<Cartographic | null>(null);
  const [layer, setLayer] = useState<ILayer>("satellite");
  const [showOverviewMap, setShowOverviewMap] = useState(true);
  const [mainViewer, setMainViewer] = useState<any>(null);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <CameraContext.Provider value={{ center, setCenter, mainViewer, setMainViewer }}>
        <MainMap>
          <Layers layer={layer} />
          <CameraControls />
        </MainMap>
        {showOverviewMap && (
          <OverviewMap>
            <Layers layer={layer} />
          </OverviewMap>
        )}
        <SettingsContainer>
          <LayerSwitcher layer={layer} setLayer={setLayer} />
          <OverviewMapSwitch showOverviewMap={showOverviewMap} setShowOverviewMap={setShowOverviewMap} />
        </SettingsContainer>
      </CameraContext.Provider>
    </div>
  );
};

export default MapApp;
