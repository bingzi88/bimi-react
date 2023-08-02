export interface BorderProps {
    /**
     * @description 边框样式
     * @default primary
     */
    type?: 'solid' | 'dashed' | 'dotted';
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    /**
     * @description 圆角样式
     */
    radius?: 'no' | 'small' | 'large' | 'round';
    /**
     * @description 阴影样式
     */
    shadow?: 'basic' | 'light' | 'Lighter' | 'Dark';
}
export interface BorderStyle {
    width?: String;
    height?: String;
    border?: String;
}
export declare type NativeBorderProps = Omit<React.BorderHTMLAttributes<HTMLElement>, 'type'>;
