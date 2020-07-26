import React ,{ useState } from 'react';
import {ImageBackground,StyleSheet, Text,View} from 'react-native';
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
<Text>Welcome {navigation.getParam('name')}!!!</Text>
    <Text style={styles.today} >{today}</Text>
    <ImageBackground source ={require('../assets/images/bathroom.png')}style={styles.imgBackground} >
               <Text>Bathroom</Text>
               <Text>6 Device</Text>
    </ImageBackground>
<ImageBackground source ={require('../assets/images/bedroom.png')}style={styles.imgBackground} > 
               <Text>Bedroom</Text>
               <Text>4 Device</Text>
 </ImageBackground>
<ImageBackground source ={require('../assets/images/livingroom.png')}style={styles.imgBackground} >
               <Text>Livingroom</Text>
               <Text>7 Device</Text>
</ImageBackground>
<ImageBackground source ={require('../assets/images/mediaroom.png')}style={styles.imgBackground}> 
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

      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      },
      imgBackground: {
        width: '95%',
        height: '95%',
        flex: 1 ,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
},
   today:{
     color:'#8E9295',
     textAlign: 'left'
   }
  });