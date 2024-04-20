import type { GGanttChartConfig } from "../components/GGanttChart.vue";
import type { GanttBarObject } from "../types";
export default function createBarDrag(bar: GanttBarObject, onDrag?: (e: MouseEvent, bar: GanttBarObject) => void, onEndDrag?: (e: MouseEvent, bar: GanttBarObject) => void, config?: GGanttChartConfig): {
    isDragging: import("vue").Ref<boolean>;
    initDrag: (e: MouseEvent) => void;
};
