import type { GanttBarObject } from "../types";
export default function useBarDragManagement(): {
    initDragOfBar: (bar: GanttBarObject, e: MouseEvent) => void;
    initDragOfBundle: (mainBar: GanttBarObject, e: MouseEvent) => void;
};
