import { motion, useReducedMotion } from "framer-motion";
import defaultCat from "../assets/pngs/caipi-cat.png";

/**
 * AnimatedWizzCat
 * - Image de chat animée façon "wizz"
 * - Respecte prefers-reduced-motion
 * - Props :
 *    - src: chemin de l'image (par défaut un PNG local)
 *    - size: taille en pixels (number) ou classe Tailwind via className
 *    - className: classes supplémentaires
 *    - ...props: pass-through vers le <motion.img />
 */
export default function AnimatedWizzCat({
  src = defaultCat,
  size = 176, // ~ w-44
  className = "",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  const styleFromSize =
    typeof size === "number"
      ? { width: `${size}px`, height: `${size}px` }
      : undefined;

  const wizzAnim = prefersReducedMotion
    ? {} // pas d'anim si l'utilisateur préfère moins d'animations
    : {
        scale: [1, 1.03, 0.98, 1.02, 1],
        rotate: [0, -2, 2, -1, 0],
        x: [0, -3, 3, -2, 0],
        transition: {
          duration: 1.1,
          repeat: Infinity,
          repeatDelay: 0.6,
          ease: "easeInOut",
        },
      };

  return (
    <motion.img
      src={src}
      alt="Chat wizz"
      draggable={false}
      className={`select-none ${className}`}
      style={styleFromSize}
      animate={wizzAnim}
      whileTap={{ scale: 0.96 }}
      {...props}
    />
  );
}
