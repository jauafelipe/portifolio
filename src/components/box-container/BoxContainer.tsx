import "./BoxContainer.css";
import React, { CSSProperties } from "react";

interface BoxContainerProps {
    imageURL?: string;
    alt?: string
    text?: string;
    styleProps?:CSSProperties
}

export const BoxContainer: React.FC<BoxContainerProps> = ({
    imageURL,
    text,
    styleProps,
    alt
}) => {
    return (
      <div className="box">
          <div className="box-container">
            <img  src={imageURL} alt={alt} style={styleProps} />
            <div>
              <h2 >{text}</h2>
            </div>
        </div>
      </div>
    );
};

