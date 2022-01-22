import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Home } from './src/screens';

const Stack = createStackNavigator();

const App= () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
      { user ? (
          <Stack.Screen name="Home">
          {
            props => <Home {...props} />
          }
          </Stack.Screen>
      ) : (
        <>
         <Stack.Screen name="Login">
           {
             props => <Login {...props} setUser={setUser} />
           }
         </Stack.Screen>
        </>
      )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
