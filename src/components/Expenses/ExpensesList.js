import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

function ExpensesList(props) {
     //if no expenses found show this message
     let expensesContent = <p>No Expenses Found!!!</p>;


     //if expenses data found change the value of expenses content variable to show expenses 
     if (props.items.length === 0) {
 
       return <h2 className="expenses-list__fallback">Found no expenses...</h2>
     }

     return (
        <ul className="expenses-list">
            {props.items.map((expense)=> (
         <ExpenseItem title={expense.title} 
         amount={expense.amount} 
         date={expense.date} 
         key={expense.id}/>
       ))}
        </ul>
     );
    
}

export default ExpensesList;