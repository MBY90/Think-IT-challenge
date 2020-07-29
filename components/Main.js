import React ,{ useState } from 'react';
import {StyleSheet, Text,TextInput,Button,Image, View} from 'react-native';
export default function Main({navigation}) {
  const [name,setName]=useState('');


  const changeHandler = (val) => {
    setName(val);
  };

  return (
<View  style={styles.container}>

   <Image source ={require('../assets/images/backgroundimg.png')} style={styles.image} />
    
    <View style={styles.container}>
    <Text style={styles.titleText}>Smarty</Text>
    <Text style={styles.welcome}> Welcome Home </Text>
    <TextInput style={styles.textinput}
      placeholder='Your Name Please'
      onChangeText={changeHandler} 
      value={name} />
    <Button title="     Continue     " onPress={ ()=>{navigation.navigate('Home',{name})}}/>
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
   image:{
     flex :1,
     width: 400,
      height: 400 ,
      alignItems: 'center',
      marginBottom: 5,
      marginTop: 5,
    },
    titleText: {
      fontSize: 50,
      fontWeight: "bold",
      marginBottom: 5,
      marginTop: 5,
      
    },
    textinput:{
      marginBottom: 5,
      marginTop: 5,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
    },
    welcome:
    {
      color:'#8e9295',
      fontSize: 15,

    }
 
});