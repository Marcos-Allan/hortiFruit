import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Details from '../screens/Details'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}