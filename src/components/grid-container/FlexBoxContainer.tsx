import "./FlexBoxContainer.css";
import React, { ReactNode, RefObject } from "react";
interface GridContainerProps {
    children?: ReactNode; 
    refProp?: RefObject<HTMLDivElement>;
    style?: React.CSSProperties
}
  

export const FlexBoxContainer: React.FC<GridContainerProps> = ({ children,refProp,style }) => {
  return (
    <div className="container-box" ref={refProp} style={style} >
      {children}
    </div>
  );
};

