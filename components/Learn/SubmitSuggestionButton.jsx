import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const SubmitSuggestionButton = ({submit}) => {

    return (
        <TouchableOpacity
                activeOpacity={0.8}
                style={styles.appButtonContainer}
                onPress={submit}
            >
            <Text
                style={styles.appButtonText}
                >
                    Submit
            </Text>
        </TouchableOpacity>
    );
};

export default SubmitSuggestionButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius: 30,
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: '#0d90fc',
    },
    appButtonText: {
        fontSize: 28,
        color: 'white',
        alignSelf: 'center',
    },
});
