import React from 'react';
import SideBar from './components/SideBar';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { HomeScreen, ProjectScreen, ContactScreen } from './screens';


const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: ({ tintColor }) => <Feather name='home' size={16} color={tintColor} />
    }
  },
  ProjectScreen: {
    screen: ProjectScreen,
    navigationOptions: {
      title: 'Project',
      drawerIcon: ({ tintColor }) => <Feather name='project' size={16} color={tintColor} />
    }
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      title: 'Contact',
      drawerIcon: ({ tintColor }) => <Feather name='contact' size={16} color={tintColor} />
    }
  }
},
  {
    contentComponent: props => <SideBar {...props} />

  })

export default createAppContainer(DrawerNavigator)