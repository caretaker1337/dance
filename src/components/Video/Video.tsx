import React from "react";

import { SvgArrowButton } from "~/icons";

import "./style.scss";

const Video: React.FC = () => (
  <div className="video">
    <video className="video__element" poster="images/video_poster_img.jpg" src="#" />
    <button type="button" className="video__button">
      <i className="video__button__svg">
        <SvgArrowButton />
      </i>
    </button>
  </div>
);

export { Video };
