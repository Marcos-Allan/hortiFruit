import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'

import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

type DetailsParamProps = {
    img: string;
}

export default function TProduto() {

    const { navigate } = useNavigation()

    const { img } = useRoute().params as DetailsParamProps

    return(
        <View style={styles.container}>
            <View
                style={styles.produto}
            >
                <Image
                    style={styles.imgPrev}
                    source={require('../../../imgs/arrowDown.png')}
                    />
                <Image
                    style={styles.imgProduto}
                    source={require(`../../../imgs/${img}`)}
                />
            </View>
            
            <View
                style={styles.padin}
            >    
                <View style={styles.infoProduto1}>
                    <Text style={styles.nameProduto}>ALface Lisa</Text>
                    <Text style={styles.priceProduto}>0,90 R$- Uni</Text>
                </View>
                <View style={styles.infoProduto2}>
                    <Image
                        style={styles.starICon}
                        source={require('../../../imgs/Star.png')}
                    />
                    <Text style={styles.avaliation}>5,0</Text>
                </View>
                
                <Text
                    style={styles.text}
                >Selecione a quantidade</Text>
                <View style={styles.qtdsOptions}>
                    <TouchableOpacity
                        style={styles.optionQtd}
                    >
                        <Text
                            style={styles.textOption}
                        >5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionQtd, styles.optionSelected]}
                    >
                        <Text
                            style={[styles.textOption, styles.textOptionSelected]}
                        >10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionQtd}
                    >
                        <Text
                            style={styles.textOption}
                        >15</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.descriptionProduct}
                >Descrição sobre tudo</Text>
                
                <Text
                    style={styles.descriptionText}
                >o alface lisa é uma variedade versatil e nutritiva de alface, valorizada por sua textura macia, sabor suave e beneficios á saúde
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.blockFavorite}>
                        <Image
                            style={styles.favoriteIcon}
                            source={require('../../../imgs/heart.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnComprar}
                    >
                        <Text
                            style={styles.textComprar}
                        >Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}