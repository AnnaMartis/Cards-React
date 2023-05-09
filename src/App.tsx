import { CardContextProvider } from "./contexts/CardsContext";
import Cards from "./pages/cards";

const App = () => {
  return (
    <>
      <CardContextProvider>
        <Cards />
      </CardContextProvider>
    </>
  );
};

export default App;
