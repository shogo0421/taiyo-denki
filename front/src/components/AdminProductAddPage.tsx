import { useState } from "react";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../css/AdminProductAddPage.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);
function AdminProductAddPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <AppBar elevation={0} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className="appBar-title">
            (有)タイヨーでんき / 在庫管理画面
          </Typography>
        </Toolbar>
      </AppBar>
      <form className="product-add-form">
        <TextField id="standard-basic" label="title" variant="standard" />
        <br />
        <TextField id="standard-basic" label="model" variant="standard" />
        <br />
        <TextField id="standard-basic" label="maker" variant="standard" />
        <br />
        <TextField id="standard-basic" label="model_year" variant="standard" />
        <br />
        <TextField id="standard-basic" label="price" variant="standard" />
        <br />
        <TextField id="standard-basic" label="stock" variant="standard" />
        <br />
        <TextField id="standard-basic" label="type" variant="standard" />
        <br />
        <TextField
          InputProps={{ style: { marginTop: "10px" } }}
          id="standard-basic"
          variant="outlined"
          placeholder="商品説明"
        />
      </form>
    </>
  );
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

export default AdminProductAddPage;
