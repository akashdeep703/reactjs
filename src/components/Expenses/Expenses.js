import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import { useState } from "react";
import ExpenseList from "./ExpenseList";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filtetedExpenses = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filteredYear })
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={filtetedExpenses} />
        </Card>
    )
}

export default Expenses;
