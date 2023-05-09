import { ICard, useCardContext } from "../../../contexts/CardsContext";
import CustomCard from "../../../reusable/card";
import "./main.css";

const Main = () => {
  const { cards } = useCardContext();

  return (
    <div className="main">
        {cards.map((card: ICard, index: number) => (
          <CustomCard key={index} card={card} />
        ))}
    </div>
  );
};

export default Main;
