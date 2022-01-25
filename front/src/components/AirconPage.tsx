import { useState } from "react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pc_top_ads from "../images/pc_top_ads.png";
import mobile_top_ads from "../images/mobile_top_ads.png";
import aircon_repair_service from "../images/aircon_repair_service.png";
import TopHeader from "./TopHeader";
import "../css/Aircon_page.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

function airconServicesList() {
  const imgList = [
    aircon_repair_service,
    aircon_repair_service,
    aircon_repair_service,
  ];
  const textList = ["エアコン修理", "エアコン販売", "クリーニング"];
  let i = 0;

  return imgList.map((img) => {
    return (
      <div className="aircon-service-box">
        <div className="service-img-container">
          <img src={img} />
          <div className="aircon-service-mask">
            <div className="aircon-service-text">{textList[i++]}</div>
          </div>
        </div>
      </div>
    );
  });
}

function AirconPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <TopHeader />
      <div className="aircon-top-ads-div">
        <img src={pc_top_ads} className="pc-top-ads-image" />
        <img src={mobile_top_ads} className="mobile-top-ads-image" />
      </div>
      <div className="aircon-services-container">{airconServicesList()}</div>
    </div>
  );
}

export default AirconPage;
