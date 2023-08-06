import {View} from 'react-native'
import ExpensesList from './ExpensesList';
import ExpensesSummery from './ExpensesSummery';
function ExpensesOutput({expenses,expensesPeriod}){
    return(
        <View>
            <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList />
            
        </View>
    )

}
export default ExpensesOutput;