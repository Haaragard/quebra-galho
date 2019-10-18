import React from 'react';
import { View, Text, Image } from 'react-native';
import { drawerStyles } from '../../styles/DefaultStyles';
import Icon from 'react-native-vector-icons/Entypo';


const DrawerContent = () => (
    <View style={drawerStyles.container}>
        <View style={drawerStyles.header}>
            <Text>Header</Text>
            {/* <View style={}></View> */}
            {/* <View style={}></View> */}
            {/* <View style={}></View> */}
        </View>
        <View style={drawerStyles.content}>
            <View>
                <Text>MENU 1</Text>
            </View>
            <View>
                <Text>MENU 2</Text>
            </View>
            <View>
                <Text>MENU 3</Text>
            </View>
            <View>
                <Text>MENU 4</Text>
            </View>
        </View>
    </View>
);

export default DrawerContent;