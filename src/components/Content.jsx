import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Leagues from "./Leagues";
import Standings from "./Standings";

const Content = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-leagues" onClick={() => setActive(true)}>
          <h2 style={{ color: active ? "#FEC260" : null }}>Leagues</h2>
        </div>
        <div className="tab-standings" onClick={() => setActive(false)}>
          <h2 style={{ color: !active ? "#FEC260" : null }}>Standings</h2>
        </div>
      </div>
      {active ? <Leagues /> : <Standings />}
    </div>
  );
};

export default Content;
