import { FC } from "react";
import "./card.css";
import { ICard, useCardContext } from "../../contexts/CardsContext";

interface ICustomCard {
  card: ICard
};

const CustomCard: FC<ICustomCard> = ({ card }) => {
  const {onRemove} = useCardContext();

  return (
    <div className="card">
      <p className="card-number">{card.number}</p>
      <p className="card-close" onClick={()=>{onRemove(card.id)}}>X</p>
    </div>
  );
};

export default CustomCard;
