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
    <Text> Welcome Home </Text>
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
   image:{
     flex :1,
     width: 300,
      height: 300 ,
      alignItems: 'center'
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
 
});