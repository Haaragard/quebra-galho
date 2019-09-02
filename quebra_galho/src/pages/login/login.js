import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Button, Text } from 'react-native';
import {
    Container, Title, Form, Input, Submit,
} from './styles';

const Login = () => (
    <Container>
        <Title>Entre na sua conta!</Title>

        <Form>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholde="Login..."
            />
            <Submit onPress={() => {}}>

            </Submit>
        </Form>
    </Container>
);

Login.navigationOptions = {
  title: 'Login',
}

export default Login;