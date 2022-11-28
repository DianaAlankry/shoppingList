
import ExpenseItem from "./components/ExpenseItem";

import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {

      title: 'Classic Pizza', amount: 30, image: "../images/classic.jpeg",
    },
    { title: 'Pizza with olives', amount: 35, image: "../images/olive.jpeg" },
    { title: 'Pizza with corn', amount: 35, image: "../images/corn.jpeg" },
    { title: 'Pizza with ananas', amount: 45, image: "../images/ananas.png" },
    { title: 'Pizza with onion and tomato', amount: 37, image: "../images/onion.jpg" },
    { title: 'Pizza with mushrooms', amount: 35, image: "../images/mushroom.jpeg" },
  ];

  return <div>
    <h2> PIZZARIA</h2>
    <Expenses items={expenses} />
  </div>


}

export default App;
