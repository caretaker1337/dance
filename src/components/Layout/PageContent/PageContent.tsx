import React from "react";
import { SvgDotsIcon, SvgReturnIcon } from "~/icons";
import { Products } from "~/components";
import { Copyright } from "../Copyright";

import "./style.scss";

const PageContent: React.FC = () => (
  <div className="page__content">
    <div className="page__content__icons">
      <a className="page__content__icons__link" href="#">
        <SvgReturnIcon />
      </a>

      <a className="page__content__icons__link" href="#">
        <SvgDotsIcon />
      </a>
    </div>

    <div className="page__content__wrapper">
      <h1 className="page__content__wrapper__title">Chest & Hip Rolls</h1>
      <p className="page__content__wrapper__text">
        Welcome to the first chapter of our journey!
      </p>

      <p className="page__content__wrapper__text">
        I am so glad, that you decided to start it with me. I appreciate it so much!
      </p>

      <p className="page__content__wrapper__text">
        In the first video, you will learn how to do different chest rolls. Don't
        forget to do warmup & back stretch first. The warmup video you can find on my
        Instagram page{" "}
        <a
          className="page__content__wrapper__text__link"
          href="https://www.instagram.com/alinakosmoss"
          target="_blank"
        >
          @alinakosmoss
        </a>
        .
      </p>
      <p className="page__content__wrapper__subtext">
        All the videos are inverted for your comfort training.
      </p>

      <div className="page__content__wrapper__media">
        <img
          className="page__content__wrapper__media__img1"
          alt="page_content_wrapper_media_img1"
          src="images/page_video_poster_img.jpg"
        ></img>
      </div>

      <p className="page__content__wrapper__text">
        Ok, here are some main points from this video:
      </p>

      <ul className="page__content__wrapper__list">
        <li className="page__content__wrapper__item">
          <span className="page__content__wrapper__text">
            Do a breath in when you open your chest and put your shoulder blades
            together at the same time. And do a breath out when you roll back
          </span>
        </li>
        <li className="page__content__wrapper__item">
          <span className="page__content__wrapper__text">
            Help yourself with arms
          </span>
        </li>
        <li className="page__content__wrapper__item">
          <span className="page__content__wrapper__text">
            Keep your shoulder always down
          </span>
        </li>
        <li className="page__content__wrapper__item">
          <span className="page__content__wrapper__text">
            Isolate your lower body
          </span>
        </li>
        <li className="page__content__wrapper__item">
          <span className="page__content__wrapper__text">
            Always start from the points to help yourself to understand direction,
            then “join” these points with a line.
          </span>
        </li>
      </ul>

      <p className="page__content__wrapper__text">Now we can try it with music :)</p>

      <div className="page__content__wrapper__media">
        <img
          className="page__content__wrapper__media__img2"
          alt="page_content_wrapper_media_img1"
          src="images/page_video_poster_img2.jpg"
        ></img>
      </div>

      <p className="page__content__wrapper__text">
        Ok, great job! In the next video, I will teach you how to do hip rolls. This
        exercise love all my students! Hope, you will like it too. LET'S GO!
      </p>

      <span className="page__content__wrapper__media">
        <img
          className="page__content__wrapper__media__img2"
          alt="page_content_wrapper_media_img1"
          src="images/page_video_poster_img2.jpg"
        ></img>
      </span>

      <Products
        title="Next lesson"
        items={[
          {
            id: "124",
            imageSrc: "images/product_img.jpg",
            title: "Body Rolls (Wave)",
            text: "Continue our journey with body rolls! This is one of the main things in every dance",
          },
        ]}
      />
    </div>
		<Copyright />
  </div>
);

export { PageContent };
