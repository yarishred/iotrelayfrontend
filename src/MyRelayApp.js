import React, { useState } from "react";
import axios from "axios";

import "./MyRelayApp.css";

export const MyRelayApp = () => {
  const [state, setstate] = useState("");

  const handleSwitchOnOff = () => {
    const handleRelay = () => {
      axios.get("181.57.207.122:5000").then((res) => {
        setstate(res.data.status);
      });
    };
    handleRelay();
  };

  let displayButton = <a href="http://172.20.1.38:6080/vnc.html" rel="noreferrer" target="_blank" className="btn-host">Acceder</a>;

  return (
    <div className="relay-container">
      <h1>Prototipo Ciberseguridad y Acceso Remoto</h1>
      <div className="host-container">
        <i class={`fas fa-desktop desktop ${state && "desktop-on"}`}></i>
        <br />
        {state === true ? displayButton : null}
        <br />

      </div>
      <button className={`btn ${state && "btnOff"}`} onClick={handleSwitchOnOff}>
        {state === true ? "Apagar Host" : "Activar Host"}
      </button>
    </div>
  );
};
