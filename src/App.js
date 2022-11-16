import ExpenseItem from "./components/ExpenseItem";
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

  return (
    <div>
      <h2>Let's Start</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
