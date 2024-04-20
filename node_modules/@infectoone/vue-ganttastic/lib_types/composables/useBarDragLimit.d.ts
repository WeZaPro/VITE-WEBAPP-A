import type { GanttBarObject } from "../types";
export default function useBarDragLimit(): {
    setDragLimitsOfGanttBar: (bar: GanttBarObject) => void;
};
