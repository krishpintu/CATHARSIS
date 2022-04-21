import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomDrawer from '../components/CustomDrawer';
import HomeScreen  from '../screens/HomeScreen';
import ProfileScreen  from '../screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const AppStack = () => {


  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerLabelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} options={({navigation}) => ({
          title:"Home" ,headerStyle: styles.headerStyle ,headerTitleStyle: styles.titleColor,
          headerTintColor: '#fff',
          headerRight: () => (
            <Icon name="dots-vertical" size={28} color="#fff"/>
          ),
          })}/>
           <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={({navigation}) => ({
           title:"Profile" ,headerStyle: styles.headerStyle ,headerTitleStyle: styles.titleColor,
           headerTintColor: '#fff',
          headerRight: () => (
            <Icon name="home-circle" size={28} color="#fff" onPress={() => {navigation.navigate('HomeScreen')}}/>
          ),
          })}/>

    </Drawer.Navigator>
  );
};
export default AppStack;

const styles=StyleSheet.create({

  headerStyle:{
    backgroundColor: '#002147',
    shadowColor: '#f9fafd',
    elevation: 4
  }
  ,titleColor:{
    color:'#fff',
  }
});