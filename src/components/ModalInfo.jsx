import { useEffect } from "react";

/**
 * ModalInfo (statique)
 * - Pas d'animation
 * - Centrée
 * - Overlay cliquable
 * - Fermeture par Échap
 */
export default function ModalInfo({ open, onClose, title, children }) {
  if (!open) return null;

  // Fermer avec Échap (sans animation)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay sans animation */}
      <div className="fixed inset-0 z-40 bg-black/60" onClick={onClose} />

      {/* Dialog centré */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="w-full max-w-md rounded-2xl bg-white text-gray-900 shadow-xl p-5 animate-none"
          // verrouille le layout pour éviter tout “pumping”
          style={{
            willChange: "auto",
            transform: "none",
            transition: "none",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 -m-2 rounded-full focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 text-sm leading-relaxed">
            {/* Assure que le contenu interne ne casse pas la largeur */}
            <div className="[&_img]:max-w-full [&_img]:h-auto [&_a]:underline">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
