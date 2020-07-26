import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../components/Main';
import Home from '../components/home';
const MyNavigator = createStackNavigator(
    {
      Main: {
        screen:Main
      },
      Home: {
        screen:Home
      },
    },
    {
    initialRouteName: 'Main',
    }
  );

export default createAppContainer(MyNavigator);

