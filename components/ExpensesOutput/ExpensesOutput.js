import {View} from 'react-native'
import ExpensesSummery from './ExpensesSummery';
function ExpensesList(){
    return(
        <View>
            <ExpensesSummery />
            <ExpensesList />
        </View>
    )

}
export default ExpensesList;