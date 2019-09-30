import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/DefaultStyles';

export default class Cadastro extends Component {
    static navigationOptions = {
        title: 'Cadastro',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cadastro Screen</Text>
            </View>
        )
    }
}