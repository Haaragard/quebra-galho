import { StyleSheet } from 'react-native';

export const stylesMenu = {
    backgroundColor: '#1AA3FF',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export const styles = StyleSheet.create({
    appView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appHeader: {
        margin: 0,
        backgroundColor: '#000',
        height: 50,
        marginBottom: 10,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentScrollView: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    groupText: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        width: '70%',
        textAlign: 'left',
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
        flex: 1,
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
        color: '#4A4A4A',
    },
    borderInputText: {
        height: 40,
        borderWidth: 1,
        borderColor: '#5F5F5F',
        borderRadius: 5,
        flexDirection: "row",
    },
    inputText: {
        flex: 1,
        fontSize: 14,
        height: '100%',
    },
    btnRightInput: {
        marginTop: 2,
    },
    btGroup: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    btSubmit: {
        flex: 1,
        width: 200,
    },
    btCancel: {

    },
    btClear: {

    },
});

export const colors = {
    placeHolderTextColor: '#C1C1C1',
};

export const drawerStyles = StyleSheet.create({
    container: {

    },
    header: {

    },
    content: {

    },
});