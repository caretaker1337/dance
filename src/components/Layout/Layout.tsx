import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { Info, Intro, Learning, Products, Video } from "~/components";
<<<<<<< HEAD
=======
import { PageSidebar } from "./PageSidebar";
import { PageContent } from "./PageContent";
>>>>>>> c21e498e0a18a9ffc497e790cb2499a1535cdbdd
import "./style.scss";
import { Copyright } from "./Copyright";

const Layout: React.FC = () => (
  <>
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink className="menu__link" to="/">Main page</NavLink>
        </li>

        <li className="menu__item">
          <NavLink className="menu__link" to="/content">Content</NavLink>
        </li>
      </ul>
    </div>
<<<<<<< HEAD
=======

    <Routes>
      <Route
        element={
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
        }
        path="/"
      />

      <Route
        element={
          <div className="page">
            <PageSidebar />
            <PageContent />
          </div>
        }
        path="/content"
      />
    </Routes>
>>>>>>> c21e498e0a18a9ffc497e790cb2499a1535cdbdd
  </>
);

export { Layout };
