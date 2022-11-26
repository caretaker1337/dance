import React from "react";

import { SvgArrowIcon } from "~/icons";
import { TProduct, TProps } from "./types";
import "./style.scss";

const Products: React.FC<TProps> = ({ title, items }) => (
  <div className="products">
    <h2 className="products__title">{title}</h2>

    {items && !!items.length && (
      <div className="products__list">
        {items.map(
          ({ id, imageSrc, text, title }: TProduct): React.ReactElement => (
            <div className="products__item" key={id}>
              <a className="products__item__link" href="#">
                <img alt={title} className="products__item__image" src={imageSrc} />

                <span className="products__item__content">
                  <span className="products__item__title">{title}</span>
                  <span className="products__item__text">{text}</span>
                </span>

                <i className="products__item__icon">
                  <SvgArrowIcon />
                </i>
              </a>
            </div>
          )
        )}
      </div>
    )}
  </div>
);

export { Products };
