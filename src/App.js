import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens

import LandingPage from './screens/LandingPage';
import InfoPage from './screens/InfoPage';
import BottomTabNavigator from './components/BottomNavigator';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="InfoPage" component={InfoPage} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;
