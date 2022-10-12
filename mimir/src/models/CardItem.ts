export interface CardItem {
  id: string;
  front: string;
  back: string;
}

export interface CardItemAnswer extends CardItem {
  answer: string;
  accepted: boolean;
}
