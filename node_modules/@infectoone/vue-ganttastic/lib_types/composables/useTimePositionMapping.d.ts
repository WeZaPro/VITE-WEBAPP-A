import type { GGanttChartConfig } from "../components/GGanttChart.vue";
export default function useTimePositionMapping(config?: GGanttChartConfig): {
    mapTimeToPosition: (time: string) => number;
    mapPositionToTime: (xPos: number) => string | Date;
};
