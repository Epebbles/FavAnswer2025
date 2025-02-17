import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WinnerPopUp = ({visible, cancel, name, question, answer, votes, image, date}) => {
    const [isVisible, setIsVisible] = useState();
    const [userName, setUserName] = useState();
    const [qod, setQod] = useState();
    const [userAnswer, setUserAnswer] = useState();
    const [voteCount, setVoteCount] = useState();
    const [userImage, setUserImage] = useState();


    useEffect(() => {
        setIsVisible(visible);
        setUserName(name);
        setQod(question);
        setUserAnswer(answer);
        setVoteCount(votes);
        setUserImage(image);
    }, [visible]);

    const options = {
        'year':'numeric',
        'month' : 'short',
        'day' : 'numeric',
    };

    const handleCancel = () => {
        cancel();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={handleCancel}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.back}>
                            <TouchableOpacity activeOpacity={0.4} onPress={handleCancel}>
                                <Text style={styles.backButton}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>{date.toLocaleString('en-US', options)}</Text>
                        <View style={styles.space}/>
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.qodContainer}>
                        <Text style={styles.question}>{qod}</Text>
                    </View>
                    <View style={styles.trophy}>
                        <Ionicons name="trophy" size={65} color="#f36b26"/>
                    </View>
                    <View style={styles.response}>
                        <Text style={styles.answer}>{userAnswer}</Text>
                        <Text style={styles.vote}>{voteCount} Votes</Text>
                    </View>
                    <View style={styles.profile}>
                        <View style={styles.left}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.image} source={userImage} />
                            </View>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.name}>{userName}</Text>
                            <Text style={styles.text}>favAnimal Here?</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default WinnerPopUp;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        paddingTop: '35%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    view: {
        margin: 20,
        width: '90%',
        minHeight: '48%',
        backgroundColor: 'white',
        borderRadius: 7,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    hr : {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    header : {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
    },
    back : {
        flex: 1,
        marginLeft: 0,
        marginRight: 'auto',
    },
    backButton : {
        fontSize: 18,
        color: '#0d90fc',
    },
    title : {
        textAlign: 'center',
        justifyContent: 'center',
        flex: 2,
        fontSize: 18,
        fontWeight: '500',
    },
    space : {
        flex: 1,
    },
    qodContainer : {
        flex: 0.3,
        marginTop: 7,
        paddingLeft: 25,
        paddingRight: 25,
    },
    question : {
        fontSize: 24,
        fontWeight: '500',
    },
    trophy : {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    response : {
        flex: 0.3,
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    answer : {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    vote : {
        textAlign: 'center',
        fontSize: 16,
    },
    profile : {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 15,
    },
    left : {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer : {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f36b26',
        overflow: 'hidden',
    },
    image : {
        height: '100%',
        width: '100%',
    },
    right : {
        flex: 3,
    },
    name : {
        fontSize: 22,
        fontWeight: '500',
    },
    text : {
        fontSize: 18,
    },
});
