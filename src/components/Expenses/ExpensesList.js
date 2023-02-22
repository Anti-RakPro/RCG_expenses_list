import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
   // console.log(props)
   // console.log(props.items)

    const FilterRule = (elm)=>{
        return (props.filterRuleOut === 'all' || props.filterRuleOut === elm.date.getFullYear().toString() )
    }

    return (
        <ul className='expenses-list'>
              {props.expenses
                    .filter(FilterRule)
                    .map((expense) => (
                        <ExpenseItem
                            key =  {expense.id}
                            title= {expense.title}
                            amount={expense.amount}
                            date=  {expense.date}/>
                    ))}
        </ul>

    )
}

export default ExpensesList;

