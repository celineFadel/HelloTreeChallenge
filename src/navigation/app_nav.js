import * as React from 'react';

// Navigation imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screen imports
import Home from '../screens/home';
import Notifications from '../screens/notifications';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}