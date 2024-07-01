import "./BoxContainer.css";
import React, { CSSProperties, ReactNode } from "react";

interface BoxContainerProps {
    link?:string
    alt?: string
    text?: string;
    styleProps?:CSSProperties
    icon?: ReactNode
}

export const BoxContainer: React.FC<BoxContainerProps> = ({
    link,
    text,
    icon
}) => {
    return (
      <div className="box">
          <div className="box-container">
            <span className="icons">
            {icon}
            </span>
            <a  href={link} target="_blank">
              click para ser redirecionado
            </a>
            <div>
              <h2 >{text}</h2>
            </div>
        </div>
      </div>
    );
};

