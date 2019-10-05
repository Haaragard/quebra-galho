import React, { Component } from 'react';
import { View, Text, Touchable, Button } from 'react-native';

import { styles } from '../../styles/DefaultStyles';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.content}>
                <View tyle={styles.appHeader}>
                    {/* < */}
                </View>
                <View>
                    
                </View>
                <Text>e</Text>
                {/* <Button
                    title = 'Login'
                    onPress = {() => this.props.navigation.navigate('Login')}
                />
                <Button
                    title = 'Cadastro'
                    onPress = {() => this.props.navigation.navigate('Cadastro')}
                /> */}

                <Button
                    title = 'Login'
                    onPress = {() => this.props.navigation.navigate('Auth')}
                />
            </View>
        )
    }
}