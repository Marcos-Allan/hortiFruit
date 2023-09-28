import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'

export default function THome() {

    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>

            {/* MENU DE PESQUISA */}
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

            {/* TITULO DO APP */}
            <Text
                style={styles.name}
            >GreenMarket</Text>

            {/* TEXO DE PROPAGANDA */}
            <Text
                style={styles.title}
            >
                1 em vendas de naturais!
            </Text>
            
            {/* SUBMENU DE CATEGORIAS */}
            <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={true} horizontal style={styles.categories}>
                <Text style={styles.itemSMenu}>frutas</Text>
                <Text style={[styles.itemSMenu, styles.itemSMenuActive]}>todos</Text>
                <Text style={styles.itemSMenu}>verduras</Text>
                <Text style={styles.itemSMenu}>aromáticas</Text>
                <Text style={styles.itemSMenu}>carrinho</Text>
            </ScrollView>
            
            {/* TEXTO DE MAIS VENDIDOS */}
            <View style={styles.propaganda}>
                <Text
                    style={styles.propagandaText}
                >Mais vendidos</Text>
                <Image
                    style={styles.propagandaImg}
                    source={require('../../../imgs/arrowDown.png')}
                />
            </View>
            
            {/* CARDS PRODUTOS */}
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigate('TProduto', {
                        img: 'alface.png',
                    })
                }}
            >
                <View style={styles.cardImg}>
                    <Image
                        style={styles.produtoImg}
                        source={require('../../../imgs/alface.png')}
                    />
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.titleProduto}>Alface Lisa</Text>
                        <Image
                            style={styles.starIcon}
                            source={require('../../../imgs/Star.png')}
                        />
                        <Text style={styles.avaliationProduto}>5,0</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.textDesconto}>40% de desconto no atacado</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                    <Text style={styles.textPrice}>0,90 R$ - unidade</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigate('TProduto', {
                        img: 'tomate.png',
                    })
                }}
            >
                <View style={styles.cardImg}>
                    <Image
                        style={styles.produtoImg}
                        source={require('../../../imgs/tomate.png')}
                    />
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.titleProduto}>Tomate</Text>
                        <Image
                            style={styles.starIcon}
                            source={require('../../../imgs/Star.png')}
                        />
                        <Text style={styles.avaliationProduto}>4,8</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.textDesconto}>10% de desconto, mais frete grátis</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                    <Text style={styles.textPrice}>0,50 R$ - unidade</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigate('TProduto', {
                        img: 'maca.png',
                    })
                }}
            >
                <View style={styles.cardImg}>
                    <Image
                        style={styles.produtoImg}
                        source={require('../../../imgs/maca.png')}
                    />
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.titleProduto}>MAca</Text>
                        <Image
                            style={styles.starIcon}
                            source={require('../../../imgs/Star.png')}
                        />
                        <Text style={styles.avaliationProduto}>4,3</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.textDesconto}>30% de desconto no Kg</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                    <Text style={styles.textPrice}>4,50 R$ - Kg</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigate('TProduto', {
                        img: 'beringela.png',
                    })
                }}
            >
                <View style={styles.cardImg}>
                    <Image
                        style={styles.produtoImg}
                        source={require('../../../imgs/beringela.png')}
                    />
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.titleProduto}>Beringela</Text>
                        <Image
                            style={styles.starIcon}
                            source={require('../../../imgs/Star.png')}
                        />
                        <Text style={styles.avaliationProduto}>4,0</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.textDesconto}>5% de desconto no Kg</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                    <Text style={styles.textPrice}>5,00 R$ - Kg</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigate('TProduto', {
                        img: 'cebola.png',
                    })
                }}
            >
                <View style={styles.cardImg}>
                    <Image
                        style={styles.produtoImg}
                        source={require('../../../imgs/cebola.png')}
                    />
                    <View style={styles.cardIcon}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.titleProduto}>Cebola</Text>
                        <Image
                            style={styles.starIcon}
                            source={require('../../../imgs/Star.png')}
                        />
                        <Text style={styles.avaliationProduto}>4,9</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                        <Text style={styles.textDesconto}>15% de desconto no Kg</Text>
                    </View>
                    <View style={styles.produtoInfo}>
                    <Text style={styles.textPrice}>7,60 R$ - Kg</Text>
                    </View>
                </View>
            </TouchableOpacity>
                
        </View>
    )
}