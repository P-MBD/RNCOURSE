import { View,Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Input from './Input';

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRows}>
      <Input
        style= {styles.rowInput}
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
       style= {styles.rowInput}
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      </View>  
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles= StyleSheet.create({
  form:{
    marginTop:80,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    marginVertical:24,
    textAlign:'center',
  },
  inputRows:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  rowInput:{
    flex:1,
  }
})