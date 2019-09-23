import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Dimensions,
    FlatList,
    StyleSheet
} from 'react-native';

import Post from './components/post';

// import Routes from './routes';

// export default function App() {
//     return (
//         <>
//             
//             {/* <Routes /> */}


//         </>
//     );
// }

const width = Dimensions.get('screen').width;

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
            .then(resposta => resposta.json())
            .then(json => this.setState({fotos: json}))
    }

    render() {

        // const fotos = [
        //     { id: 1, loginUsuario: 'Alust', urlPerfil: 'alust.png', urlFoto: 'foto1.jpg' },
        //     { id: 2, loginUsuario: 'Alust', urlPerfil: 'alust.png', urlFoto: 'foto2.jpg' },
        //     { id: 3, loginUsuario: 'Alust', urlPerfil: 'alust.png', urlFoto: 'foto3.jpg' },
        //     { id: 4, loginUsuario: 'Alust', urlPerfil: 'alust.png', urlFoto: 'foto4.jpg' }
        // ];

        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
                <FlatList
                    // keyExtractor={(item) => item.id.toString()}
                    data={this.state.fotos}
                    // data={fotos}
                    renderItem={ ({item}) =>
                        <Post foto={item}/>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
    },
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