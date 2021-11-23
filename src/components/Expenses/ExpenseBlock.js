import ExpensesList from "./ExpensesList";
import "./ExpenseBlock.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseBlock = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  console.log(props, "props");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList items={filteredExpanses} />
    </Card>
  );
};

export default ExpenseBlock;
