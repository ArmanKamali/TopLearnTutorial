import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { I18nManager } from 'react-native'
import StackNavigator from './app/Containers/StackNavigator';
import { ToastProvider } from 'react-native-toast-notifications'


// Support for rtl
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);



const App = () => {
  // load fonts
  let [fontsLoaded] = useFonts({
    'yekan': require('./app/assets/fonts/byekan.ttf'),
    'ih': require('./app/assets/fonts/ih.ttf'),
  });




  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ToastProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;