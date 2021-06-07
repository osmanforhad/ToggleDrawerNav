import React from 'react';
import {View,Text} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

function Home({ navigation }) {
    return (
      <View style={{backgroundColor:"#FFF", height:"100%"}}>

          <View style={{
          flex:1,
          marginTop:25,
           marginHorizontal:20}}>
        <AntDesign name="bars" size={24} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
        <Text style={{
            alignSelf:"center",
            marginTop:320
        }}>Home Screen</Text>
        </View>
          
        
      </View>
    );
  }

  export default Home;