import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "286",
      date: new Date(2021, 5, 12)
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "286",
      date: new Date(2022, 5, 12)
    },
    {
      id: "e3",
      title: "New Desk(Wooden)",
      amount: "286",
      date: new Date(2020, 7, 2)
    }
  ];

  const [expenses, setExpense] = useState(DUMMY_EXPENSES)

  const addExpenseHadler = (expense) => {
    setExpense((preExpenses) => {
      return [expense, ...preExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
