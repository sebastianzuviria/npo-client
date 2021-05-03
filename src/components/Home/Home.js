import React from "react";
import GetNews from "../GetNews/GetNews";
import WelcomeText from "../WelcomeText/WelcomeText";

function Home() {
  return (
    <div>
      <WelcomeText />
      <br />
      <GetNews />
    </div>
  );
}

export default Home;
