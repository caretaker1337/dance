import React from "react";

import { Info, Intro, Learning, Products, Video } from "~/components";
import "./style.scss";
import { Copyright } from "./Copyright";

const Layout: React.FC = () => (
  <>
    <div className="wrapper">
      <div className="media">
        <Video />
      </div>

      <div className="content">
        <Intro />
        <Products
          title="Curriculum"
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
        <Learning />
        <Info />
        <Copyright />
      </div>
    </div>
  </>
);

export { Layout };
