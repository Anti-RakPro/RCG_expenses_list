import React from 'react'


import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
//'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595982#overview'
const NewExpense = (props)=>{

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }

    return (<div className='new-expense' >
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
};

export default NewExpense;