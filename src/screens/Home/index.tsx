import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const { navigate } = useNavigation()

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text> Tela Home </Text>
            
            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Profile')
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1, textAlign: 'center' }}
                >Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Details', {
                        id: 'your father',
                    })
                }}
            >
                <Text
                    style={{ color: '#ffffff', letterSpacing: 1,  textAlign: 'center' }}
                >Detalhes</Text>
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