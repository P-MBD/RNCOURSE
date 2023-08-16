import {View, TextInput,Text } from 'react-native'
function input({label,textInputConfig }){

return(
<View>
    <Text>{label}</Text>
    <TextInput {...textInputConfig} />
</View>
    );
}
export default input;