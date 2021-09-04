import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Detail = ({route,navigation}) => {
    const {item}=route.params
    console.log(item);
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})
