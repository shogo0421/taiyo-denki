import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../css/TopHeader.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMailLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import lineIcon from "../images/line_icon.svg";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

function pageNavigation(displayCss: object) {
  return (
    <div className="page-navigation" style={displayCss}>
      <ul>
        <li>
          <a className="active" href="#home">
            TOP
          </a>
        </li>
        <li>
          <a href="#news">作業完了までの流れ</a>
        </li>
        <li>
          <a href="#contact">エアコン下取り</a>
        </li>
        <li>
          <a href="#about">よくある質問</a>
        </li>
        <li>
          <a href="#about">相談窓口</a>
        </li>
      </ul>
    </div>
  );
}
function mobileContactBar() {
  return (
    <div className="mobile-contact-bar">
      <IconContext.Provider value={{ color: "#ccc", size: "40px" }}>
        <div className="mail-box">
          <RiMailLine color="#" />
          <Typography>メール</Typography>
        </div>
        <div className="line-box">
          <img src={lineIcon} />
          <Typography>LINE</Typography>
        </div>
        <div className="tel-box">
          <RiPhoneLine color="white" />
          <Typography>電話</Typography>
        </div>
      </IconContext.Provider>
    </div>
  );
}

function TopHeader() {
  const [menuIconFlag, setMenuIconFlag] = React.useState(true);
  const [displayCss, setDisplayCss] = React.useState({});

  return (
    <>
      <AppBar elevation={0} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className="appBar-title">
            (有)タイヨーでんき
          </Typography>
          <Button color="inherit">Login</Button>
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => {
              setMenuIconFlag(!menuIconFlag);
              console.log(menuIconFlag);
              if (menuIconFlag) {
                setDisplayCss({ display: "contents" });
              } else {
                setDisplayCss({ display: "none" });
              }
            }}
          />
        </Toolbar>
      </AppBar>
      {pageNavigation(displayCss)}
      {mobileContactBar()}
    </>
  );
}

export default TopHeader;
