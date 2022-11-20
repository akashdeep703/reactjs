import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "286",
      date: new Date(2021, 5, 12)
    },
    {
      id: "e1",
      title: "Car Insurance",
      amount: "286",
      date: new Date(2022, 5, 12)
    },
    {
      id: "e1",
      title: "New Desk(Wooden)",
      amount: "286",
      date: new Date(2022, 7, 2)
    }
  ];

  const addExpenseHadler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
