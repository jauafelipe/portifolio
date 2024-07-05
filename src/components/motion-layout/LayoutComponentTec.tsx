import "./Layout.css"
import { motion } from "framer-motion";
import { useState } from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaNodeJs, FaJava, FaReact } from "react-icons/fa";
import { SiDotnet, SiFlutter } from "react-icons/si";

export default function LayoutComponent() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50}}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
      >
                    <SiDotnet size={50} color="purple" className="icon" />
                        <FaNodeJs size={50} color="green"  className="icon" />
                        <DiMsqlServer size={50} color="red"  className="icon" />
                        <FaJava size={50} color="red"  className="icon" />
                        <FaReact size={50} color="00b4d8"   className="icon"/>
                        <SiFlutter size={50} color="219ebc"   className="icon"/>
        <motion.div layout className="child" />
      </motion.div>
    );
  }