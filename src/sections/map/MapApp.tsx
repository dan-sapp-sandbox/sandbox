import { DndContext, closestCorners } from "@dnd-kit/core";
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
    widgetState,
  } = mapState;
  return (
    <div className="relative h-full w-full overflow-hidden">
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <CameraContext.Provider value={{ mainViewerRef, overviewViewerRef, pipViewerRef }}>
          <MainMap>
            <PipViewRectangle />
            <Layers layer={layer} />
            <CameraControls />
          </MainMap>
          {showOverviewMap && (
            <OverviewMap overviewState={widgetState.overview}>
              <Layers layer={layer} />
            </OverviewMap>
          )}
          <PipMap pipState={widgetState.pip}>
            <Layers layer={layer} />
          </PipMap>
          <SettingsContainer>
            <LayerSwitcher layer={layer} setLayer={setLayer} />
            <OverviewMapSwitch showOverviewMap={showOverviewMap} setShowOverviewMap={setShowOverviewMap} />
          </SettingsContainer>
        </CameraContext.Provider>
      </DndContext>
    </div>
  );
};

export default MapApp;
