// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieSearch from './src/MovieSearch';
import MovieDetails from './src/MovieDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieSearch">
        <Stack.Screen name="MovieSearch" component={MovieSearch} options={{ title: 'Filmes' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails}options={{ title: 'Detalhes do Filme' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
