import React, { Component } from 'react';
import { View, ScrollView,  Text, Button } from 'react-native';

import api from '../../api';

import { styles } from '../../styles/DefaultStyles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: {},
        }
    }

    componentDidMount() {
        this.clickAttApi();
    }

    clickAttApi = () => {
        api.get('/usuarios')
        .then(u => { this.setState({ usuarios: u.data.docs }) })
        .catch(v => {
            return { error: 'ocorreu um erro'}
        });
    }
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <ScrollView style={styles.content}>
                <View tyle={styles.appHeader}>
                </View>
                <View>
                    {/* {this.state.usuarios.map(usuario => {
                        <View key={usuario._id}>
                            <Text>{JSON.stringify(usuario)}</Text>
                        </View>
                    })} */}
                    <Text>{JSON.stringify(this.state.usuarios)}</Text>
                </View>
                {/* <Button
                    title = 'Login'
                    onPress = {() => this.props.navigation.navigate('Login')}
                />
                <Button
                    title = 'Cadastro'
                    onPress = {() => this.props.navigation.navigate('Cadastro')}
                /> */}
                <View style={{ marginTop: 50, marginBottom: 50, }}>
                    <Button
                        title = 'ATT API'
                        onPress = {this.clickAttApi}
                    />
                </View>
                <Button
                    title = 'Login'
                    onPress = {() => this.props.navigation.navigate('Auth')}
                />
            </ScrollView>
        )
    }
}