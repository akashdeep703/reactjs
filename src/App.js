import Expenses from "./components/Expenses";
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
