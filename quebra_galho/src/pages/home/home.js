import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../../styles/DefaultStyles';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title = 'Login'
                    onPress = {() => this.props.navigation.navigate('Login')}
                />
                <Button
                    title = 'Cadastro'
                    onPress = {() => this.props.navigation.navigate('Cadastro')}
                />
            </View>
        )
    }
}