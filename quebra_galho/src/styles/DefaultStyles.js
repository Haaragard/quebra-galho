import { StyleSheet } from 'react-native';

export const stylesMenu = {
    headerStyle: {
        backgroundColor: '#1AA3FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    groupText: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    primaryGreatTitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    secondaryGreatTitle: {
        fontSize: 18,
        width: 260,
        textAlign: 'center',
    },
    linksPage: {
        color: '#80CCFF',
    },
});

export const formStyles = StyleSheet.create({
    form: {
        flex: 2,
        width: '70%',
    },
    inputGroup: {
        flex: 1,
    },
    inputGroupField: {
        flex: 1,
        textAlign: 'left',
        marginBottom: 20,
    },
    labelInput: {
        fontSize: 16,
        marginBottom: 10,
    },
    borderInputText: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    inputText: {
        flex: 1,
        fontSize: 14,
    },
    btGroup: {
        flex: 1,

    },
    btSubmit: {
        flex: 1,
    },
    btCancel: {

    },
    btClear: {

    },
});