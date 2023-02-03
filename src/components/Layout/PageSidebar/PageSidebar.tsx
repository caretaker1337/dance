import React from "react";
import { NavLink } from "react-router-dom";

import { Products } from "~/components";
import { SvgArrowIcon2 } from "~/icons";
import "./style.scss";

const PageSidebar: React.FC = () => (
  <div className="page__sidebar">
    <NavLink className="page__sidebar__button" to="/">
      <SvgArrowIcon2 />
    </NavLink>

    <Products
      title="Introduction to Heels Dance"
      items={[
        {
          id: "123",
          imageSrc: "images/product_img.jpg",
          title: "Chest & Hip Rolls",
          text: "In the first video, you will learn how to do different chest rolls",
        },
        {
          id: "124",
          imageSrc: "images/product_img.jpg",
          title: "Body Rolls (Wave)",
          text: "Continue our journey with body rolls! This is one of the main things in every dance",
        },
        {
          id: "125",
          imageSrc: "images/product_img.jpg",
          title: "Balances & Lines",
          text: "Now we start our REAL high heels journey and of course",
        },
        {
          id: "126",
          imageSrc: "images/product_img.jpg",
          title: "Slow Walk & Balance Combo",
          text: "Ok, here are some main points from this video...",
        },
      ]}
    />
  </div>
);

export { PageSidebar };
