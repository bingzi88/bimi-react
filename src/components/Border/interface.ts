export interface BorderProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 边框样式
   * @default primary
   */
  type?: 'solid'|'dashed'|'dotted';
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
  radius?:'no'|'small'|'large'|'round';
  /**
   * @description 阴影样式
   */
  shadow?:'basic'|'light'|'Lighter'|'Dark';
}
export interface BorderStyle {
  //button样式接口
  width?: String;
  height?: String;
  border?: String;
}
export type NativeBorderProps = Omit<React.BorderHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
