import { View, Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

type DetailsParamProps = {
    id: string;
}

export default function Details() {

    const { navigate } = useNavigation()

    const { id } = useRoute().params as DetailsParamProps

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text> Tela Details </Text>
            <Text> ID Product: "{id}" </Text>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Home')
                }}
            >
                <Text style={{ color: '#ffffff', letterSpacing: 1,  textAlign: 'center' }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Profile')
                }}
            >
                <Text style={{ color: '#ffffff', letterSpacing: 1,  textAlign: 'center' }}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('LoginEfetuado')
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1, textAlign: 'center' }}
                >Login Efetuado</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('LoginEmail')
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1, textAlign: 'center' }}
                >Login Email</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('LoginTelefone')
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1, textAlign: 'center' }}
                >Login Telefone</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('LoginGeral')
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1, textAlign: 'center' }}
                >Login Geral</Text>
            </TouchableOpacity>
        </View>
    )
}