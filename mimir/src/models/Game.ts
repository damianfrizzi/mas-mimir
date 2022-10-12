import { CardItemAnswer } from "./CardItem";

export type Game = {
  front: string;
  cardCount: number;
  solved: CardItemAnswer[];
};
