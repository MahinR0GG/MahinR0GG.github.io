import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import { SinglePage } from "../pages/SinglePage";
import { Socialicons } from "../components/socialicons";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Headermain />
      <div className="s_c">
        <SinglePage />
        <Socialicons />
      </div>
    </div>
  );
}
