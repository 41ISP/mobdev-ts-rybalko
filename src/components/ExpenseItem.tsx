import { useExpensesStore } from "../store/expensesStore";
import { IExpense } from "../types";
import { formatMoney } from "../utils";


interface IExpenseItem {
  expense: IExpense}
export default function ExpenseItem({expense}: IExpenseItem) {
const {removeExpense} = useExpensesStore()
   return (
     <li className="row">
       <span className="row__icon" aria-hidden="true">
       
       </span>
       <div className="row__body">
         <span className="row__title">{expense.title}</span>
  
       </div>
       <span className="row__amount">{formatMoney(expense.amount)}</span>
       <button
         type="button"
         className="row__delete"
         aria-label={`Удалить «${expense.title}»`}
         onClick={() => removeExpense(expense.id)}
      >
         ×
      </button>
     </li>
 );
}
