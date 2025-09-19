import { motion, useTransform } from "framer-motion";
import { useRotation } from "./TurningWheel";

/**
 * CatButton (effet grande roue)
 * - angle: position sur le cercle (0=droite, 90=haut)
 * - radius: rayon depuis le centre (px)
 * - size: taille du bouton (px)
 * - L'image reste verticale grâce à une contre-rotation: -(R + angle)
 */
export default function CatButton({
  angle = 0,
  radius = 140,
  size = 96,
  imgSrc,
  label = "Chat",
  onClick,
}) {
  const rotation = useRotation(); // R (rotation globale du plateau)
  const counter = useTransform(rotation, (r) => -(r + angle));

  // Wrapper dimensionné (= taille du bouton) et parfaitement centré sur l'orbite
  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px)`,
    transformOrigin: "50% 50%",
  };

  return (
    <div style={wrapperStyle}>
      {/* On contre-rotate l'image pour la garder "debout" */}
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
            width={size}
            height={size}
            draggable={false}
            className="select-none"
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      </motion.div>
    </div>
  );
}
