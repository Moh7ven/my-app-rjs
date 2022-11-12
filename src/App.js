import "./App.css";

import { useState } from "react";

function App() {
  const [nom, setNom] = useState({ nom: "Konate", prenom: "Bakary" });
  const [x, setX] = useState(0);
  const changeNom = () => {
  setNom({nom:"koffi",prenom:"Anon"})
}
  return (
    <>
      <div>{nom.nom}</div>
      <div>{nom.prenom}</div>

      <div>
        <button onClick={changeNom}>clic pour changer de nom</button>
      </div>
      <div>{x}</div>
      <div>
        <button
          onClick={() => {
            setX((prev) => prev + 1);
          }}
        >
          clic
        </button>
      </div>
    </>
  );
}

export default App;
