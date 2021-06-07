import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContentSidebar from './CustomDrawerContentSidebar';
import Home from '../screens/Home';
import Notification from '../screens/Notification';

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContentSidebar {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}

export default NavigationDrawer;