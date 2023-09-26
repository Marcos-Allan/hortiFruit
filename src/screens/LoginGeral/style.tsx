import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
    },
    register: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    registerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    registerIcon: {
        marginLeft: 20,
        fontSize: 22,
        color: '#000000',
    },
    text: {
        marginTop: 5,
        fontWeight: '500',
        fontSize: 22,
        color: '#bcbcbc',
    },
    inputTexto: {
        marginTop: 35,
        backgroundColor: '#ffffff',
        paddingVertical: 14,
        paddingHorizontal: 14,
        width: '100%',
        borderRadius: 8,
    },
    img: {
        marginTop: 50,
        width: 280,
        height: 280,
    },
    destaque:{
        textAlign: 'center',
        marginTop: 5,
        color: '#7CD92B',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    btn: {
        marginTop: 35,
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
        fontSize: 20,
    },
    otherLogin: {
        marginTop: 5,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otherLoginText: {
        fontSize: 16,
    },
    otherLoginStronger: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    enfeite:{
        marginTop: 35,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    hr: {
        width: '36%',
        height: 2,
        backgroundColor: '#bcbcbc',
    },
    enfeiteText: {
        fontSize: 13,
        marginHorizontal: 12,
    },
    login: {
        marginVertical: 25,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginText: {
        fontSize: 16,
    },
    loginStronger: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})