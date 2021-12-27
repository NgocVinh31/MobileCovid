import React from 'react'
import { View, Text } from 'react-native'
import Form1 from "./form/tintuc"
import Form2 from "./form/chitiettintuc"
import Form3 from "./form/huongdan"
import Tab from "./form/tab"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="tab" component={Tab} options={{ headerShown: false }} />
         <Stack.Screen name="Form2" component={Form2} options={{ headerShown: false }} />
   </Stack.Navigator>
    </NavigationContainer>
  )
}
