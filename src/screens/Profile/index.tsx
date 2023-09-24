import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {

    const { navigate } = useNavigation()

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text> Tela Profile </Text>
            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Home')
                }}
            >
                <Text style={{ color: '#ffffff', letterSpacing: 1,  textAlign: 'center' }} >Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 , width: 100, }}
                onPress={() => {
                    navigate('Details', {
                        id: 'your mother',
                    })
                }}
            >
                <Text style={{ color: '#ffffff', letterSpacing: 1,  textAlign: 'center' }} >Details</Text>
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
        </View>
    )
}