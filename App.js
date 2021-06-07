import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationDrawer from './src/navigations/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}