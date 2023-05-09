import { useCardContext } from "../../../contexts/CardsContext";
import CustomButton from "../../../reusable/button";
import "./header.css";

const Header = () => {

  const { onAdd, onSort } = useCardContext();

  const handleAddClick = () => {
    const randomInteger = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

    const newCard = {
      id: Math.random(),
      number: randomInteger,
    };
    onAdd(newCard);
  };

  const handleSortClick = () => {
    onSort();
  };

  return (
    <div className="header">
      <CustomButton title="add card" onClick={handleAddClick} />
      <CustomButton title="sort cards" onClick={handleSortClick} />
    </div>
  );
};

export default Header;
