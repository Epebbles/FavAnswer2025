import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';


const VoteOrPlayButton = ({type, navigation}) => {

    const handleSelect = () => {
        navigation.navigate(type);
    };

    return (
        <TouchableOpacity
                activeOpacity={0.8}
                style={styles.appButtonContainer}
                onPress={handleSelect}
            >
            <Text style={styles.appButtonText}>{type}</Text>
        </TouchableOpacity>
    );
};

export default VoteOrPlayButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius: 30,
        justifyContent: 'center',
        paddingVertical: 5,
        backgroundColor: '#0d90fc',
        width: '100%',
    },
    appButtonText: {
        fontSize: 28,
        alignSelf: 'center',
        color: 'white',
    },
});
