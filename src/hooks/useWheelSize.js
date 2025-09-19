import { useEffect, useState } from "react";

/**
 * Calcule une taille de roue responsive en fonction du viewport.
 * - maxPx : taille max en px
 * - margin : marge intérieure pour éviter le clipping
 */
export default function useWheelSize(maxPx = 560, margin = 24) {
  const [size, setSize] = useState(360);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw, vh) - margin * 2; // carré dans le plus petit côté
      setSize(Math.max(280, Math.min(s, maxPx)));
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [maxPx, margin]);

  return size;
}
