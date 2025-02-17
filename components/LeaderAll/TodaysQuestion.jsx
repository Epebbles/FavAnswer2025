import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Status from '../Status';
import VoteOrPlayButton from './VoteOrPlayButton';

const TodaysQuestion = ({navigation}) => {
    const [totalTime, setTotalTime] = useState(100);
    const [timeUsed, setTimeUsed] = useState(80);
    const [color, setColor] = useState();

    // added a color change depending on how much time is left for todays quiz
    useEffect(() => {
        const current = timeUsed / totalTime;
        current <= 0.80 ?
            setColor('#54cb2b') :
        current > 0.80 && current <= 0.90 ?
            setColor('#eed202') :
            setColor('#ff0f0f');
    }, [timeUsed]);

    const handleNavigate = () => {
        navigation.navigate('Today');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Today</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.left}/>
                <View style={styles.center}>
                    <View style={styles.top}>
                        <Text style={styles.question}>What is your fav holiday?</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text>125 Votes</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.4} onPress={handleNavigate}>
                    <View style={styles.right}>
                            <MaterialIcons name="keyboard-arrow-right" size={40} color="#0d90fc"/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.voteOrPlay}>
                <View style={styles.vote}>
                    <VoteOrPlayButton type="Vote" navigation={navigation}/>
                </View>
                <View style={styles.play}>
                    <VoteOrPlayButton type="Play" navigation={navigation}/>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.fTop}>
                    <View style={[styles.dot, {backgroundColor: color}]}/>
                    <Text style={[styles.running, {color: color}]}>Running</Text>
                </View>
                <View style={styles.fBottom}>
                    <View style={styles.fBLeft}>
                        <StatusBar hidden/>
                        <Status height={5} backColor="lightgray" statusColor={color} current={timeUsed} total={totalTime}/>
                    </View>
                    <View style={styles.fBRight}>
                        <Text>2 hrs 15 min</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TodaysQuestion;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e8f4ff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#0d90fc',
        borderTopWidth: 2,
        borderBottomColor: '#0d90fc',
        borderBottomWidth: 2,
    },
    header : {
        flex: 0.25,
        width: '100%',
    },
    title : {
        textAlign: 'center',
    },
    details : {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left : {
        flex: 1,
    },
    center : {
        flex: 6,
    },
    top : {
        flex: 0.5,
        justifyContent: 'center',
    },
    question : {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    bottom : {
        flex: 0.5,
        alignItems: 'center',
    },
    fCenter : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 4,
    },
    dot : {
        height: 7,
        width: 7,
        borderRadius: 50,
        marginRight: 6,
    },
    cRight : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right : {
        flex: 0.6,
    },
    voteOrPlay : {
        flex: 0.3,
        flexDirection: 'row',
        width: '100%',
    },
    play: {
        flex: 1,
        paddingLeft: 8,
    },
    vote : {
        flex: 1,
        paddingRight: 8,
    },
    footer : {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fTop : {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fBottom : {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fBLeft : {
        flex: 3,
        justifyContent: 'center',
    },
    fBRight : {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
    },
});
