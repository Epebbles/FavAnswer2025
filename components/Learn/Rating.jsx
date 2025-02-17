import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Rating = ({icon, text, selected, pressed}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(selected);
    },[selected]);

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => pressed(text)}>
            <View style={styles.container}>
                <View style={styles.left}>
                    {text === 'Neutral' ?
                        <MaterialCommunityIcons name={icon} color={isSelected ? '#0d90fc' : 'gray'} size={26}/> :
                        <Ionicons name={icon} color={isSelected ? '#0d90fc' : 'gray'} size={26}/>
                    }
                </View>
                <View style={styles.center}>
                    <Text style={[styles.text, {color: isSelected ? '#0d90fc' : 'gray'}]}>{text}</Text>
                </View>
                <View style={styles.right}>
                    {isSelected ?
                        <MaterialIcons name="check" color="#0d90fc" size={24}/> : ''}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Rating;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    left : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center : {
        flex: 7,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    text : {
        fontSize: 18,
    },
    right : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
