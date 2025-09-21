import {
  useMotionValue,
  useAnimationFrame,
  motion,
  motionValue,
} from "framer-motion";
import { createContext, useContext } from "react";
import Logo from "../assets/svgs/logo.svg";

const RotationContext = createContext(null);
export function useRotation() {
  const ctx = useContext(RotationContext);
  if (!ctx) {
    if (import.meta?.env?.DEV) {
      console.warn("useRotation() utilisé en dehors de <TurningWheel>.");
    }
    return motionValue(0);
  }
  return ctx;
}

export default function TurningWheel({
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
      className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{ width: "var(--wheel-size)", height: "var(--wheel-size)" }}
    >
      {/* Centre fixe : logo image (pas de changement de couleur) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={Logo} alt="Logo" className="w-40 h-auto select-none" />
      </div>

      {/* Plateau des boutons — tourne autour du centre */}
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
