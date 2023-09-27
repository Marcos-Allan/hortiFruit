import { View, Text, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'

export default function THome() {

    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.menu}>
                <Image
                    style={styles.menuImage}
                    source={require('../../../imgs/arrowDown.png')}
                    />
                <Image
                    style={styles.menuImage}
                    source={require('../../../imgs/lupa.png')}
                    />
            </View>
            <Text
                style={styles.name}
            >GreenMarket</Text>
            <Text
                style={styles.title}
            >1 em vendas de naturais!</Text>
            <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={true} horizontal>
                <Text style={styles.itemSMenu}>frutas</Text>
                <Text style={[styles.itemSMenu, styles.itemSMenuActive]}>todos</Text>
                <Text style={styles.itemSMenu}>verduras</Text>
                <Text style={styles.itemSMenu}>aromáticas</Text>
                <Text style={styles.itemSMenu}>carrinho</Text>
                <Text style={styles.itemSMenu}>dooi</Text>
                <Text style={styles.itemSMenu}>1</Text>
                <Text style={styles.itemSMenu}>2</Text>
                <Text style={styles.itemSMenu}>3</Text>
                <Text style={styles.itemSMenu}>4</Text>
                <Text style={styles.itemSMenu}>5</Text>
                <Text style={styles.itemSMenu}>6</Text>
                <Text style={styles.itemSMenu}>7</Text>
                <Text style={styles.itemSMenu}>8</Text>
                <Text style={styles.itemSMenu}>9</Text>
                <Text style={styles.itemSMenu}>10</Text>
                <Text style={styles.itemSMenu}>11</Text>
                <Text style={styles.itemSMenu}>12</Text>
                <Text style={styles.itemSMenu}>13</Text>
                <Text style={styles.itemSMenu}>14</Text>
                <Text style={styles.itemSMenu}>15</Text>
                <Text style={styles.itemSMenu}>16</Text>
                <Text style={styles.itemSMenu}>17</Text>
                <Text style={styles.itemSMenu}>18</Text>
                <Text style={styles.itemSMenu}>19</Text>
            </ScrollView>
            <View>
                <Text>Mais vendidos</Text>
                <Image
                    style={styles.menuImage}
                    source={require('../../../imgs/arrowDown.png')}
                />
            </View>
        </View>
    )
}