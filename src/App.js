import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2 , 28)
  },
  {
    id: 'e2',
    title: 'supermarket',
    amount: 1310.50,
    date: new Date(2021, 5 , 3)
  },
  {
    id: 'e3',
    title: 'Fuel',
    amount: 1530,
    date: new Date(2021, 7 , 22)
  },
  {
    id: 'e4',
    title: 'Utilities',
    amount: 1153.32,
    date: new Date(2021, 4 , 5)
  },
  {
    id: 'e5',
    title: 'Outings',
    amount: 540.22,
    date: new Date(2021, 3 , 6)
  }
  
];


function App() {

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>

    </div>
  );
}

export default App;
