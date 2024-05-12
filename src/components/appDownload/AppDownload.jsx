import React from "react";
import "./appDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Pour une meilleure expérience, téléchargez
        <br />
        Dreux-Food
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" onClick={()=>{alert("APP")}}/>
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
