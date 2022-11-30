import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import { useState } from "react";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filtetedExpenses = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filteredYear })

    let expensesContent = <p>No Expenses Found</p>

    if (filtetedExpenses.length > 0) {
        expensesContent = filtetedExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ));
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    )
}

export default Expenses;
