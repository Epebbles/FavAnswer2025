import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CurrentAnswer from './DummyData/CurrentAnswer';

const MyAnswer = () => {
    const [userAnswer, setUserAnswer] = useState('loading');
    const [voteCount, setVoteCount] = useState(0);

    useEffect(() => {
        setUserAnswer(CurrentAnswer.answer);
        setVoteCount(CurrentAnswer.votes);
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Answer</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.left}>
                    <View style={styles.placementContainer}>
                        <Text style={styles.placement}>14</Text>
                    </View>
                </View>
                <View style={styles.center}>
                    <Text style={styles.answer}>{userAnswer}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.votes}>{voteCount} votes</Text>
                </View>
            </View>
        </View>
    );
};

export default MyAnswer;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e8f4ff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#0d90fc',
        borderTopWidth: 2,
        borderBottomColor: '#0d90fc',
        borderBottomWidth: 2,
        width: '100%',
    },
    header : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 18,
    },
    details : {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    left : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placementContainer : {
        backgroundColor: '#0d90fc',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    placement : {
        color: 'white',
        fontSize: 22,
    },
    center : {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    answer : {
        fontSize: 20,
        fontWeight: '500',
    },
    right : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    votes : {

    },
});
