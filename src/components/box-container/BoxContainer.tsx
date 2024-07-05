import "./BoxContainer.css";
import React, { CSSProperties, ReactNode } from "react";
import {motion} from "framer-motion"

interface BoxContainerProps {
    link?:string
    alt?: string
    text?: string;
    styleProps?:CSSProperties
    icon?: ReactNode
    isDownload?:boolean | string
    button?:ReactNode
}

export const BoxContainer: React.FC<BoxContainerProps> = ({
    link,
    text,
    icon,
    isDownload,button
}) => {
    return (
      <motion.div  className="box">
          <div className="box-container">
            <span className="icons">
            {icon}
            </span>
            <div>
              <h2>{text}</h2>
            </div>
            <a  href={link} target="_blank" download={isDownload}>
              {button}
            </a>

        </div>
      </motion.div>
    );
};

