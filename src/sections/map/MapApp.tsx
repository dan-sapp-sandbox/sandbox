import { useState, createContext, useEffect, useRef, type RefObject } from "react";
import MainMap from "./MainMap";
import LayerSwitcher from "./LayerSwitcher";
import OverviewMapSwitch from "./OverviewMapSwitch";
import CameraControls from "./CameraControls";
import SettingsContainer from "./SettingsContainer";
import type { ILayer } from "./types";
import OverviewMap from "./OverviewMap";
import Layers from "./Layers";
import { Cartesian3, Cartographic, Viewer } from "cesium";

type CameraContextType = {
  mainViewerRef: RefObject<Viewer | null>;
  overviewViewerRef: RefObject<Viewer | null>;
};

export const CameraContext = createContext<CameraContextType>({
  mainViewerRef: { current: null },
  overviewViewerRef: { current: null },
});

const MapApp = () => {
  const mainViewerRef = useRef<Viewer | null>(null);
  const overviewViewerRef = useRef<Viewer | null>(null);
  const [layer, setLayer] = useState<ILayer>("satellite");
  const [showOverviewMap, setShowOverviewMap] = useState(true);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const tryAttach = () => {
      const main = mainViewerRef.current;
      const overview = overviewViewerRef.current;

      if (!main || !overview) {
        requestAnimationFrame(tryAttach);
        return;
      }

      const sync = () => {
        const main = mainViewerRef.current;
        const overview = overviewViewerRef.current;
        if (!main || !overview) return;

        const mainCam = main.camera;

        const carto = Cartographic.fromCartesian(mainCam.position);

        const boostedHeight = carto.height * 2.5;

        const boostedPosition = Cartesian3.fromRadians(carto.longitude, carto.latitude, boostedHeight);

        overview.camera.setView({
          destination: boostedPosition,
          orientation: {
            heading: 0,
            pitch: -Math.PI / 2,
            roll: 0,
          },
        });
      };

      main.camera.changed.addEventListener(sync);
      sync();

      cleanup = () => {
        main.camera.changed.removeEventListener(sync);
      };
    };

    tryAttach();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <CameraContext.Provider value={{ mainViewerRef, overviewViewerRef }}>
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
