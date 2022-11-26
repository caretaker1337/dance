import React from "react";

import "./style.scss";

const Info: React.FC = () => (
  <div className="info">
    <h2 className="info__title">Information</h2>

    <div className="info__content">
      <div className="info__item">
        <span className="info__label">Language</span>
        <span className="info__value">English</span>
      </div>

      <div className="info__item">
        <span className="info__label">Required Level</span>
        <span className="info__value">Beginner</span>
      </div>

      <div className="info__item">
        <span className="info__label">Duration</span>
        <span className="info__value">4 Weeks, 2-3 Hours/Week</span>
      </div>
    </div>
  </div>
);

export { Info };
