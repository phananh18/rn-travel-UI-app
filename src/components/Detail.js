import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import Colors from '../assets/colors/Colors'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

const Detail = ({ route, navigation }) => {
    const { item } = route.params
    return (

        <ScrollView showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior='automatic'
        >

            <View style={styles.container}>
                <ImageBackground
                    source={item.imageBig}
                    style={styles.backgroundImage}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon}
                    >
                        <Entypo name='chevron-left' size={40} color={Colors.white} />
                    </TouchableOpacity>

                    <View style={styles.titleWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.locationWrapper}>
                            <Entypo name='location-pin' size={20} color={Colors.white} />
                            <Text style={styles.itemLocation}>{item.location}</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.descriptionWrapper}>
                    <View style={styles.heartWrapper}>
                        <Entypo name='heart' size={35} color={Colors.orange} />
                    </View>
                    <View style={styles.descriptionTextWrapper}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoItems}>
                            <Text style={styles.infoTitle}>PRICE</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>${item.price}</Text>
                                <Text style={styles.infoSubText}>/person</Text>
                            </View>
                        </View>
                        <View style={styles.infoItems}>
                            <Text style={styles.infoTitle}>RATING</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>${item.rating}</Text>
                                <Text style={styles.infoSubText}>/5</Text>
                            </View>
                        </View>
                        <View style={styles.infoItems}>
                            <Text style={styles.infoTitle}>DUARATION</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.duration}</Text>
                                <Text style={styles.infoSubText}> hours</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You booked a trip!!!')}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>

    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: width,
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 30
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 50,
    },
    itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: Colors.white,
    },
    locationWrapper: {
        flexDirection: 'row',
        marginTop: 10,
    },
    itemLocation: {
        marginLeft: 10,
        color: Colors.white,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -25,
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        backgroundColor: Colors.white,
        borderRadius: 50,
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    descriptionTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
    },
    descriptionText: {
        marginTop: 10,
        color: Colors.grayText,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    infoWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
    },
    infoTitle: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        color: Colors.gray
    },
    infoItems: {
        marginRight: 50,
    },
    infoTextWrapper: {
        flexDirection: 'row',
        marginTop: 10,

    },
    infoText: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: Colors.orange,

    },
    infoSubText: {
        fontFamily: 'Lato-Bold',
        color: Colors.gray,
        fontSize: 14,
        alignSelf: 'flex-end'
    },
    buttonWrapper: {
        backgroundColor: Colors.orange,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
        height: 53,
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: Colors.white,
    }
})
