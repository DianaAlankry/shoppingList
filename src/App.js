import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Expenses from "./components/Expenses";
import ItemInfo from "./components/ItemInfo";

const App = () => {
    const expenses = [
        {
            title: 'Classic Pizza', amount: 30, image: "../images/classic.jpeg",
            shop: "Dominos", description: "very classic one", secondImage: "../images/classic_2.jpeg"
        },
        {
            title: 'Pizza with olives', amount: 35, image: "../images/olive.jpeg",
            shop: "Hut", description: "very original one", secondImage: "../images/olives_2.jpg"
        },
        {
            title: 'Pizza with corn', amount: 35, image: "../images/corn.jpeg",
            shop: "Papa Johns", description: "very yellow one", secondImage: "../images/corn_2.png"
        },
        {
            title: 'Pizza with ananas', amount: 45, image: "../images/ananas.png",
            shop: "Italy", description: "very special one", secondImage: "../images/ananas_2.jpg"
        },
        {
            title: 'Pizza with onion and tomato', amount: 37, image: "../images/onion.jpg",
            shop: "Spain", description: "very interesting one", secondImage: "../images/onion_tomato_2.jpg"
        },
        {
            title: 'Pizza with mushrooms', amount: 35, image: "../images/mushroom.jpeg",
            shop: "France", description: "very good one", secondImage: "../images/mushrooms_2.jpg"
        }
    ];

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <h2> PIZZARIA</h2>
                        <Expenses items={expenses}/>
                    </>
                }
                />
                <Route path="/product" element={<ItemInfo/>}/>
            </Routes>
        </Router>
    )

}

export default App;
