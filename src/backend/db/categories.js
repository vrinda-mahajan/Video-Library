import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Basic Gardening",
  },
  {
    _id: uuid(),
    categoryName: "Terrace Gardening",
  },
  {
    _id: uuid(),
    categoryName: "Garden Tours",
  },
  {
    _id: uuid(),
    categoryName: "Hacks",
  },
  {
    _id: uuid(),
    categoryName: "Tools",
  },
];
