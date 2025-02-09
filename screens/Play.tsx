import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {AuthContext} from '../navigators/AuthProvider';
import SubmitButton from '../components/Play/SubmitButton';

import {
  auth,
  firestore,
  TODAY,
  TIME,
  formattedTomorrow,
} from '../firebaseconfig';

interface QuestionData {
  question: string;
}


const Play = ({navigation}) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState<QuestionData[]>([]);
  const [docRef, setDocRef] = useState<string | null>(null);


  const document = 'question_playDate';

  const getQuestionOfDay = () => {
    firestore()
    .collection('Questions')
    .where(document, '==', formattedTomorrow)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data() as QuestionData);
      const questionRef = querySnapshot.docs[0].ref._documentPath._parts[1];

      if (questionRef) {
        setDocRef(questionRef);
      }

      setQuestion(data);
    })
    .catch(error => {
      console.error(error);
    });

  };
  useEffect(() => {
    getQuestionOfDay();
  }, []);


  // This will eventually connect to the payment process
  const handleSubmit = () => {
    const user = auth().currentUser;
  if (!user) {
    Alert.alert('Error', 'User not authenticated');
    return;
  }

  firestore()
    .collection('Answers')
    .add({
      answer: answer,
      answer_charCount: answer.length,
      answerCreatorId: user.uid,
      //! Help determine when they are playing the most
      answer_submitedTime_server: firestore.FieldValue.serverTimestamp(),
      //! Answer time submitted for tomorrows day because thats when its played
      answer_playDate: TODAY,
      answer_submitedTime: TIME,
      belongsToQuestion: docRef,
      answers_score: {
        yes: 0,
        no: 0,
        score: 300,
      },
    }) //? Maybe put answer scoring inside a another collection I.E Sub-collection
    .then(() => {
      console.log(
        '🚀 ~ file: Play.jsx:70 ~ handleSubmit ~ response:',
        'FIREBASE HAS RECIEVED THE ANSWER',
      );
      Alert.alert(' Thank you for Playing! Your answer has been submitted');
    })
    .catch(error => {
      console.error(error);
      Alert.alert(`Looks like something went wrong ${error}`);
    });
  };
  // const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Play the Game</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.directions}>
          <Text style={styles.dTwo}>
            Share your knowledge and insights daily. It costs only $1.00 for a
            chance to win for both you and your favorite charity.
          </Text>
        </View>
        <View style={styles.question}>
          <View style={styles.dateWrap}>
            <Text style={styles.date}>
              Play for tomorrow: {formattedTomorrow}
            </Text>
          </View>
          <Text style={styles.qod}>
            {question.length > 0 ? question[0].question : 'Loading...'}
          </Text>
        </View>
        <View style={styles.answer}>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            blurOnSubmit={true}
            value={answer}
            onChangeText={e => setAnswer(e)}
            placeholder="Start typing"
            maxLength={80}
          />
          <View style={styles.hr} />
          <Text style={styles.text}>
            Characters remaining {80 - answer.length}/80
          </Text>
        </View>
        <View style={styles.submit}>
          <SubmitButton submit={handleSubmit} />
        </View>
        <View style={styles.submitDisclaimer}>
          <Text style={styles.text}>
            Submitting your FavAnswer also gives you
          </Text>
          <Text style={styles.text}>
            10 additional votes only for the game today.
          </Text>
        </View>
        <View style={styles.policy}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('Terms & Conditions')}>
            <Text style={styles.link}>Terms & Conditions </Text>
          </TouchableOpacity>
          <Text style={styles.disclaimer}>and</Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('Privacy Policy')}>
            <Text style={styles.link}> Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  main: {
    flex: 22,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  directions: {
    flex: 0.28,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dTwo: {
    marginTop: 6,
    fontSize: 23,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 12,
  },
  call: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dOne: {
    textAlign: 'left',
    fontSize: 22,
    marginTop: 10,
  },
  question: {
    flex: 0.15,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dateWrap: {
    marginTop: 40,
    borderRadius: 3,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 13,
    color: 'gray',
  },
  qod: {
    fontSize: 30,
    fontWeight: '600',
  },
  answer: {
    flex: 0.15,
    justifyContent: 'center',
    paddingLeft: 15,
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
  },
  input: {
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 20,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
    marginRight: 30,
    marginBottom: 10,
  },
  submitDisclaimer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  submit: {
    flex: 0.12,
    marginTop: 15,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    width: '90%',
  },
  policy: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  disclaimer: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: '#0d90fc',
  },
});
