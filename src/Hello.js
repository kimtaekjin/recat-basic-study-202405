import React from 'react'
import Expenseltem from './components/ExpenseDate'
import './Expenses.css';
import Card from './components/UI/Card';

const Hello = (props) => {
console.log('props:',props)



  return (
    <Card className="rectangle">
      <div>
    {props.children}
    Hello React
    </div>
    </Card>
  );

  
}

export default Hello;