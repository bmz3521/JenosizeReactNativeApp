import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './Navigation';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}

export default App;