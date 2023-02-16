import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

function NewExpense(props) {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (EnteredExpenseData) => {
        const expenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    //Add New Expense Button Handler (Show Form)
    const addNewExpensehandler = () => {
        setShowForm(true);
    }

    //Form Cancel Button handler
    const CancelBtnHandler = () => {
        setShowForm(false);
    }
    
    return <div className="new-expense">
        {!showForm && <button onClick={addNewExpensehandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelBtnHandler}/>}
        
    </div>
}

export default NewExpense;