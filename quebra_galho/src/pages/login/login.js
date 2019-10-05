import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Button, AsyncStorage } from 'react-native';

import { styles, formStyles } from '../../styles/DefaultStyles';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    };
      
    handlePasswordChange = (password) => {
        this.setState({ password });
    };
      
    handleCreateAccountPress = () => {
        this.props.navigation.navigate('Cadastro');
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.contentScrollView}>
                <View style={styles.groupText}>
                        <Text style={styles.primaryGreatTitle}>Conecte-se</Text>
                        <Text style={styles.secondaryGreatTitle}>e contrate ou começe seus serviços agora!</Text>
                    </View>
                    <View style={formStyles.form}>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>E-mail:</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= '#C1C1C1'
                                    placeholder= 'meu.email@quebra-galho.com'
                                    maxLength= {40}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'email'
                                />
                            </View>
                            
                        </View>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>Senha:</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= '#C1C1C1'
                                    placeholder= '******'
                                    maxLength= {30}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'password'
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.groupText}>
                        <Text style={styles.normalText}>Ainda não possui uma conta?</Text>
                        <Text
                            style={styles.linksPage}
                            onPress = {this.handleCreateAccountPress}
                        >Cadastre-se já!</Text>
                    </View>
                    <View style={formStyles.btGroup}>
                        <View style={formStyles.btSubmit}>
                            <Button
                                title= 'Entrar'
                                onPress= {() => this._signInAsync()}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}