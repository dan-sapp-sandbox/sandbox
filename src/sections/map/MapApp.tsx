import MainMap from "./MainMap";
import LayerSwitcher from "./LayerSwitcher";
import OverviewMapSwitch from "./OverviewMapSwitch";
import CameraControls from "./CameraControls";
import SettingsContainer from "./SettingsContainer";
import OverviewMap from "./OverviewMap";
import PipViewRectangle from "./PipViewRectangle";
import PipMap from "./PipMap";
import Layers from "./Layers";
import useMapState from "./useMapState";
import { CameraContext } from "./types";

const MapApp = () => {
  const mapState = useMapState();
  const {
    mainViewerRef,
    overviewViewerRef,
    pipViewerRef,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
  } = mapState;
  return (
    <div className="relative h-full min-h-100 w-full overflow-hidden">
      <CameraContext.Provider value={{ mainViewerRef, overviewViewerRef, pipViewerRef }}>
        <MainMap>
          <PipViewRectangle />
          <Layers layer={layer} />
          <CameraControls />
        </MainMap>
        {showOverviewMap && (
          <OverviewMap>
            <Layers layer={layer} />
          </OverviewMap>
        )}
        <PipMap>
          <Layers layer={layer} />
        </PipMap>
        <SettingsContainer>
          <LayerSwitcher layer={layer} setLayer={setLayer} />
          <OverviewMapSwitch showOverviewMap={showOverviewMap} setShowOverviewMap={setShowOverviewMap} />
        </SettingsContainer>
      </CameraContext.Provider>
    </div>
  );
};

export default MapApp;
