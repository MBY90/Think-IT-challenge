import React ,{ useState } from 'react';
import {ImageBackground,StyleSheet, Text,TextInput,Button} from 'react-native';
export default function Main({navigation}) {
  const [name,setName]=useState('');


  const changeHandler = (val) => {
    setName(val);
  };

  return (
    <ImageBackground source ={require('../assets/images/backgroundimg.png')} style={styles.container}> 
 
      <Text style={styles.titleText}>Smarty</Text>
      <Text style={styles.baseText}>Welcome Home </Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder='Your Name Please'
        onChangeText={changeHandler} 
        value={name} />
      <Button title="Continue" onPress={ ()=>{navigation.navigate('Home',{name})}} style={{marginTop:'10'}}/>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
   
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
 
});