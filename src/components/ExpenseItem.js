import "./ExpenseItem.css";
import React from 'react';



const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
   
  return (<div className="expense-item">
        <div>
             <div>{month}</div>
             <div>{year}</div>
             <div>{day}</div>
        </div>
        <div className="expense-item_description"><h2>{props.title }</h2></div>
        <div className="expense-item_price">{props.amount }</div>

  </div>);
};

export default ExpenseItem;
