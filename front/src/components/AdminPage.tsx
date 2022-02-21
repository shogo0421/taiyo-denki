import { useState } from "react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../css/AdminPage.css";
import AirconProductList from "./AirconProductList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);
function AdminPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return <div></div>;
}

//    {
//     "time_stamp": "1644733248986",
//     "title": "三菱 MSZ-ZXV4021S",
//     "model": "MSZ-ZXV4021S",
//     "maker": "三菱",
//     "model_year": "2019",
//     "price": 35800,
//     "stock": 10,
//     "thumbnail": ["/assets/aircon_daikin.jpeg"],
//     "img": ["/assets/aircon_daikin.jpeg"],
//     "type": "8-10",
//     "description": "冷暖房しながら、 外気をたっぷり取り込み「換気」。吸湿・放湿力に優れた「高分子収着材」が、すばやい「加湿」を可能にし、業界初★1の「ドライ給気制御」で寒くなりにくい「除湿」も実現します。"
//   },

export default AdminPage;
