import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import Colors from '../assets/colors/Colors'
import Feather from 'react-native-vector-icons/Feather'
import DiscoverData from '../assets/data/DiscoverData'
import Entypo from 'react-native-vector-icons/Entypo'

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.menuWrapper}>
                    <Feather name='menu' size={30} />
                    <Image source={require('../assets/images/person.png')} style={styles.menuImage} />
                </View>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoriesText, { color: Colors.orange }]}>All</Text>
                        <Text style={styles.discoverCategoriesText}>Destinations</Text>
                        <Text style={styles.discoverCategoriesText}>Cities</Text>
                        <Text style={styles.discoverCategoriesText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={DiscoverData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{item:item})}>
                                        <ImageBackground
                                            source={item.imageBig}
                                            style={styles.discoverItem}
                                            imageStyle={styles.discoverImage}
                                        >
                                            <Text style={styles.discoverItemTitle}>{item.title}</Text>
                                            <View style={styles.discoverLocationWrapper}>
                                                <Entypo name='location-pin' size={15} color={Colors.white} />
                                                <Text style={styles.discoverlocationText}>{item.location}</Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                )
                            }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: Colors.white,
    },
    menuWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuImage: {
        borderRadius: 10,
    },
    discoverWrapper: {
        paddingTop: 20,
    },
    discoverTitle: {
        paddingHorizontal: 20,
        fontSize: 32,
        fontFamily: 'Lato-Bold',
    },
    discoverCategoriesWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    discoverCategoriesText: {
        fontSize: 16,
        fontFamily: 'Lato-SemiBold',
        color: Colors.gray,
    },
    discoverItemsWrapper:{
        marginTop:10,
    },
    discoverItem: {
        marginRight:20,
        justifyContent:'flex-end',
        width:170,
        height:250,
        paddingHorizontal:15,
        paddingVertical:15,
    },
    discoverImage:{
        borderRadius:20,
    },
    discoverItemTitle:{
        fontSize:18,
        fontFamily:'Lato-Bold',
        color:Colors.white,
    },
    discoverLocationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:8,
    },
    discoverlocationText:{
        color:Colors.white,
        fontFamily:'Lato-Bold',
    }
})
