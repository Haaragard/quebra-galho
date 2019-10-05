import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { stylesMenu } from './styles/DefaultStyles';

import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import LoadingScreen from './pages/LoadingScreen'
// import AuthLoadingScreen from './pages/AuthLoadingScreen';
// import SignInScreen from './pages/SignInScreen';
// import HomeScreen from './pages/SignInScreen';

export default class Routes extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const AppNavigator = createDrawerNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: stylesMenu.backgroundColor,
        drawerPosition: 'left',
        drawerType: 'front',
    }
);

const AuthStack = createStackNavigator(
    {
        Login: { screen: Login },
        Cadastro: { screen: Cadastro },
    },
    {
        initialRouteName: 'Login',
    }
);

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            LoadingScreen: LoadingScreen,
            App: AppNavigator,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'LoadingScreen',
        }
    )
);