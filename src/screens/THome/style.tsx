import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
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
    },
    propaganda: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    propagandaText: {
        textAlign: 'left',
        fontSize: 18,
    },
    propagandaImg: {
        marginLeft: 12,
        width: 20,
        height: 20,
    },
    card: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardImg:{
        width: '40%',
        backgroundColor: 'red',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
    },
    produtoImg: {
        width: '72%',
        height: '80%',
    },
    cardIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'blue',
        width: 36,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 6,
    },
    favoriteIcon: {
        width: 18,
        height: 18,
    },
    cardInfo: {
        width: '60%',
        paddingLeft: 14,
        backgroundColor: 'transparent',
    },
    produtoInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 4,
    },
    titleProduto: {
        fontWeight: 'bold',
    }, 
    starIcon: {
        width: 14,
        height: 14,
        marginLeft: 8,
        marginRight: 4,
    },
    avaliationProduto: {
        fontSize: 14,
        color: '#FFBB56',
    },
    textDesconto: {
        color: '#a3a3a3',
    },
    textPrice: {
        fontSize: 20,
    }
})