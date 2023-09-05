import axios from "axios";
export function storeExpense(expenseData){
    axios.post('https://react-native-course-59da3-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    );
}