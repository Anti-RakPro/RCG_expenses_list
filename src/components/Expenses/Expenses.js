import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    console.log({props})
    console.log(props.items)

    return (
        <Card className='expenses'>
        <YearFilter expenses={props} filterRuleIn={props.filterRuleIn}/>
        <ExpensesList expenses={props.items} filterRuleOut={props.filterRuleOut} />
        </Card>
    )
}

export default Expenses