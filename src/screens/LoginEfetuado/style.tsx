import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bolder',
        fontSize: 36,
        marginBottom: 20,
        color: '#7CD92B',
    },
    img: {
        width: 300,
        height: 300,
    },
    btn: {
        width: '80%',
        backgroundColor: '#7CD92B',
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 20,
    },
    btnText: {
        color: '#ffffff',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 26,
    }
})