import React from 'react';
import './ExpenseDate.css';

const Expenseltem = ({date}) => {
const year = date.getFullYear();
const month=date.toLocaleString('Ko-kR',{month:'long'});
const day=date.getDate();



  return (
<div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
  };



export default Expenseltem