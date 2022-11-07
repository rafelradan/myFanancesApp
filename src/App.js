import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";

import { Provider } from 'react-redux'



import store from "./components/redux/Store";
import { useEffect, useState } from "react";

import FormInsertValue from "./components/formIncertValue/FormInsertValue";
import Table from "./components/table/Table";

import './App.scss'


function App() {
    localStorage.mfValues ? console.log('Bem vinda(a) ao App My Finances') : localStorage.setItem('mfValues', [])

    const dataUpdated = localStorage.getItem('mfValues')
    const [ dataValues, setDataValues ] = useState(dataUpdated ? JSON.parse(dataUpdated) : [])
    
    const [ income, setIncome ] = useState(0)
    const [ expense, setExpense ] = useState(0)
    const [ triger, setTriger ] = useState(0)
   
    async function handdleTriger(){
      await updateValues()

      setTriger(triger + 1)
    }

    function updateValues(){
      return new Promise((resolve) => {
        const data=  localStorage.getItem('mfValues')
        setDataValues( JSON.parse(data) )
        resolve()
      })

    }
  

    useEffect(() =>{
      const amountExpense = dataValues.filter((iten) => iten.addType === 'Saída')
      .map((getValues) => Number(getValues.newValue))
     // console.log(amountExpense);
      const expenseSum = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      setExpense(expenseSum);

      const amountIncome = dataValues.filter((item) => item.addType === 'Entrada' ) 
      .map((getValues) => Number(getValues.newValue));
     // console.log(amountIncome); //Log aqui
      const incomeSum = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      setIncome(incomeSum)
    },[triger]);


  return (
    <div className="App">
      
      <Provider store={store}>
        <Header />
        <Resume income={income} expense={expense} />
        <FormInsertValue triger={handdleTriger} />
        <Table triger={handdleTriger}  />
       <footer>Developed by Rafael Nascimento</footer>
      </Provider>
    </div>
  );
}

export default App;
