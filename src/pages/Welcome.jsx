import AnimatedWizzCat from "../components/AnimatedWizzCat";

export default function Welcome({ onEnter }) {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden">
      <button
        className="outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full cursor-pointer"
        onClick={onEnter}
        aria-label="Entrer sur le site"
      >
        <AnimatedWizzCat />
      </button>

      <div className="absolute bottom-6 inset-x-0 text-center text-white/70 text-sm">
        Touchez le chat pour entrer
      </div>
    </div>
  );
}
