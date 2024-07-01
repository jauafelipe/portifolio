import "./GriContainer.css";
import React, { ReactNode, RefObject } from "react";

interface GridContainerProps {
    children?: ReactNode; 
    refProp?: RefObject<HTMLDivElement>; 
}
  

export const GridContainer: React.FC<GridContainerProps> = ({ children,refProp }) => {
  return (
    <div className="container-box" ref={refProp} >
      {children}
    </div>
  );
};

