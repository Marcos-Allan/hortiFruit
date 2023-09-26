import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './style'

export default function LoginGeral() {

    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.register}>
                <Text style={styles.registerText}>Login</Text>
                <Icon style={styles.registerIcon} name='user' />
            </View>

            <Text style={styles.text}>Olá faça login com seu número de telefone ou e-mail casa possua uma conta</Text>

            <Image
                style={styles.img}
                source={require('../../../imgs/personal 1.png')}
                />

            <Text style={styles.destaque}>Adicione o seu número de telefone ou e-mail</Text>

            <TextInput
                style={styles.inputTexto}
                placeholder='ex: 123456789 / seuemail@gmail.com'
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigate('LoginEfetuado')
                }}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}