import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image
                        style={styles.fotoPerfil}
                        source={{uri: this.props.foto.urlPerfil}}
                        // source={require('../resources/img/alust.png')}
                    />
                    <Text style={styles.nomePerfil}>{this.props.foto.loginUsuario}</Text>
                    {/* <Text style={styles.nomePerfil}>Alust</Text> */}
                </View>
                <Image
                    style={styles.foto}
                    source={{uri: this.props.foto.urlFoto}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    fotoPerfil: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    nomePerfil: {
        marginLeft: 10
    },
    foto: {
        height: width,
        width: width
    }
});