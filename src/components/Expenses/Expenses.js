import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
// import { useState } from 'react/cjs/react.development';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expense => (
      <ExpenseItem 
        title={expense.title} 
        amount={expense.amoutn} 
        date={expense.date}
        />
     ))}
    </Card>
  );
}

export default Expenses;
