import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { I18nManager } from 'react-native'
import StackNavigator from './app/Containers/StackNavigator';
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider } from 'react-redux'
import { store } from './app/store';
import AnimatedSplash from 'react-native-animated-splash-screen'
// Support for rtl
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);



const App = () => {
  // load fonts
  let [fontsLoaded] = useFonts({
    'yekan': require('./app/assets/fonts/byekan.ttf'),
    'ih': require('./app/assets/fonts/ih.ttf'),
  });

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <AnimatedSplash 
    translucent={true}
    isLoaded = {loading}
    logoImage = {require('./app/assets/logo.png')}
    backgroundColor="#262626"
    logoHeight={250}
    logoWidth={250}
    >
      <ToastProvider>
        <NavigationContainer>
          <Provider store={store}>
            <StackNavigator />
          </Provider>
        </NavigationContainer>
      </ToastProvider>
    </AnimatedSplash>
  );
}

export default App;