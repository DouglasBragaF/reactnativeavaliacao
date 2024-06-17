import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Hello } from '@/src/pages/Hello/Hello';
import { Login } from '@/src/pages/Login/Login';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen 
          name="Hello" 
          component={Hello}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;