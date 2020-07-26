import React ,{ useState } from 'react';
import {Image,StyleSheet, Text,TextInput,Button,View} from 'react-native';
export default function Main({navigation}) {
  const [name,setName]=useState('');


  const changeHandler = (val) => {
    setName(val);
  };

  return (
    <View>
    <View style={styles.container}>  <Image source ={require('../assets/images/backgroundimg.png')} ></Image> </View>
   
     <View style={styles.container}>   
 
      <Text style={styles.titleText}>Smarty</Text>
      <Text style={styles.baseText}>Welcome Home </Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder='Your Name Please'
        onChangeText={changeHandler} 
        value={name} />
      <Button title="Continue" onPress={ ()=>{navigation.navigate('Home',{name})}}/>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
   
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
 
});