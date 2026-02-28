import { DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import MainMap from "./MainMap";
import LayerSwitcher from "./LayerSwitcher";
import OverviewMapSwitch from "./OverviewMapSwitch";
import PipMapSwitch from "./PipMapSwitch";
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
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
    showPipMap,
    setShowPipMap,
    widgetState,
    containerRef,
  } = mapState;
  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden cursor-pointer">
      <DndContext modifiers={[restrictToParentElement]} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <CameraContext.Provider value={{ mainViewerRef, overviewViewerRef, pipViewerRef }}>
          <MainMap>
            <PipViewRectangle show={showPipMap} />
            <Layers layer={layer} />
            <CameraControls />
          </MainMap>
          {showOverviewMap && (
            <OverviewMap overviewState={widgetState.overview}>
              <Layers layer={layer} />
            </OverviewMap>
          )}
          {showPipMap && (
            <PipMap pipState={widgetState.pip}>
              <Layers layer={layer} />
            </PipMap>
          )}
          <SettingsContainer>
            <LayerSwitcher layer={layer} setLayer={setLayer} />
            <OverviewMapSwitch showOverviewMap={showOverviewMap} setShowOverviewMap={setShowOverviewMap} />
            <PipMapSwitch showPipMap={showPipMap} setShowPipMap={setShowPipMap} />
          </SettingsContainer>
        </CameraContext.Provider>
      </DndContext>
    </div>
  );
};

export default MapApp;
