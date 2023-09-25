import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {styles} from './style'

export default function LoginEfetuado() {

    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>
            
            <Image
                style={styles.img}
                source={require('../../../imgs/confete.png')}
                />

            <Text style={styles.text}> Login Efetuado </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigate('Home')
                }}
            >
                <Text style={styles.btnText}>Voltar para o inicio</Text>
            </TouchableOpacity>
        </View>
    )
}