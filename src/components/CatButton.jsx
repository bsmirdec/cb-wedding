import { motion, useTransform } from "framer-motion";
import { useRotation } from "./TurningWheel";

export default function CatButton({
  angle = 0, // 0=droite, 90=haut
  imgSrc,
  label = "Chat",
  onClick,
}) {
  const rotation = useRotation(); // R (rotation globale)
  const counter = useTransform(rotation, (r) => -(r + angle));

  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "var(--btn-size)",
    height: "var(--btn-size)",
    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--radius))`,
    transformOrigin: "50% 50%",
  };

  return (
    <div style={wrapperStyle}>
      <motion.div style={{ rotate: counter }}>
        <button
          onClick={onClick}
          aria-label={label}
          className="outline-none focus-visible:ring-2 focus-visible:ring-black/50 rounded-full"
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src={imgSrc}
            alt={label}
            draggable={false}
            className="select-none"
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      </motion.div>
    </div>
  );
}
