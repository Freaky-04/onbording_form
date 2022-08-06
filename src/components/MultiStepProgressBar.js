import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";
import logo from "./logo.png";

export const MultiStepProgressBar = (props) => {
  return (
    <div className="mt-5 mb-">
      <div className="logoclass">
        <img className="logopng" src={logo} />
        <h1>Eden</h1>
      </div>
      <div className="mt-5">
        <ProgressBar
          percent={((props.step - 1) * 100) / 2}
          filledBackground="#5A4AD1"
        >
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div className={`step ${accomplished ? "completed" : null}`}>
                1
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div className={`step ${accomplished ? "completed" : null}`}>
                2
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div className={`step ${accomplished ? "completed" : null}`}>
                3
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div className={`step ${accomplished ? "completed" : null}`}>
                4
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};
