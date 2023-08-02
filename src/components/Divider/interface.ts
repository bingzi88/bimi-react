export interface DividerProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 边框样式
   * @default solid
   */
  type?: 'solid'|'dashed'|'dotted';
}
export interface DividerStyle {
  //button样式接口
  width?: String;
  position?:String;
}
export type NativeDividerProps = Omit<React.DividerHTMLAttributes<HTMLElement>, 'type'>;
