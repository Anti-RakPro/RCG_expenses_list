import './YearFilter.css'
import React, {useState} from "react";
import Select from 'react-select'
import Card from "../UI/Card";

const YearFilter = (props)=> {


    // this const transform startArr(DUMMY_EXPENSES) to arr of years that was used
    const expensesYearList = [...new Set(props.expenses.items.map((elm) => {
        return elm.date.getFullYear()
    }))]
        .sort((a, b) => {
            return b - a
        })
        .map(elm => {
            return {value: elm.toString(), label: elm.toString()}
        })


    // then adds starting obj that includes all years
    const options = [
        {value: 'all', label: 'All'}
    ].concat(expensesYearList)

    // console.log(options)

    const SelectYear = (elm) => {
        props.filterRuleIn(elm)
        // console.log(elm)}


        return (
            <Card className='year-filter-block'>
                <p>Filter by year</p>
                <Select className='year-filter-select' options={options} onChange={(elm) => {
                    SelectYear(elm.value)
                }} defaultValue={options[0] || ''}/>
            </Card>
        )
    }
}
export default YearFilter;