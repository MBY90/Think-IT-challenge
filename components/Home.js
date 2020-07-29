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
      <Text style={styles.today} >{today}</Text>
<Text style={styles.titleText}>Welcome, {navigation.getParam('name')} !</Text>
    
    <ImageBackground source ={require('../assets/images/bathroom.png')}style={styles.imgBackground} >
               <Text style={styles.text}>Bathroom</Text>
               <Text style={styles.text2}>6 Device</Text>
    </ImageBackground>
<ImageBackground source ={require('../assets/images/bedroom.png')}style={styles.imgBackground} > 
               <Text style={styles.text}>Bedroom</Text>
               <Text style={styles.text2}>4 Device</Text>
 </ImageBackground>
<ImageBackground source ={require('../assets/images/livingroom.png')}style={styles.imgBackground} >
               <Text style={styles.text}>Livingroom</Text>
               <Text style={styles.text2}>7 Device</Text>
</ImageBackground>
<ImageBackground source ={require('../assets/images/mediaroom.png')}style={styles.imgBackground}> 
<               Text style={styles.text}>Mediaroom</Text>
               <Text style={styles.text2}>10 Device</Text>
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
        fontSize: 15,
        fontWeight: "bold",
        top:10,
        left:5,
        marginBottom: 10,
        marginTop: 10,
        
      },
      imgBackground: {
        width: 300,
        height: 150,
        flex: 1 ,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        marginTop: 10,
},
   today:{
     color:'#8E9295',
     fontSize: 10,
     position:'absolute',
     left:5,
     top:5,
   },
   text:{
     flex:1,
    color:'#fffaf0',
    textAlign: 'left',
    marginBottom: 5,
    position:'absolute',
    left:5,
    bottom:30,
    
   },
   text2:{
    flex:1,
    color:'#fffaf0',
    textAlign: 'left',
    marginBottom: 5,
    position:'absolute',
    left:5,
    bottom:5,
   }
  });