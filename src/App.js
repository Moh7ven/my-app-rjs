import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dataRecu, setRecu] = useState({});
  const [nom, setNom] = useState("Mohamed");

  useEffect(() => {
    setNom("sedigui");
  }, []);
  const getData = useEffect(() => {
    const options = {
      method: "GET",
      url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
      params: { have: "USD", want: "EUR", amount: "5000" },
      headers: {
        "X-RapidAPI-Key": "4cbcfa3368msh8efec9911878d3bp1e7a20jsn6f6eac938593",
        "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRecu(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>{nom}</div>
      <h3>
        <li>Ancienne devise: {dataRecu.old_currency}</li>
      </h3>
      <h3>
        <li>Ancien Montant: {dataRecu.old_amount}</li>
      </h3>
      <h3>
        <li>Nouvelle devise : {dataRecu.new_currency}</li>
      </h3>
      <h3>
        <li>Nouveau montant : {dataRecu.new_amount}</li>
      </h3>
    </div>
  );
}

export default App;
