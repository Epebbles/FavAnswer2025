import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ArrowButton = ({icon, selected}) => {

    const handleSelect = () => {
        selected();
    };

    return (
        <TouchableOpacity
                activeOpacity={0.4}
                style={styles.appButtonContainer}
                onPress={handleSelect}
            >
            <MaterialIcons name={icon} size={27} color="#0d90fc"/>
        </TouchableOpacity>
    );
};

export default ArrowButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        height: 25,
        width: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#e8f4ff',
    },
});
