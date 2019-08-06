import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: navigator => ({
        header: <Header {...navigator} />,
      }),
      cardStyle: {
        backgroundColor: '#141419',
      },
    }
  )
);

export default Routes;
