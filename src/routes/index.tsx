import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginEfetuado from '../screens/LoginEfetuado'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Details from '../screens/Details'
import LoginEmail from '../screens/LoginEmail'

const Stack = createNativeStackNavigator()

declare global {
    namespace ReactNavigation {
        interface RootPAramList {
            Home : undefined;
            Profile: undefined;
            Details: {
                id: string;
            }
        }
    }
}

export const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Details' component={Details} />
                <Stack.Screen name='LoginEfetuado' component={LoginEfetuado} />
                <Stack.Screen name='LoginEmail'component={LoginEmail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}