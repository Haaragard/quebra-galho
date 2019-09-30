import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles, formStyles } from '../../styles/DefaultStyles';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={styles.content}>
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
                                placeholder= 'meu.email@meuemail.com'
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
                                placeholder= '******'
                                maxLength= {30}
                                autoCapitalize= 'none'
                                autoCompleteType= 'password'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.groupText}>
                    <Text>Ainda não possui uma conta?</Text>
                    <Text
                        style={styles.linksPage}
                        onPress = {() => this.props.navigation.navigate('Cadastro')}
                    >Cadastre-se já!</Text>
                </View>
                <View style={formStyles.btGroup}>
                    <Button
                        title= 'Entrar'
                        onPress= {() => console.log('Realizando Login.')}
                    />
                </View>
            </View>
        )
    }
}