import type { InjectionKey, Ref } from "vue";
import type { GGanttChartConfig } from "../components/GGanttChart.vue";
import type { GanttBarObject } from "../types";
export declare type ChartRow = {
    label: string;
    bars: GanttBarObject[];
};
export declare type GetChartRows = () => ChartRow[];
export declare type EmitBarEvent = (e: MouseEvent, bar: GanttBarObject, datetime?: string | Date, movedBars?: Map<GanttBarObject, {
    oldStart: string;
    oldEnd: string;
}>) => void;
export declare const CHART_ROWS_KEY: InjectionKey<GetChartRows>;
export declare const CONFIG_KEY: InjectionKey<GGanttChartConfig>;
export declare const EMIT_BAR_EVENT_KEY: InjectionKey<EmitBarEvent>;
export declare const BAR_CONTAINER_KEY: InjectionKey<Ref<HTMLElement | null>>;
