export interface SwitchProps {
      // 要想文档中有 api 必须这么写注释.

      /**
       * @description   开关的初识状态
       * @default false/true
       */
      isOn?: boolean;

      /**
       * @description 单击开关时的回调函数
       * @default  无
       */
      onClick?: (isOn?: boolean) => void;

 
 

     /**
      *  @description 开关按钮显示的文字
      *  @default  
      */
    displayText?: string;
     
}
export interface  SwitchStyle {
     
}
export type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>; //原生input接口