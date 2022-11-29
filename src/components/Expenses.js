import ExpenseItem from "./ExpenseItem";
//import 'Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                image={props.items[0].image}
                shop={props.items[0].shop}
                description={props.items[0].description}
                secondImage={props.items[0].secondImage}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                image={props.items[1].image}
                shop={props.items[1].shop}
                description={props.items[1].description}
                secondImage={props.items[1].secondImage}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                image={props.items[2].image}
                shop={props.items[2].shop}
                description={props.items[2].description}
                secondImage={props.items[2].secondImage}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                image={props.items[3].image}
                shop={props.items[3].shop}
                description={props.items[3].description}
                secondImage={props.items[3].secondImage}
            ></ExpenseItem>
                        <ExpenseItem
                title={props.items[4].title}
                amount={props.items[4].amount}
                image={props.items[4].image}
                shop={props.items[4].shop}
                description={props.items[4].description}
                secondImage={props.items[4].secondImage}
            ></ExpenseItem>
                        <ExpenseItem
                title={props.items[5].title}
                amount={props.items[5].amount}
                image={props.items[5].image}
                shop={props.items[5].shop}
                description={props.items[5].description}
                secondImage={props.items[5].secondImage}
            ></ExpenseItem>
        </div>
    )
}

export default Expenses;