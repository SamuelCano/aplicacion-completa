import React from 'react';
import Login from './ventanas/login';
import Registro from './ventanas/registro';
import Inicio from './ventanas/principal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name='Inicio' component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;