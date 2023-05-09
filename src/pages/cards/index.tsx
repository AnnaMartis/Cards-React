import Footer from "../../components/cards/footer/indes";
import Header from "../../components/cards/header";
import Instruction from "../../components/cards/instruction";
import Main from "../../components/cards/main";
import './cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <div className="body-block">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="instruction-block">
        <Instruction/>
      </div>
    </div>
  );
};

export default Cards;
