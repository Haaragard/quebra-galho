import React from 'react';

import { View, Button, Text } from 'react-native';
import {
    Container, Title, Form, Input, Submit,
} from './styles';

const Home = ({ navigation }) => (
    <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "row", }}>
            <Button
                color="#1AA3FF"
                title="Categorias"
                onPress={() => navigation.navigate('Categorias') }
            />
            <Button
                color="#1AA3FF"
                title="Login"
                onPress={() => navigation.navigate('Login') }
            />
            <Button
                color="#1AA3FF"
                title="Cadastrar"
                onPress={() => navigation.navigate('Cadastrar') }
            />
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home ;D</Text>
            <Button 
                title="Ir para About"
                onPress={() => navigation.navigate('About') }
            />
        </View>
    </Container>
);

Home.navigationOptions = {
  title: 'Home',
}

export default Home;