
import React, { useState } from 'react';


import './ExpenseItem.css';
import Card from './UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    console.log('how much!');

    const clickHandler = () => {
        console.log('clicked!');
        setTitle('Updated!');
    };

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <h2 > {title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <div> <img src={props.image} width="200px" ></img></div>
        </Card>

    );

}

export default ExpenseItem;