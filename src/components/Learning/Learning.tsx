import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import { SvgSlideIcon } from "~/icons";
import { items } from "./data";
import { TSlide } from "./types";
import "./style.scss";

const Learning: React.FC = () => (
  <div className="learning">
    <h2 className="learning__title">What You'll Learn</h2>

    {items && !!items.length && (
      <div className="learning__slider">
        <Swiper
          breakpoints={{
            550: {
              slidesPerView: 3.2,
              spaceBetween: 8,
            },
          }}
          loop
          slidesOffsetAfter={20}
          slidesPerView={2.2}
          spaceBetween={8}
        >
          {items.map(
            ({ id, imageSrc, title }: TSlide, index: number): React.ReactElement => (
              <SwiperSlide key={id}>
                <img
                  alt={`slide-${index}`}
                  className="learning__slider__image"
                  src={imageSrc}
                />

                <a className="learning__slider__link" href="#">
                  <i className="learning__slider__icon">
                    <SvgSlideIcon />
                  </i>

                  <span className="learning__slider__title">{title}</span>
                </a>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    )}
  </div>
);

export { Learning };
