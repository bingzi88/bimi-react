import React, { FC, memo, useMemo } from 'react';
import './Divider.modules.less';
import { DividerProps, DividerStyle, NativeDividerProps } from './interface';

const Divider: FC<DividerProps & NativeDividerProps> = memo((props) => {
  const { type, width, position, children } = props;

  const dividerStyle = useMemo(() => {
    if (!type && type !== 'dashed' && type !== 'dotted') {
      return 'solid';
    }
    return type as any;
  }, [type]);

  return (
    <div className="divider">
      <div className={`b-text ${dividerStyle}`}  >
        {children}
      </div>
    </div>
  );
});

export default Divider;
