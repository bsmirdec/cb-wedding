export default function HangingSignboard({
  text = "Mariage Cassandre & Bogdan",
  className = "",
  woodFill = "#D6A365", // bois (clair)
  woodGrain = "#C38B4B", // veinage
  strokeColor = "#7B4B26", // contour bois (marron)
  ropeColor = "#B88C5A", // cordes
  metalColor = "#8C8C8C", // œillets/vis
}) {
  return (
    <svg
      viewBox="0 0 600 360"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Panneau suspendu"
    >
      {/* fond transparent */}
      <rect width="600" height="360" fill="none" />

      {/* Cordes */}
      <g stroke={ropeColor} strokeWidth="6" strokeLinecap="round" fill="none">
        {/* corde gauche */}
        <path d="M180,20 C185,100 190,150 200,175" />
        {/* corde droite */}
        <path d="M420,20 C415,100 410,150 400,175" />
      </g>

      {/* Anneaux/œillets métalliques au panneau */}
      <g fill={metalColor} stroke="#666" strokeWidth="1">
        {/* gauche */}
        <circle cx="205" cy="185" r="10" />
        <circle cx="205" cy="185" r="5" fill="#bdbdbd" />
        {/* droite */}
        <circle cx="395" cy="185" r="10" />
        <circle cx="395" cy="185" r="5" fill="#bdbdbd" />
      </g>

      {/* Panneau bois */}
      <defs>
        {/* dégradé bois */}
        <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={woodFill} />
          <stop offset="100%" stopColor={woodGrain} />
        </linearGradient>

        {/* légères veines du bois */}
        <pattern
          id="grain"
          width="120"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="60" fill="url(#woodGrad)" />
          <path
            d="M10 30 q30 -20 60 0 t60 0"
            fill="none"
            stroke="#000"
            strokeOpacity="0.05"
            strokeWidth="2"
          />
          <path
            d="M0 50 q40 -18 80 0 t80 0"
            fill="none"
            stroke="#000"
            strokeOpacity="0.04"
            strokeWidth="2"
          />
          <path
            d="M20 12 q25 -10 50 0 t50 0"
            fill="none"
            stroke="#000"
            strokeOpacity="0.03"
            strokeWidth="1.5"
          />
        </pattern>

        {/* ombre portée douce */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="6"
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>
      </defs>

      {/* panneau (levement arrondi) */}
      <g filter="url(#softShadow)">
        <rect
          x="120"
          y="160"
          width="360"
          height="140"
          rx="16"
          fill="url(#grain)"
          stroke={strokeColor}
          strokeWidth="8"
        />

        {/* petites vis décoratives dans les coins */}
        <g fill={metalColor} stroke="#666" strokeWidth="1">
          <circle cx="140" cy="180" r="5" />
          <circle cx="460" cy="180" r="5" />
          <circle cx="140" cy="280" r="5" />
          <circle cx="460" cy="280" r="5" />
        </g>
      </g>

      {/* lanières/anneaux reliant corde -> panneau */}
      <g stroke={strokeColor} strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M200,175 L205,185" />
        <path d="M400,175 L395,185" />
      </g>

      {/* Texte au centre du panneau */}
      <g>
        <text
          x="300"
          y="220"
          textAnchor="middle"
          fontSize="32"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fill="#3a2a1b"
        >
          Mariage
        </text>
        <text
          x="300"
          y="265"
          textAnchor="middle"
          fontSize="32"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fill="#3a2a1b"
        >
          Cassandre &amp; Bogdan
        </text>
      </g>
    </svg>
  );
}
