import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header, HeaderLocation } from './components/organisms';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={{ backgroundColor: "orange" }}>
        <Text >New User Screen</Text>
      </View>
    );
  }

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F2F2F2";

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Location">
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header /> }}
          />
          <Stack.Screen name="Restaurant" component={HomeScreen} />
          <Stack.Screen name="Location" component={HomeScreen} options={{ header: () => <HeaderLocation /> }} />
          <Stack.Screen name="SearchRestaurant" component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >
  );
}


export default App;
