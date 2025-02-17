import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react';

const CurrentLeader = ({place, name, image, answer, votes}) => {
    const [placement, setPlacement] = useState('loading...');
    const [userName, setUserName] = useState('loading...');
    const [userImage, setUserImage] = useState('loading...');
    const [userAnswer, setUserAnswer] = useState('loading...');
    const [voteCount, setVoteCount] = useState('loading...');

    useEffect(() => {
        setPlacement(place);
        setUserName(name);
        setUserImage(image);
        setUserAnswer(answer);
        setVoteCount(votes);
    }, [name, image, answer, votes]);


    return (
        <>
            <View style={styles.hr}/>
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.placeContainer}>
                        <Text style={styles.place}>{placement}</Text>
                    </View>
                </View>
                <View style={styles.center}>
                    <View style={styles.cLeft}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.image} source={userImage}/>
                        </View>
                    </View>
                    <View style={styles.cRight}>
                        <View style={styles.rTop}>
                            <Text style={styles.answer}>{userAnswer}</Text>
                        </View>
                        <View style={styles.rBottom}>
                            <Text style={styles.name}>{userName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.votes}>{voteCount} Votes</Text>
                </View>
            </View>
            <View style={styles.hr}/>
        </>
    );
};

export default CurrentLeader;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    hr : {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    left : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeContainer : {
        backgroundColor: '#0d90fc',
        height: 35,
        width: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    place : {
        fontSize: 22,
        color: 'white',
    },
    center : {
        flex: 6,
        flexDirection: 'row',
    },
    cLeft : {
        flex: 1,
    },
    imgContainer : {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#f36b26',
    },
    image : {
        height: '100%',
        width: '100%',
    },
    cRight : {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    rTop : {
        flex: 1,
        justifyContent: 'center',
    },
    answer : {
        fontSize: 16,
        fontWeight: '500',
    },
    rBottom : {
        flex: 1,
        justifyContent: 'center',
    },
    name : {

    },
    right : {
        flex: 2,
    },
    votes : {

    },
});
