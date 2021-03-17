import React from 'react';
import Screen from './screens';

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name='Home' />;

export const ProjectScreen = ({navigation}) => <Screen navigation={navigation} name='Project' />;

export const ContactScreen = ({navigation}) => <Screen navigation={navigation} name='Contact' />;