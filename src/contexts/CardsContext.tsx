import { Context, createContext, ReactNode, useContext, useState } from "react";

export interface ICard {
  id: number;
  number: number;
}

interface ICardContext {
  cards: ICard[];
  onAdd: (card: ICard) => void;
  onRemove: (id: number) => void;
  onSort: () => void;
}
const CardContext: Context<any> = createContext({});

export const CardContextProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<ICard[] | []>([]);

  const handleAddCard = (card: ICard) => {
    setCards((prevCards) => {
      return [...prevCards, card];
    });
  };

  const handleRemoveCard = (id: number) => {
    const updatedCards = cards.filter((card: ICard) => card.id !== id);
    setCards(updatedCards);
  };

  const handleSortCards = () => {
    const updatedCards = structuredClone(cards).sort(
      (a: ICard, b: ICard) => a.number - b.number
    );
    setCards(updatedCards);
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        onAdd: handleAddCard,
        onRemove: handleRemoveCard,
        onSort: handleSortCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
