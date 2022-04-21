import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './navigations/Routes';
import {AuthProvider} from './navigations/AuthProvider';


const App = () => {
  return (
      <SafeAreaProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </SafeAreaProvider>
  )
};

export default App;