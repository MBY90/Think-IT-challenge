import React ,{ useState } from 'react';
import {ImageBackground,StyleSheet, Text,TextInput,Button,View} from 'react-native';
export default function Home({navigation}) {
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
   var mm=monthNames[today.getMonth()];
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    return(
    <View style={styles.container}>
<Text>{navigation.getParam('name')}</Text>
    <Text>{today}</Text>
    <ImageBackground source ={require('../assets/images/bathroom.png')} >
               <Text>Bathroom</Text>
               <Text>6 Device</Text>
    </ImageBackground>
<ImageBackground source ={require('../assets/images/bedroom.png')} style={styles.container}> 
               <Text>Bedroom</Text>
               <Text>4 Device</Text>
 </ImageBackground>
<ImageBackground source ={require('../assets/images/livingroom.png')}style={styles.container} >
               <Text>Livingroom</Text>
               <Text>7 Device</Text>
</ImageBackground>
<ImageBackground source ={require('../assets/images/mediaroom.png')}style={styles.container}> 
<               Text>Mediaroom</Text>
               <Text>10 Device</Text>
</ImageBackground>
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
      baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      },
   
  });