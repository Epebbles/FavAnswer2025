import { StyleSheet, Text, Image, View, Modal, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';
import CharityList from './OptionLists/CharityList';

const CharityPopUp = ({visible, currentSelection, confirmed, cancel}) => {
    const [selected, setSelected] = useState(currentSelection);
    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        setIsVisible(visible);
        setSelected(currentSelection);
    }, [visible]);

    const handleCancel = () => {
        cancel();
    };

    const handleSelected = () => {
        confirmed('Charity', selected) + setSelected('');
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={handleCancel}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.back}>
                            <TouchableOpacity activeOpacity={0.4} onPress={handleCancel}>
                                <Text style={styles.backButton}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Charity</Text>
                        <View style={styles.space}/>
                    </View>
                    <View style={styles.hr}/>
                    <ScrollView style={styles.list}>
                        {CharityList.map((item, i) => {
                            return (
                                <View key={i}>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => setSelected(item.title)}>
                                        <View style={styles.charityContainer}>
                                            <View>
                                                <View style={styles.charityImageContainer}>
                                                    <Image source={item.image} style={styles.charityImg}/>
                                                </View>
                                            </View>
                                            <View style={styles.charityR}>
                                                <View>
                                                    <Text style={[styles.charityName,  {color: selected === item.title ? '#0d90fc' : 'black'}]}>{item.title}</Text>
                                                    <Text style={styles.charityTopic}>{item.topic}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.checked}>
                                                {selected === item.title ? <MaterialIcons name="check" color="#0d90fc" size={24}/> : ''}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    {item.title === 'The Hunger Project' ?
                                    '' :
                                    <View style={styles.hr}/>}
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.hr}/>
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.4} onPress={handleSelected}>
                            <Text style={styles.enter}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CharityPopUp;

const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    view: {
      alignItems: 'center',
      width: '75%',
      borderRadius: 16,
      backgroundColor: 'white',
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
      marginBottom: 10,
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
    title : {
      fontSize: 20,
      fontWeight: '500',
    },
    space : {
      flex: 1,
    },
    list : {
      width: '100%',
      paddingLeft: 25,
      paddingRight: 25,
    },
    charitybutton : {
      flex: 1,
    },
    charityContainer : {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 55,
    },
    charityImageContainer : {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      height: 40,
      width: 40,
      overflow: 'hidden',
      borderWidth: StyleSheet.hairlineWidth,
    },
    charityImg : {
      width: '100%',
      height: '100%',
    },
    charityR : {
      marginLeft: 20,
      flex: 1,
    },
    charityName : {
      fontSize: 15,
    },
    charityTopic : {
      color: 'gray',
    },
    checked : {
      marginRight: 0,
      marginLeft: 'auto',
      width: 30,
    },
    footer : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    enter : {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      color: '#0d90fc',
    },
  });
