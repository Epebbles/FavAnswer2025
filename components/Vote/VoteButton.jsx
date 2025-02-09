import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const VoteButton = ({vote, access}) => {
    return (
        <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.appButtonContainer,
                    {backgroundColor: access ? '#0d90fc' : '#f4f4f4'},
                ]}
                onPress={vote}
                disabled={access ? false : true}
            >
            <Text
                style={[
                    styles.appButtonText,
                    {color: access ? 'white' : '#cdcdcd'},
                ]}
                >
                    Vote Now
            </Text>
        </TouchableOpacity>
    );
};

export default VoteButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius: 30,
        justifyContent: 'center',
        paddingVertical: 15,
        width:'82%',
    },
    appButtonText: {
        fontSize: 28,
        alignSelf: 'center',
    },
});
