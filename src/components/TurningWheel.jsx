import { useMotionValue, useAnimationFrame, motion } from "framer-motion";
import { createContext, useContext } from "react";

import { ReactComponent as Logo } from "../assets/svgs/logo.svg";

const RotationContext = createContext(null);
export const useRotation = () => useContext(RotationContext);

export default function TurningWheel({
  size = 360,
  duration = 40,
  paused = false,
  children,
}) {
  const rotation = useMotionValue(0);

  useAnimationFrame((t) => {
    if (paused) return;
    const deg = (t / 1000 / duration) * 360;
    rotation.set(deg % 360);
  });

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Centre fixe svg */}
      <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
        <Logo className="w-40 h-auto text-emerald-600 stroke-amber-100" />
      </div>

      {/* Plateau qui tourne */}
      <RotationContext.Provider value={rotation}>
        <motion.div
          className="absolute inset-0"
          style={{
            rotate: rotation,
            transformOrigin: "50% 50%",
            willChange: "transform",
          }}
        >
          {children}
        </motion.div>
      </RotationContext.Provider>
    </div>
  );
}
