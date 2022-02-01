import { Divider } from "@material-ui/core";
import React from "react";
import "../css/TatamiButtons.css";

function createTatamiButton(
  label: string,
  setSelectedTatamiButton: Function,
  setSelectedButtonTitle: Function
) {
  return (
    <button
      className="tatami-num-button"
      onClick={() => {
        setSelectedTatamiButton(label.replace("~", "-"));
        setSelectedButtonTitle(label);
      }}
    >
      {label}畳
    </button>
  );
}

function TatamiButtons(props: any) {
  const [selectedButtonTitle, setSelectedButtonTitle] = React.useState("6~8");

  return (
    <>
      <div className="tatami-num-button-container">
        <div className="button-row">
          {createTatamiButton("6~8", props.onClick, setSelectedButtonTitle)}
          {createTatamiButton("8~10", props.onClick, setSelectedButtonTitle)}
        </div>
        <div className="button-row">
          {createTatamiButton("10~12", props.onClick, setSelectedButtonTitle)}
          {createTatamiButton("12~14", props.onClick, setSelectedButtonTitle)}
        </div>
      </div>
      <div className="selected-button-title-container">
        <div className="selected-button-title-text">
          {selectedButtonTitle}畳用のエアコン一覧
        </div>
      </div>
      <Divider />
      <Divider />
    </>
  );
}

export default TatamiButtons;
