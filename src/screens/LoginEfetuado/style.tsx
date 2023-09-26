import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#7CD92B',
    },
    img: {
        width: 300,
        height: 300,
    },
    btn: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#7CD92B',
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 8,
    },
    btnText: {
        color: '#ffffff',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 26,
    }
})