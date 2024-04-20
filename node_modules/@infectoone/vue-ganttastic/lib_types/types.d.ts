import type { CSSProperties } from "vue";
export declare type GanttBarObject = {
    [key: string]: any;
    ganttBarConfig: {
        id: string;
        label?: string;
        html?: string;
        hasHandles?: boolean;
        immobile?: boolean;
        bundle?: string;
        pushOnOverlap?: boolean;
        dragLimitLeft?: number;
        dragLimitRight?: number;
        style?: CSSProperties;
        class?: string;
    };
};
