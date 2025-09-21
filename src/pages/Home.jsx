import { useState } from "react";
import TurningWheel from "../components/TurningWheel";
import CatButton from "../components/CatButton";
import ModalInfo from "../components/ModalInfo";
import HangingSignboard from "../components/HangingSignboard";
import { LINKS } from "../utils/links";
import jungleBackground from "../assets/jungle-background.png";
import costaRica from "../assets/kite-costa.jpg";

// tes images
import chatPhoto from "../assets/pngs/picture-cat.png";
import chatPlanning from "../assets/pngs/time-cat.png";
import chatPlan from "../assets/pngs/map-cat.png";
import chatAvion from "../assets/pngs/plane-cat.png";
import chatCagnotte from "../assets/pngs/chinese-cat.png";
import transports from "../assets/pngs/transports.png";

export default function Home() {
  const [active, setActive] = useState(null);
  const isModalOpen = active !== null;

  const cats = [
    { key: "photos", angle: 90, img: chatPhoto, label: "Photos - WedShoots" },
    {
      key: "voiture",
      angle: 162,
      img: chatPlanning,
      label: "Parkings à proximité",
    },
    { key: "plan", angle: 234, img: chatPlan, label: "Lieu de la cérémonie" },
    { key: "avion", angle: 306, img: chatAvion, label: "Voyage de noces" },
    { key: "cagnotte", angle: 18, img: chatCagnotte, label: "Cagnotte" },
  ];

  return (
    <main
      className="relative w-[100svw] h-[100svh] overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${jungleBackground})` }}
    >
      <div className="absolute top-15" style={{ width: "min(80svw, 520px)" }}>
        <HangingSignboard />
      </div>
      {/* Centre exact de l’écran */}
      <TurningWheel paused={isModalOpen}>
        {cats.map((c) => (
          <CatButton
            key={c.key}
            angle={c.angle}
            imgSrc={c.img}
            label={c.label}
            onClick={() => setActive(c.key)}
          />
        ))}
      </TurningWheel>

      {/* Modals (inchangé) */}
      <ModalInfo
        open={active === "photos"}
        onClose={() => setActive(null)}
        title="Partage des photos"
      >
        <p>
          Pour tous les photographes, expérimentés - ou non, on vous propose de
          rassembler vos photos ici.
        </p>
        <br />
        <p className="text-center">
          Le code pour rejoindre l'album est :{" "}
          <span className="text-3xl">FR908db508</span>
        </p>
        <div className="mt-4 text-center">
          <a
            href={LINKS.wedshoots}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-full bg-green-800 text-white"
          >
            Ouvrir WedShoots
          </a>
        </div>
      </ModalInfo>

      <ModalInfo
        open={active === "voiture"}
        onClose={() => setActive(null)}
        title="Planning du weekend"
      >
        <p className="">Voici la suite des événements :</p>
        <br />
        <ul>
          <li>17:00 - Départ en bus de Villiers</li>
          <li>18:00 - Cocktail</li>
          <li>20:30 - Repas</li>
          <li>04:00 - Dodo</li>
        </ul>
        <br />
        <p>
          Pour les plus motivés, nous nous retrouverons demain matin à partir de
          11:30 à la Maison Pour Tous de Villiers pour manger un bout et boire
          un coup.
        </p>
      </ModalInfo>

      <ModalInfo
        open={active === "plan"}
        onClose={() => setActive(null)}
        title="Lieu de la réception"
      >
        <p>
          Nous avons affrété un bus au départ de Villiers. Vous pouvez aussi
          venir en voiture et vous garer au parking de la gare de Lyon, ou vous
          garer ailleurs et venir en transports.
        </p>
        <img src={transports} className="m-2 border-2 border-amber-950" />
        <p>Le retour se fera par vos propres moyens : uber ou métro</p>
        <div className="mt-4 text-center">
          <a
            href={LINKS.mapsLieu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 rounded-full bg-amber-950 text-white"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      </ModalInfo>

      <ModalInfo
        open={active === "avion"}
        onClose={() => setActive(null)}
        title="Notre voyage de noces"
      >
        <p>
          On a décidé de partir au <span>Costa-Rica</span> ! Cass veut du beau
          temps et des paysages paradisiaque. Bog veut en profiter pour
          apprendre le kitesurf. On a soif d'aventure, de partir découvrir la
          jungle... mais en même temps de farnienter sur la plage avec un
          cocktail.
        </p>
        <img className="mt-4" src={costaRica} />
      </ModalInfo>

      <ModalInfo
        open={active === "cagnotte"}
        onClose={() => setActive(null)}
        title="Cagnotte du mariage"
      >
        <p>
          Comme vous l'aurez compris, cette cagnotte ne sera pas utilisée pour
          nos anniversaires, mais pour notre voyage de noces.
        </p>
        <div className="mt-4 text-center">
          <a
            href={LINKS.cagnotte}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-full bg-emerald-600 text-white"
          >
            Ouvrir la cagnotte
          </a>
        </div>
      </ModalInfo>

      <div className="absolute bottom-6 inset-x-0 text-center text-white/70 text-sm">
        Cliquez sur les chats
      </div>
    </main>
  );
}
