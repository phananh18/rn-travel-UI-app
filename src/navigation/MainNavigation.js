import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../components/Home'
import Liked from '../components/Liked'
import Profile from '../components/Profile'
import Detail from '../components/Detail'

import Colors from '../assets/colors/Colors'

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.orange,
                tabBarInactiveTintColor: Colors.gray,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
                headerShown:false
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' size={32} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Liked'
                component={Liked}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='heart' size={32} color={color} />
                    ),
                    tabBarBadge:10,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account' size={32} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown:false}} />
            <Stack.Screen name='Detail' component={Detail} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default MainNavigation;

const styles = StyleSheet.create({

})
