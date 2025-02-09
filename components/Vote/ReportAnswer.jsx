import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import SegmentedPicker from 'react-native-segmented-picker';
import ReportReasonList from './OptionLists/ReportReasonList';
import AnswerButton from './AnswerButton';

const ReportAnswer = ({visible, answers, cancel, report}) => {
  const [answersToReport, setAnswersToReport] = useState([
    'loading...',
    'loading...',
  ]);
  const [answerSelected, setAnswerSelected] = useState('');
  const [reason, setReason] = useState('');
  const [isVisible, setIsVisible] = useState();
  const [answerVisible, setAnswerVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [borderOne, setBorderOne] = useState(false);
  const [borderTwo, setBorderTwo] = useState(false);
  const [selected, setSelected] = useState(false);

  const answerRef = useRef(null);
  const reasonRef = useRef(null);

  useEffect(() => {
    setAnswersToReport(answers);
    setIsVisible(visible);
  }, [answers, visible]);

  const handleCancel = () => {
    setAnswerSelected('');
    setReason('');
    cancel();
  };

  const handleReport = () => {
    report(answerSelected, reason);
    setAnswerSelected('');
    setReason('');
  };
  // Submit hasn't been completed yet, once we plug backend in, this will change
  const handleSelection = (answerId, answer) => {
    console.log('answersToReport', answersToReport[0]);
    // totalVotes === TotalVotes?
    //     handleVote():
    // answerId === 1?
    //     setBorderOne(true) + setBorderTwo(false) + setSelected(true) + setAnswerSelected({answerId, answer: leftAnswer})
    // :answerId === 2?
    //     setBorderTwo(true) + setBorderOne(false) + setSelected(true) + setAnswerSelected({answerId, answer: rightAnswer}): ""
  };

  // resets any choices made and diables vote button
  const reset = () => {
    setSelected(false) + setBorderOne(false) + setBorderTwo(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleCancel}>
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.header}>
            <View style={styles.back}>
              <TouchableOpacity activeOpacity={0.4} onPress={handleCancel}>
                <Text style={styles.backButton}>Back</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Offensive Answer</Text>
            <View style={styles.space} />
          </View>
          <View style={styles.hr} />
          <Text style={{marginTop: 5, fontSize: 14}} >Select the offensive answer for removal</Text>
          <View style={styles.row}>
            <AnswerButton
              style={styles.button}
              answer={answersToReport[0]}
              select={handleSelection}
              clicked={borderOne}
              answerId={1}
              unSelect={reset}
              fontSize={16}
            />
            <AnswerButton
              style={styles.button}
              answer={answersToReport[1]}
              select={handleSelection}
              clicked={borderTwo}
              answerId={2}
              unSelect={reset}
              fontSize={16}
            />
          </View>
          {/* <View style={styles.hrI} /> */}
          <View style={styles.hr} />
          <View style={styles.footer}>
            <View style={styles.space}>
              <TouchableOpacity activeOpacity={0.4} onPress={handleReport}>
                <Text style={styles.reportButton}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReportAnswer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  view: {
    flex: 1,
    maxHeight: 250,
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 16,
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
  hrI: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  button: {
    flex: 0.5,
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
    flex: 0.5,
  },
  reporting: {
    marginTop: 10,
    width: '100%',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  answerContainer: {
    alignItems: 'center',
  },
  answer: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    textAlign: 'left',
    fontSize: 18,
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    textAlign: 'left',
  },
  answer: {
    marginLeft: 20,
    width: '60%',
  },
  reason: {
    marginLeft: 20,
  },
  placeholder: {
    color: '#c7c7c7',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  reportButton: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#0d90fc',
  },
});
