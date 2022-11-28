import ExpenseItem from "./ExpenseItem";
//import 'Expenses.css';

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                image={props.items[0].image}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                image={props.items[1].image}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                image={props.items[2].image}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                image={props.items[3].image}
            ></ExpenseItem>
                        <ExpenseItem
                title={props.items[4].title}
                amount={props.items[4].amount}
                image={props.items[4].image}
            ></ExpenseItem>
                        <ExpenseItem
                title={props.items[5].title}
                amount={props.items[5].amount}
                image={props.items[5].image}
            ></ExpenseItem>
        </div>
    )
}

export default Expenses;