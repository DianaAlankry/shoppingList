import {useLocation} from "react-router";
import Card from "./UI/Card";
import React from "react";

const ItemInfo = () => {
    const location = useLocation();
    const props = location.state;

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <h2> {props.shop}</h2>
                <h4>{props.description}</h4>
            </div>
            <div><img src={props.secondImage} width="200px"></img></div>
        </Card>
    );
};

export default ItemInfo;