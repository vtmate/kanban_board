interface Card {
  id: number;
  title: string;
  description: string;
}

export const deleteCard = (cards: Card[], id: number): Card[] => {
  return cards.filter((card) => card.id !== id);
};

export const addCard = (cards: Card[], card: Card): Card[] => {
  return [...cards, card];
};
