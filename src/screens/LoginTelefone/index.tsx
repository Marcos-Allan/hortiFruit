import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './style'

export default function LoginTelefone() {

    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.register}>
                <Text style={styles.registerText}>Registrar</Text>
                <Icon style={styles.registerIcon} name='user' />
            </View>

            <Text style={styles.text}>Olá crie sua conta abaixo com telefone</Text>

            <Image
                style={styles.img}
                source={require('../../../imgs/personal 1.png')}
                />

            <Text style={styles.destaque}>Adicione o seu número de telefone</Text>

            <TextInput
                style={styles.inputTexto}
                placeholder='1234567890'
            />
            
            <View style={styles.otherLogin}>
                <Text style={styles.otherLoginText}>ou em vez disso: </Text>
                <Text
                    style={styles.otherLoginStronger}
                    onPress={() => {
                        navigate('LoginEmail')
                    }}
                >email</Text>
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigate('LoginEfetuado')
                }}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.enfeite}>
                <View style={styles.hr}></View>
                <Text style={styles.enfeiteText}>OU</Text>
                <View style={styles.hr}></View>
            </View>
            <View style={styles.login}>
                <Text style={styles.loginText}>Ja possui uma conta?</Text>
                <Text
                    style={styles.loginStronger}
                    onPress={() => {
                        navigate('Home')
                    }}
                >Login</Text>
            </View>
            
        </View>
    )
}