import './ExpenseDate.css'
function ExpenseDate(props){
    // console.log('props.data is undefined', props )


    const year = props.date.getFullYear()
    const mouth = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})



    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{mouth}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day '>{day}</div>
        </div>
    )

}

export default ExpenseDate