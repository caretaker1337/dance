import { v4 } from "uuid";

import { TProduct } from "./types";

export const items: TProduct[] = [
  {
    id: v4(),
    imageSrc: "images/product_img.jpg",
    text: "In the first video, you will learn how to do different chest rolls",
    title: "Chest & Hip Rolls",
  },
  {
    id: v4(),
    imageSrc: "images/product_img.jpg",
    text: "Continue our journey with body rolls! This is one of the main things in every dance Continue our journey with body rolls! This is one of the main things in every dance",
    title: "Body Rolls (Wave)",
  },
  {
    id: v4(),
    imageSrc: "images/product_img.jpg",
    text: "Now we start our REAL high heels journey and of course Now we start our REAL high heels journey and of course",
    title: "Balances & Lines",
  },
  {
    id: v4(),
    imageSrc: "images/product_img2.jpg",
    text: "Ok, here are some main points from this video Now we start our REAL high heels journey and of course Now we start our REAL high heels journey and of course",
    title: "Slow Walk & Balance Combo",
  },
];
