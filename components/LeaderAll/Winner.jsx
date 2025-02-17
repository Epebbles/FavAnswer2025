import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WinnerPopUp from './WinnerPopUp';

const Winner = ({name, question, answer, votes, image, date}) => {
    const [userName, setUserName] = useState();
    const [qod, setQod] = useState();
    const [userAnswer, setUserAnswer] = useState();
    const [voteCount, setVoteCount] = useState();
    const [userImage, setUserImage] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setUserName(name);
        setQod(question);
        setUserAnswer(answer);
        setVoteCount(votes);
        setUserImage(image);
    },[name, question, answer, image]);

    const options = {
        day: '2-digit',
    };

    return (
        <>
            <View style={styles.hr}/>
            <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <View style={styles.dayContainer}>
                            <Text style={styles.day}>{date.toLocaleString('en-US', options)}</Text>
                        </View>
                    </View>
                    <View style={styles.center}>
                        <View style={styles.cTop}>
                                <Text style={styles.question}>{qod}</Text>
                        </View>
                        <View style={styles.cBottom}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.image} source={userImage}/>
                            </View>
                            <Text style={styles.name}>{userName}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.rTop} />
                        <View style={styles.rBottom}>
                            <Text style={styles.votes}>{voteCount} votes</Text>
                        </View>
                    </View>
                    <View style={styles.arrow}>
                        <MaterialIcons name="keyboard-arrow-right" size={25} color="#0d90fc"/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.hr}/>
            <WinnerPopUp visible={visible} cancel={() => setVisible(false)} name={userName} question={qod} answer={userAnswer} votes={voteCount} image={userImage} date={date}/>
        </>
    );
};

export default Winner;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    hr :{
        width: '100%',
        backgroundColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    left : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayContainer : {
        backgroundColor: '#f36b26',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    day : {
        fontSize: 18,
        color: 'white',
    },
    center : {
        flex: 6,
        marginLeft: 7,
    },
    cTop : {
        flex: 1,
    },
    question: {
        fontSize: 18,
        fontWeight: '500',
    },
    cBottom : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgContainer : {
        height: 40,
        width: 40,
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
    name : {
        marginLeft: 10,
        fontSize: 15,
    },
    right : {
        flex: 1,
    },
    rTop : {
        flex: 1,
        justifyContent: 'center',
    },
    rBottom : {
        flex: 1,
        justifyContent: 'center',
    },
    votes : {

    },
    arrow : {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
