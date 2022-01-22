import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loginButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 300,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    buttonLogo: {
        width: 15,
        aspectRatio: 1,
        marginRight: 5
    },
    buttonTitle: {
        color: 'black',
        fontSize: 13,
        paddingTop: 15,
        paddingBottom: 15
    },
})