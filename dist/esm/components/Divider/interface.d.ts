export interface DividerProps {
    /**
     * @description 边框样式
     * @default solid
     */
    type?: 'solid' | 'dashed' | 'dotted';
}
export interface DividerStyle {
    width?: String;
    position?: String;
}
export declare type NativeDividerProps = Omit<React.DividerHTMLAttributes<HTMLElement>, 'type'>;
