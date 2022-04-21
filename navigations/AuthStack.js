
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotScreen from '../screens/ForgotScreen';
import OTPScreen from '../screens/OTPScreen';


const AppStack = createNativeStackNavigator();

const AuthStack = () => {

 let initialRoute="SplashScreen";

  return (
    <AppStack.Navigator initialRouteName={initialRoute}>
      <AppStack.Screen name="SplashScreen" component={SplashScreen} options={{header:()=>null}}/>
      <AppStack.Screen name="Login" component={SigninScreen} options={{header:()=>null}}/>
      <AppStack.Screen name="register" component={SignupScreen} options={({navigation}) => ({
          title: 'Register User',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        //   headerLeft: () => (
        //     <View style={{marginLeft: 10}}>
        //       {/* <FontAwesome.Button 
        //         name="long-arrow-left"
        //         size={25}
        //         backgroundColor="#f9fafd"
        //         color="#333"
        //         onPress={() => navigation.navigate('Login')}
        //       /> */}
        //     </View>
        //   ),
        })}
        />
        <AppStack.Screen name="forgot" component={ForgotScreen} options={({navigation}) => ({
          title: 'Forgot Password',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },//   headerLeft: () => (
            //     <View style={{marginLeft: 10}}>
            //       {/* <FontAwesome.Button 
            //         name="long-arrow-left"
            //         size={25}
            //         backgroundColor="#f9fafd"
            //         color="#333"
            //         onPress={() => navigation.navigate('Login')}
            //       /> */}
            //     </View>
            //   ),
            })}/>
        <AppStack.Screen name="otp" component={OTPScreen} options={({navigation}) => ({
          title: 'OTP Verification',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },//   headerLeft: () => (
            //     <View style={{marginLeft: 10}}>
            //       {/* <FontAwesome.Button 
            //         name="long-arrow-left"
            //         size={25}
            //         backgroundColor="#f9fafd"
            //         color="#333"
            //         onPress={() => navigation.navigate('Login')}
            //       /> */}
            //     </View>
            //   ),
            })}/>
    </AppStack.Navigator>
  )
}

export default AuthStack;