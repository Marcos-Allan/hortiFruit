import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    menu: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    menuImage: {
        width: 35,
        height: 35,
    },
    name: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
    },
    title: {
        textAlign: 'left',
        paddingRight: '40%',
        marginTop: 30,
        fontSize: 31,
        fontWeight: 'bold',
    },
    categories: {
        marginTop: 30,
        maxHeight: 80,
    },
    itemSMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginHorizontal: 4,
        backgroundColor: '#F4F4F4',
        color: '#00000',
        borderRadius: 8,
        textAlign: 'center',
        height: 40,
    },
    itemSMenuActive:{
        backgroundColor: '#5DB610',
        color: '#FFFFFF',
    }
})