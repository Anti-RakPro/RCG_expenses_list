import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('click')
    }
    // console.log('ExpenseItem props check', props)
    // if (props.data === undefined){
    //     console.log('ExpenseItem props check is undefined', props.data)
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;