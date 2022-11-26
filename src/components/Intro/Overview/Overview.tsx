import React, { useState } from "react";

import "./style.scss";

const text = `Hi Queen! I am happy to introduce you to my first HIGH HEELS course, which
  I create to help you to start the wonderful HEELS DANCE journey from the
  ZERO level! In this course, you will find 32 videos with high heels basic
  tutorials. After this course, you will feel more confident, free in ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis maxime ipsa voluptate 
  hic officiis delectus minus vel explicabo recusandae. Eos, iusto sequi perferendis
  reprehenderit commodi nemo. Dicta, debitis cumque?
`;

const Overview: React.FC = () => {
  const [isExpanded, toggleExpanded] = useState<boolean>(false);

  const handleExpandToggle = (): void => {
    toggleExpanded(!isExpanded);
  };

  const truncateText = (text: string): string => `${text.substring(0, 280)}...`;

  return (
    <div className="intro__overview">
      <h2 className="intro__overview__title">Overview</h2>
      <div className="intro__overview__text">
        <p>
          {isExpanded ? text : truncateText(text)}{" "}
          <span
            className={`intro__overview__expand ${
              isExpanded ? "intro__overview__expand--active" : ""
            }`}
            onClick={handleExpandToggle}
          >
            {isExpanded ? "less" : "more"}
          </span>
        </p>
      </div>
    </div>
  );
};

export { Overview };
