import { useState } from "react";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

export default function App() {
  const [stage, setStage] = useState("welcome"); // "welcome" | "home"

  const handleEnter = () => {
    setStage("home");
  };

  return (
    <div className="min-h-screen">
      {stage === "welcome" ? <Welcome onEnter={handleEnter} /> : <Home />}
    </div>
  );
}
