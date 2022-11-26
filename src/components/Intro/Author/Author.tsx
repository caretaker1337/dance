import React from "react";

import { SvgArrowIcon } from "~/icons";
import "./style.scss";

const Author: React.FC = () => (
  <div className="intro__author">
    <a className="intro__author__link" href="#">
      <img
        alt="Author"
        className="intro__author__image"
        src="images/product_img.jpg"
      />

      <span className="intro__author__content">
        <span className="intro__author__name">Alina Kosmos</span>
        <span className="intro__author__label">Author</span>
      </span>

      <i className="intro__author__icon">
        <SvgArrowIcon />
      </i>
    </a>
  </div>
);

export { Author };
