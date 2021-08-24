import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './context/UserContext'

const Stack = createStackNavigator()

export default function App() {
    return (
        <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            <UsersProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="UserList"
                        screenOptions={screenOptions}>
                        <Stack.Screen 
                            name="UserList"
                            component={UserList}
                            options={({ navigation }) =>{
                                return {
                                    title: 'Lista de Usuários',
                                    headerRight: () => (
                                        <Button 
                                            onPress={() => navigation.navigate("UserForm")}
                                            type="clear"
                                            icon={<Icon name="add" size={25} color='white' />}
                                        />
                                    )
                                }
                            }}
                        />
                        <Stack.Screen 
                            name="UserForm"
                            component={UserForm}
                            options={{
                                title: "Formulário de Usuários"
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </UsersProvider>
        </SafeAreaView>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#4B0082'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}