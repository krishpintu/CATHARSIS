import React from 'react';
import { View, StyleSheet,Text,ImageBackground } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = props => {

  return (
    
    <View style={{flex:1}}>

    <DrawerContentScrollView {...props} >
        
        <ImageBackground  source={require('../assets/drawer-head-bg.jpeg')} style={{padding: 20, marginTop:-4}}>
        <View style={styles.row}>
            <View style={styles.section}>
                <Avatar rounded source={require('../assets/user-profile.jpg')}/>
            </View>
            <View style={styles.section}>
                <Text style={{color: '#fff',fontSize: 18,fontFamily:'Roboto-Medium',marginBottom: 5,}}>
                    Krishna Singh
                </Text>
            </View>
        </View>
        <View style={{flexDirection: 'row',marginTop:5}}>
            <Icon name="email" size={14} color="#fff" style={{ marginTop: 2,}}/>
            <Text style={{color: '#fff', fontFamily: 'Roboto-Regular', marginLeft: 5,}}>
              Krishnas.ttl@tatmotors.com
            </Text>
        </View>
        <View style={{flexDirection: 'row',marginTop:3}}>
            <Icon name="phone-classic" size={14} color="#fff" style={{ marginTop: 2,}}/>
            <Text style={{color: '#fff', fontFamily: 'Roboto-Regular', marginLeft: 5,}}>
              9031661991
            </Text>
        </View>
        </ImageBackground>

        <View style={styles.separator}/>
        
            <DrawerItem icon={({color, size}) => (<Icon  name="home-outline" color={color} size={size}/> )}
                label="Home" onPress={() => {props.navigation.navigate('HomeScreen')}}
            />
            <DrawerItem  icon={({color, size}) => (<Icon name="account-cog" color={color} size={size} />)}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
            />
    </DrawerContentScrollView>
    <View style={styles.bottomDrawerSection}/>
        <DrawerItem 
            icon={({color, size}) => (<Icon name="exit-to-app" color={color} size={size}/>)}
            label="Sign Out"
            onPress={() => {signOut()}}
        />


</View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  separator :{
    marginTop :5 ,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth :1,
  },
});