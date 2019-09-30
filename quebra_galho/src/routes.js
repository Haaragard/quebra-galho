import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { stylesMenu } from './styles/DefaultStyles';

import Home from './pages/home/Home';
import Cadasro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

export default class Routes extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Cadastro: { screen: Cadasro },
        Login: { screen: Login },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: stylesMenu.headerStyle.backgroundColor,
            },
            headerTintColor: stylesMenu.headerTintColor,
            headerTitleStyle: {
                fontWeight: stylesMenu.headerTitleStyle.fontWeight,
            },
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);