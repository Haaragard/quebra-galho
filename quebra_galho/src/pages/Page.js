import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

class Page extends Component {
    constructor(props) {
        this.super(props);

    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}