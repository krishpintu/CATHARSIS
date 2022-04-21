import React, { useContext, useState,useEffect } from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes=()=>{

    const {isLoggedIn,initializing} = useContext(AuthContext);
    
    useEffect(() => { console.log(initializing); }, []);

    if(initializing) {
        return(
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#002147" />
            </View>);
    }
      
      
    return(
        <NavigationContainer>
           { isLoggedIn ? <AppStack/> : <AuthStack/> } 
        </NavigationContainer>
    );
}

export default Routes;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });