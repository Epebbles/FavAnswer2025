import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HowToPlay = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>How to Play</Text>
            </View>
            <View style={styles.step}>
                <View style={styles.top}>
                    <View style={styles.tLeft}>
                        <View style={styles.placeContainer}>
                            <Text style={styles.place}>1</Text>
                        </View>
                    </View>
                    <View style={styles.tRight}>
                        <Text style={styles.textHeader}>What is Lorem Ipsum?</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bLeft} />
                    <View style={styles.bRight}>
                        <Text style={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit ad, distinctio nulla eligendi nostrum odit voluptatibus natus harum esse voluptatum quidem dolorum.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.step}>
                <View style={styles.top}>
                    <View style={styles.tLeft}>
                        <View style={styles.placeContainer}>
                            <Text style={styles.place}>2</Text>
                        </View>
                    </View>
                    <View style={styles.tRight}>
                        <Text style={styles.textHeader}>What is Lorem Ipsum?</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bLeft} />
                    <View style={styles.bRight}>
                        <Text style={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit ad, distinctio nulla eligendi nostrum odit voluptatibus natus harum esse voluptatum quidem dolorum.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.step}>
                <View style={styles.top}>
                    <View style={styles.tLeft}>
                        <View style={styles.placeContainer}>
                            <Text style={styles.place}>3</Text>
                        </View>
                    </View>
                    <View style={styles.tRight}>
                        <Text style={styles.textHeader}>What is Lorem Ipsum?</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bLeft} />
                    <View style={styles.bRight}>
                        <Text style={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit ad, distinctio nulla eligendi nostrum odit voluptatibus natus harum esse voluptatum quidem dolorum.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HowToPlay;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 25,
        paddingRight: 25,
    },
    header : {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 24,
        fontWeight: '500',
    },
    step : {
        flex: 0.2,
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    top : {
        flex: 2,
        flexDirection: 'row',
    },
    tLeft : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeContainer : {
        height: 30,
        width: 30,
        borderRadius: '50%',
        backgroundColor: '#0d90fc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    place : {
        color: 'white',
    },
    tRight : {
        flex: 8,
        justifyContent: 'center',
        marginLeft: 10,
    },
    textHeader : {
        fontSize: 18,
        fontWeight: '500',
    },
    bottom : {
        flex: 5,
        flexDirection: 'row',
    },
    bLeft : {
        flex: 1,
    },
    bRight : {
        flex: 8,
        marginLeft: 10,
    },
    details : {
        fontSize: 15,
    },
});
