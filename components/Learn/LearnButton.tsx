import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface LearnButtonProps {
    text: string;
    navigation: { navigate: (screen: string) => void };
    icon: string;
    color: string;
}
const LearnButton: React.FC<LearnButtonProps> = ({text, navigation}) => {
    const handlePress = () => {
        navigation.navigate(text);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.left}>
                <Text style={styles.name}>{text}</Text>
            </View>
            <View style={styles.right}>
                <MaterialIcons style={styles.icon} name="keyboard-arrow-right" size={30} color="#0d90fc"/>
            </View>
        </TouchableOpacity>
    );
};

export default LearnButton;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 18,
    },
    left : {
        flex: 5,
        flexDirection: 'row',  // ✅ Ensure text and icon are in the same row
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    right : {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    name : {
        fontSize: 18,
        marginLeft: 10, // ✅ Space between icon and text
    },
    icon: {  // ✅ Add this to fix the error
        marginRight: 10,  // Optional styling
    },
});
