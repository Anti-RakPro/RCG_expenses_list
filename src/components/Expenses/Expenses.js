import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
//
// console.log('002', props)
// console.log('003', props.items)
    return (
        <Card className='expenses'>

            {props.items.map((expense) => (
                <ExpenseItem
                    key = {expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
            ))}
        </Card>
    )
}

export default Expenses