import React from "react";

import { SvgTapflowIcon } from "~/icons";
import "./style.scss";

const Copyright: React.FC = () => (
  <div className="copyright">
    <a className="copyright__link" href="#" target="_blank">
      Powered by{" "}
      <i className="copyright__icon">
        <SvgTapflowIcon />
      </i>{" "}
      <img alt="Tapflow" className="copyright__image" src="images/tapflow_img.png" />
    </a>
  </div>
);

export { Copyright };
