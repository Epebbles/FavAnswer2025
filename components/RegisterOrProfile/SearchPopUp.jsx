import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const SearchPopUp = ({
  visible,
  text,
  type,
  list,
  currentInput,
  confirmed,
  cancel,
}) => {
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    setIsVisible(visible);
    setInput(currentInput);
  }, [visible, currentInput]);

  const handleInput = text => {
    setInput(text);
    handleList(text, list);
  };

  // The algorithm that compares what the user is typing to the list that we provide from the handleInput() method
  const handleList = (text, list) => {
    let newList = [];
    let check = text.toLowerCase();
    let count = 0;
    for (item of list) {
      if (item.toLowerCase().startsWith(check)) {
        newList.push(item);
        count++;
      }
      if ( count == 4 ) {
        break;
      }
    }
    setFilteredList(newList);
  };

  // closes popup while making sure that any typing changes aren't saved
  const handleCancel = () => {
    cancel();
  };

  // handles submition, sends info to parent, then resets input field and list in the chance that the user moves to the next list.
  const handleSelected = () => {
    confirmed(type, input) + setInput('') + setFilteredList([]);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleSelected}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.header}>
            <View style={styles.back}>
              <TouchableOpacity activeOpacity={0.4} onPress={handleCancel}>
                <Text style={styles.backButton}>Back</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.space} />
          </View>
          <View style={styles.hr} />
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={e => handleInput(e)}
              placeholderTextColor="#c7c7c7"
              style={styles.input}
              placeholder={`Enter your ${text} here`}
              value={input}
              maxLength={15}
              autoFocus={true}
            />
          </View>
          <ScrollView style={styles.search}>
            {input === ''
              ? ''
              : filteredList.map((item, i) => {
                  return (
                    <View style={styles.searchRow} key={i}>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => setInput(item)}>
                        <Text style={styles.searchLabel}>{item}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
          </ScrollView>
          <View style={styles.hr} />
          <View style={styles.footer}>
            <View style={styles.space}>
              <TouchableOpacity activeOpacity={0.4} onPress={handleSelected}>
                <Text style={styles.enter}>Enter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SearchPopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  view: {
    width: '75%',
    height: 253,
    borderRadius: 16,
    backgroundColor: 'white',
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
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  back: {
    flex: 1,
  },
  backButton: {
    fontSize: 18,
    color: '#0d90fc',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  space: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 25,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    fontSize: 18,
    width: '90%',
    marginLeft: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  alternative: {
    margin: 5,
  },
  search: {
    width: '100%',
  },
  searchRow: {
    margin: 5,
  },
  searchLabel: {
    fontSize: 18,
    marginLeft: 20,
    color: '#c7c7c7',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  enter: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#0d90fc',
  },
});
