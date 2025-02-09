import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const LinearScale = ({min = 0, max = 10, selected, onSelect}) => {
    const items = [];
    let item = min;
    while (item <= max) {
        items.push(item);
        item++;
    }

    const selectItem = (item) => {
        const selectedItem = selected === item ? null : item;
        if (onSelect) {
            onSelect(selectedItem);
        }
    };

    return (
        <View style={styles.container}>
            <View style={[
                styles.row,
            ]}>
                {items.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.buttonContainer} onPress={() => selectItem(item)}>
                        <View style={styles.button}>
                            <Text style={[
                                styles.buttonText,
                                ( selected === null
                                    ? {}
                                    : selected === item
                                        ? styles.buttonTextSelected
                                        : styles.buttonTextUnselected ),
                            ]}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default LinearScale;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    row : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 5,
    },
    buttonContainer : {
        flex: 1,
    },
    button : {
        alignItems: 'center',
    },
    hr : {
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonText : {
        color: 'gray',
        padding: 5,
    },
    buttonTextSelected : {
        color: 'black',
    },
    buttonTextUnselected : {
        opacity: 0.5,
    },
});
