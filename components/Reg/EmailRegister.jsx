import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react';

const EmailRegister = ({visible, disappear, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerVisible, setRegisterVisible] = useState();

    useEffect(()=> {
        setRegisterVisible(visible);
    }, [visible]);

    const handleRegister = () => {
        setEmail('') + setPassword('') + setConfirmPassword('');
        disappear();
        navigation.navigate('Register');
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={registerVisible}
            onRequestClose={() => disappear()}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.back}>
                            <TouchableOpacity activeOpacity={0.4} onPress={() => disappear()}>
                                <Text style={styles.backButton}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>Register</Text>
                        <View style={styles.space}/>
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.inputLabel}>Email*</Text>
                            <TextInput placeholderTextColor="#c7c7c7" placeholder="Enter email" style={[styles.input, styles.email]} onChangeText={(e) => setEmail(e)} value={email}/>
                        </View>
                        <View style={styles.hrI}/>
                        <View style={styles.row}>
                            <Text style={styles.inputLabel}>Password*</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor="#c7c7c7" placeholder="Enter password" style={styles.input} onChangeText={(e) => setPassword(e)} value={password}/>
                        </View>
                        <View style={styles.hrI}/>
                        <View style={styles.row}>
                            <Text style={styles.inputLabel}>Confirm*</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor="#c7c7c7" placeholder="Enter password again" style={[styles.input, styles.confirm]} onChangeText={(e) => setConfirmPassword(e)} value={confirmPassword}/>
                        </View>
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.4} onPress={handleRegister}>
                            <Text style={styles.registerButton}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EmailRegister;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        paddingTop: '40%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    view: {
        margin: 20,
        width: '90%',
        height: '31.5%',
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
    hrI : {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 25,
        marginRight: 25,
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
    },
    backButton : {
        fontSize: 18,
        color: '#0d90fc',
    },
    label : {
        justifyContent: 'center',
        textAlign: 'center',
        flex: 2,
        fontSize: 18,
        fontWeight: '500',
    },
    space : {
        flex: 1,
    },
    form : {
        width: '100%',
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 11,
        marginBottom: 11,
        paddingLeft: 25,
        paddingRight: 25,
    },
    inputLabel : {
        fontSize: 18,
        marginRight: 20,
    },
    input : {
        fontSize: 18,
        textAlign: 'center',
    },
    email : {
        marginLeft: 35,
    },
    confirm : {
        marginLeft: 13,
    },
    footer : {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    registerButton : {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#0d90fc',
    },
});
