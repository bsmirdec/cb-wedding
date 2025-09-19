import { useState, useMemo } from "react";
import TurningWheel from "../components/TurningWheel";
import CatButton from "../components/CatButton";
import ModalInfo from "../components/ModalInfo";
import { LINKS } from "../utils/links";
import useWheelSize from "../hooks/useWheelSize";

// Images de chat
import chatPhoto from "../assets/pngs/picture-cat.png";
import chatVoiture from "../assets/pngs/goggles-cat.png";
import chatPlan from "../assets/pngs/map-cat.png";
import chatAvion from "../assets/pngs/plane-cat.png";
import chatCagnotte from "../assets/pngs/chinese-cat.png";

import jungleBackground from "../assets/jungle-background.png";

export default function Home() {
  const [active, setActive] = useState(null);
  const isModalOpen = active !== null;

  // Taille responsive de la roue
  const wheelSize = useWheelSize(560, 24); // max 560px, 24px de marge
  // Boutons un peu plus gros sur écrans larges
  const btnSize = useMemo(
    () => Math.round(Math.max(80, wheelSize * 0.2)),
    [wheelSize]
  );
  // Rayon calculé pour que les boutons ne soient pas coupés : R = (diam/2) - (btn/2) - marge
  const radius = useMemo(
    () => Math.round(wheelSize / 2 - btnSize / 2 - 8),
    [wheelSize, btnSize]
  );

  const cats = [
    { key: "photos", angle: 90, img: chatPhoto, label: "Photos - WedShoots" },
    {
      key: "voiture",
      angle: 162,
      img: chatVoiture,
      label: "Parkings à proximité",
    },
    { key: "plan", angle: 234, img: chatPlan, label: "Lieu de la cérémonie" },
    { key: "avion", angle: 306, img: chatAvion, label: "Voyage de noces" },
    { key: "cagnotte", angle: 18, img: chatCagnotte, label: "Cagnotte" },
  ];

  return (
    <main
      className="min-h-[100svh] w-full text-gray-900 flex items-center justify-center p-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${jungleBackground})` }}
    >
      <div className="w-full flex items-center justify-center">
        <TurningWheel size={wheelSize} paused={isModalOpen}>
          {cats.map((c) => (
            <CatButton
              key={c.key}
              angle={c.angle}
              radius={radius}
              size={btnSize}
              imgSrc={c.img}
              label={c.label}
              onClick={() => setActive(c.key)}
            />
          ))}
        </TurningWheel>
      </div>

      {/* Modals */}
      <ModalInfo
        open={active === "photos"}
        onClose={() => setActive(null)}
        title="Partage des photos - WedShoots"
      >
        <p>
          Pour partager et voir les photos, utilisez l’application WedShoots.
        </p>
        <a
          href={LINKS.wedshoots}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 rounded-full bg-black text-white"
        >
          Ouvrir WedShoots
        </a>
      </ModalInfo>

      <ModalInfo
        open={active === "voiture"}
        onClose={() => setActive(null)}
        title="Se garer près de la cérémonie"
      >
        <p>Voici des parkings à proximité :</p>
        <ul className="mt-2 space-y-2">
          {LINKS.parkings.map((p) => (
            <li key={p.url}>
              <a
                className="text-blue-600 underline"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </ModalInfo>

      <ModalInfo
        open={active === "plan"}
        onClose={() => setActive(null)}
        title="Lieu de la cérémonie"
      >
        <a
          href={LINKS.mapsLieu}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 rounded-full bg-black text-white"
        >
          Ouvrir dans Google Maps
        </a>
      </ModalInfo>

      <ModalInfo
        open={active === "avion"}
        onClose={() => setActive(null)}
        title="Notre voyage de noces"
      >
        <p>Ajoute ici un descriptif, l’itinéraire ou une photo ✈️🌍</p>
      </ModalInfo>

      <ModalInfo
        open={active === "cagnotte"}
        onClose={() => setActive(null)}
        title="Cagnotte"
      >
        <a
          href={LINKS.cagnotte}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 rounded-full bg-emerald-600 text-white"
        >
          Ouvrir la cagnotte
        </a>
      </ModalInfo>
    </main>
  );
}
