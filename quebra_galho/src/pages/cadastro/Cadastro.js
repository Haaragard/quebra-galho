import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';

import { styles, formStyles, colors } from '../../styles/DefaultStyles';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNome: '',
            inputEmail: '',
            inputCpf: '',
            inputSenha: '',
            inputConfirmarSenha: '',
        };
    }
    static navigationOptions = {
        title: 'Cadastro',
    };

    render() {
        return (
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.contentScrollView}>
                    <View style={styles.groupText}>
                        <Text style={styles.primaryGreatTitle}>Cadastre-se</Text>
                        <Text style={styles.secondaryGreatTitle}>e contrate ou começe seus serviços agora!</Text>
                    </View>
                    <View style={formStyles.form}>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>Nome completo</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= {colors.placeHolderTextColor}
                                    placeholder= 'Nome Completo'
                                    maxLength= {40}
                                    autoCapitalize= 'words'
                                    autoCompleteType= 'name'
                                />
                            </View>
                        </View>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>E-mail</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= {colors.placeHolderTextColor}
                                    placeholder= 'meu.email@quebra-galho.com'
                                    maxLength= {40}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'email'
                                />
                            </View>
                        </View>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>CPF</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= {colors.placeHolderTextColor}
                                    placeholder= '999.999.999-99'
                                    maxLength= {30}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'off'
                                />
                            </View>
                        </View>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>Senha</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= {colors.placeHolderTextColor}
                                    placeholder= '******'
                                    maxLength= {30}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'password'
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={formStyles.inputGroupField}>
                            <Text style={formStyles.labelInput}>Reescreva a senha</Text>
                            <View style={formStyles.borderInputText}>
                                <TextInput
                                    style={formStyles.inputText}
                                    placeholderTextColor= {colors.placeHolderTextColor}
                                    placeholder= '******'
                                    maxLength= {30}
                                    autoCapitalize= 'none'
                                    autoCompleteType= 'password'
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={formStyles.btGroup}>
                            <View style={formStyles.btSubmit}>
                                <Button
                                    title= 'Criar conta'
                                    onPress= {() => console.warn('Realizando Cadastro.')}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}