import logo from './logo.svg';
import ExpenseItem from "./components/Expenses/ExpenseItem";

import React, {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    }
];

const App = () => {





    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            const result = [expense, ...prevExpenses]
            // console.log('002' ,result, prevExpenses)
            return result
        });
        // console.log('In App.js')
        // console.log(expense, ...expenses )
    }


    const [filter, setFilter] = useState('all')
    const FilterCondition = con =>{
        setFilter(prevCon => con)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} filterRuleOut={filter} filterRuleIn={FilterCondition}/>
        </div>

    );
}

export default App;
