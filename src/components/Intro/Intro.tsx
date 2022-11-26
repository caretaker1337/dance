import React from "react";

import { Author } from "./Author";
import { Overview } from "./Overview";
import "./style.scss";

const Intro: React.FC = () => (
  <div className="intro">
    <p className="intro__price">ONLINE COURSE</p>

    <div className="intro__heading">
      <div className="intro__heading__title">Introduction to Heels Dance</div>
      <button type="button" className="intro__heading__button">Purchase for $50</button>
    </div>

    <Overview />
    <Author />
  </div>
);

export { Intro };
