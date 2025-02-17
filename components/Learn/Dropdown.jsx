import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import SegmentedPicker from 'react-native-segmented-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dropdown = ({selected, onSelect, options}) => {
    const [visible, setVisible] = useState(false);

    const onPress = () => {
        setVisible(true);
    };

    const onCancel = () => {
        setVisible(false);
    };

    const onConfirm = (selections) => {
        onSelect?.(selections);
        setVisible(false);
    };

    return (
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.4} onPress={onPress}>
            <View style={styles.row}>
                <Text>{ selected ? Object.values(selected).join(', ') : '' }</Text>
                <MaterialIcons name={ visible ? 'arrow-drop-up' : 'arrow-drop-down' } size={22}/>
                <SegmentedPicker
                    size={0.35}
                    visible={visible}
                    onCancel={onCancel}
                    onConfirm={onConfirm}
                    options={options}
                    defaultSelections={selected}
                />
            </View>
        </TouchableOpacity>
    );
};

export default Dropdown;


const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    row : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    buttonContainer : {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    button : {
        alignItems: 'center',
    },
    hr : {
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonText : {
        padding: 5,
    },
    selected : {
        color: '#0d90fc',
        backgroundColor: '#0d90fc18',
    },
    unselected : {
        color: 'gray',
    },
});
