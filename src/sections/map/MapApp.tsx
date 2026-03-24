import { DndContext, TouchSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { Entity, LabelGraphics } from "resium";
import { Cartesian2, Cartesian3, Color, VerticalOrigin, HeightReference } from "cesium";
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

// TODO: draw mode
// TODO: icons
// TODO: resize widgets
// TODO: compass
// TODO: mobile dnd
// TODO: right click context menu

const MapApp = () => {
  const mapState = useMapState();
  const {
    mainViewerRef,
    overviewViewerRef,
    pipViewerRef,
    pipViewer2Ref,
    handleDragStart,
    handleDragEnd,
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
    showPipMap,
    setShowPipMap,
    showPipMap2,
    setShowPipMap2,
    widgetState,
    containerRef,
    takeScreenshot,
  } = mapState;
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
  );
  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden cursor-pointer">
      <DndContext
        sensors={sensors}
        modifiers={[restrictToParentElement]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <CameraContext.Provider value={{ mainViewerRef, overviewViewerRef, pipViewerRef, pipViewer2Ref }}>
          <MainMap>
            <PipViewRectangle show={showPipMap} isPip2={false} />
            <PipViewRectangle show={showPipMap2} isPip2={true} />
            <Layers layer={layer} />
            <CameraControls takeScreenshot={takeScreenshot} />
            <Entity position={Cartesian3.fromDegrees(56.6, 25.7)}>
              <LabelGraphics
                text="Strait of Hormuz"
                font="24px sans-serif"
                fillColor={Color.RED}
                outlineColor={Color.WHITE}
                outlineWidth={4}
                verticalOrigin={VerticalOrigin.BOTTOM}
                heightReference={HeightReference.CLAMP_TO_GROUND}
                pixelOffset={new Cartesian2(0, 20)}
                disableDepthTestDistance={Number.POSITIVE_INFINITY}
              />
            </Entity>
            <Entity position={Cartesian3.fromDegrees(50.35, 28.9)}>
              <LabelGraphics
                text="Kharg Island"
                font="24px sans-serif"
                fillColor={Color.DARKMAGENTA}
                outlineColor={Color.WHITE}
                outlineWidth={1}
                verticalOrigin={VerticalOrigin.BOTTOM}
                heightReference={HeightReference.CLAMP_TO_GROUND}
                pixelOffset={new Cartesian2(0, 20)}
                disableDepthTestDistance={Number.POSITIVE_INFINITY}
              />
            </Entity>
          </MainMap>
          {showOverviewMap && (
            <OverviewMap overviewState={widgetState.overview}>
              <Layers layer={layer} />
            </OverviewMap>
          )}
          {showPipMap && (
            <PipMap pipState={widgetState.pip} isPip2={false}>
              <Layers layer={layer} />
            </PipMap>
          )}
          {showPipMap2 && (
            <PipMap pipState={widgetState.pip2} isPip2={true}>
              <Layers layer={layer} />
            </PipMap>
          )}
          <SettingsContainer>
            <LayerSwitcher layer={layer} setLayer={setLayer} />
            <OverviewMapSwitch showOverviewMap={showOverviewMap} setShowOverviewMap={setShowOverviewMap} />
            <PipMapSwitch showPipMap={showPipMap} setShowPipMap={setShowPipMap} isPip2={false} />
            <PipMapSwitch showPipMap={showPipMap2} setShowPipMap={setShowPipMap2} isPip2={true} />
          </SettingsContainer>
        </CameraContext.Provider>
      </DndContext>
    </div>
  );
};

export default MapApp;
