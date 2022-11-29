
import React from 'react';
import {useNavigate} from "react-router-dom";

import './ExpenseItem.css';
import Card from './UI/Card';

function ExpenseItem(props) {

    const history = useNavigate();

    const clickHandler = () => {
        history("/product", {state: props});
    };

    return (
        <Card className='expense-item'>
            <div className='expense-item__description' onClick={clickHandler}>
                <h2 > {props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <div> <img src={props.image} width="200px" ></img></div>
        </Card>

    );

}

export default ExpenseItem;