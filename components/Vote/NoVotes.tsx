import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';

interface NoVotesProps {
    visible: boolean;
    cancel: () => void;
    navigation: NavigationProp<any>; // Adjust the type based on your navigation stack
  }

const NoVotes: React.FC<NoVotesProps> = ({visible, cancel, navigation}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => cancel()}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <Text style={styles.title}>No Votes Left!</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>You have voted the maximum amount of times allowed in a day</Text>
                        <View style={styles.spaceText}/>
                        <Text style={styles.details}>See who is winning, or come back tomorrow to vote on another question.</Text>
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.footer}>
                        <View style={styles.space}>
                        <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  cancel();
                  navigation.navigate('Leaderboard');
                }}
              >
                <Text style={[styles.nextButton, styles.leaderboardText]}>Results</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={styles.space}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  cancel();
                  navigation.navigate('Play');
                }}
              >
                <Text style={[styles.nextButton, styles.playText]}>Play</Text>
              </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default NoVotes;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    view: {
        width: '75%',
        borderRadius: 16,
        backgroundColor: 'white',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
    },
    back : {
        flex: 1,
    },
    backButton : {
        fontSize: 18,
        color: '#0d90fc',
    },
    title : {
        justifyContent: 'center',
        textAlign: 'center',
        flex: 2,
        fontSize: 20,
        fontWeight: '500',
    },
    detailsContainer : {
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
    },
    details : {
        textAlign: 'center',
    },
    space : {
        flex: 1,
    },
    spaceText: {
        height: 5,
    },
    footer : {
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton : {
        textAlign: 'center',
        fontSize: 18,
        color: '#0d90fc',
    },
    leaderboardText : {
    },
    playText : {
        fontWeight: '500',
    },
    line : {
        height: '100%',
        borderRightWidth: StyleSheet.hairlineWidth,
    },
});
