import React,{useState,useEffect} from 'react';
import { 
    View, 
    Dimensions,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {

  const [animating, setAnimating] = useState(true);


  const getLanguageData = async () => {
    try {
      const value = await AsyncStorage.getItem('@language')
      if(value !== null) {
        console.warn(JSON.parse(value));
      }
      else{
        const jsonValue = JSON.stringify('en');
        await AsyncStorage.setItem('@language', jsonValue);
      }
    } catch(e) {
      console.warn(e);
    }
  }

    useEffect(() => {

        getLanguageData();
      
        setTimeout(() => {
          setAnimating(false);
          navigation.replace('Login');
        }, 3000);

         
      }, []);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#002147' barStyle="light-content"/>
        <View style={styles.header}>
            <Image 
              animation="bounceIn"
              duraton="1500"
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
            <ActivityIndicator
                    animating={animating}
                    color="#fff"
                    size="large"
                /> 
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#002147'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 150,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  
});