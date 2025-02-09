import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {firestore, TODAY} from '../firebaseconfig';
import AnswerButton from '../components/Vote/AnswerButton';
import NoVotes from '../components/Vote/NoVotes';
import ReportAnswer from '../components/Vote/ReportAnswer';
import Status from '../components/Status';
import VoteButton from '../components/Vote/VoteButton';
const Vote = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentVotes, setCurrentTotalVotes] = useState(0);
  const TotalVotes = 10;
  const [todaysQuestion, setTodaysQuestion] = useState([]);
  const [todaysAnswers, setTodaysAnswers] = useState([]);
  const [answerSelected, setAnswerSelected] = useState({
    answerId: 0,
    answer: {_id: 0, text: 'None selected yet'},
  });
  const [docRef, setDocRef] = useState([]);
  const [leftAnswer, setLeftAnswer] = useState({text: 'loading...'});
  const [rightAnswer, setRightAnswer] = useState({text: 'loading...'});
  const [borderOne, setBorderOne] = useState(false);
  const [borderTwo, setBorderTwo] = useState(false);
  const [selected, setSelected] = useState(false);
  const [noVotes, setNoVotes] = useState(false);
  const [visible, setVisible] = useState(false);
  const document = 'question_playDate';

  const getQuestionOfDay = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('Questions ')
        .where(document, '==', TODAY)
        .get();

      const data = querySnapshot.docs.map(doc => doc.data());

      // Check if there are any documents
      if (querySnapshot.docs.length === 0) {
        console.error('No documents found in the query snapshot');
        return; // Exit the function if no documents are found
        }

      const questionRef = querySnapshot.docs[0].ref._documentPath._parts[1];
      setDocRef(questionRef);
      setTodaysQuestion(data[0]?.question || 'No question available');
      getAnswersForQuestionOfDay();
    } catch (error) {
      console.error(error);
    }
  };
  const getAnswersForQuestionOfDay = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('Answers')
        .where('belongsToQuestion', '==', docRef)
        .where('isActive', '==', false)
        .get();

      const extractedData = querySnapshot.docs.map(doc => {
        const {answer, answerCreatorId, answers_score, isActive} = doc.data();
        return {id: doc.id, answer, answerCreatorId, answers_score, isActive};
      });
      setTodaysAnswers(extractedData);
      // After fetching answers, handle the answers and set initial left and right answers
      handleAnswers(extractedData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAnswers = answersList => {
    if (answersList.length > 0) {
      setIsLoading(false);
      let newAnswers = [];

      for (let i = 0; i < 2; i++) {
        let rand = Math.floor(Math.random() * answersList.length);

        //! Covering Edge Case for chances that same number is picked twice.
        if (newAnswers.includes(answersList[rand])) {
          //! Recursively make sure rand isn't the same
          const handleRand = rand => {
            rand = Math.floor(Math.random() * answersList.length);
            if (newAnswers.includes(answersList[rand])) {
              return handleRand(rand);
            } else {
              return rand;
            }
          };

          rand = handleRand(rand);
          newAnswers.push(answersList[rand]);
        } else {
          newAnswers.push(answersList[rand]);
        }
      }

      setLeftAnswer(newAnswers[0]);
      setRightAnswer(newAnswers[1]);
    }
  };

  // Takes current list and removes the answer just submitted, then chooses a new random answer from the updates list
  const newAnswer = () => {
    let newList = todaysAnswers.filter(item => {
      console.log(
        '🚀 ~ file: Vote.jsx:97 ~ newList ~ answerSelected:',
        answerSelected,
      );
      return item?.answer !== answerSelected?.answer.answer;
    });

    if (newList.length < 2 && currentVotes !== TotalVotes) {
      setIsLoading(true);
      reset();
      getAnswersForQuestionOfDay();
      return; // Exit the function after resetting and fetching new answers
    }

    console.log('🚀 ~ file: Vote.jsx:97 ~ newList ~ newList:', newList);
    console.log('Todays Answers Length: ', todaysAnswers.length);
    console.log(
      '🚀 ~ file: Vote.jsx:123 ~ newAnswer ~ leftAnswer:',
      leftAnswer,
    );
    console.log(
      '🚀 ~ file: Vote.jsx:114 ~ newAnswer ~ rightAnswer:',
      rightAnswer,
    );

    let rand = Math.floor(Math.random() * newList.length);
    if (answerSelected.answerId === 1) {
      if (newList[rand] === rightAnswer) {
        if (rand === newList.length - 1) {
          rand = 0;
        } else {
          rand++;
        }
      }
      setLeftAnswer(newList[rand]);
    }
    if (answerSelected.answerId === 2) {
      if (newList[rand] === leftAnswer) {
        if (rand === newList.length - 1) {
          rand = 0;
        } else {
          rand++;
        }
      }
      setRightAnswer(newList[rand]);
    }
    setTodaysAnswers(newList);
  };

  // checks if there are any votes left for the user to use, if not, popup shows up
  const handleVote = () => {
    currentVotes < TotalVotes
      ? setCurrentTotalVotes(currentVotes + 1) + reset() + newAnswer()
      : setNoVotes(true);
  };

  // Submit hasn't been completed yet, once we plug backend in, this will change
  const handleSelection = (answerId, answer) => {
    currentVotes === TotalVotes
      ? handleVote()
      : answerId === 1
      ? setBorderOne(true) +
        setBorderTwo(false) +
        setSelected(true) +
        setAnswerSelected({answerId, answer: leftAnswer})
      : answerId === 2
      ? setBorderTwo(true) +
        setBorderOne(false) +
        setSelected(true) +
        setAnswerSelected({answerId, answer: rightAnswer})
      : '';
  };

  // resets any choices made and diables vote button
  const reset = () => {
    setSelected(false) + setBorderOne(false) + setBorderTwo(false);
  };

  // after submitted offense to specific answer, we will send the information here
  const handleReport = (answer, reason) => {
    reset();
    setVisible(false);
    answer.answer === leftAnswer.answer
      ? alert(
          `Left Answer: This answer was reported: ${answer.answer} with this reason: ${reason.reason}`,
        ) +
        setAnswerSelected({answerId: 1, answer: leftAnswer}) +
        newAnswer()
      : answer.answer === rightAnswer.answer
      ? alert(
          `Right Answer: This answer was reported: ${answer.answer} with this reason: ${reason.reason}`,
        ) +
        setAnswerSelected({answerId: 2, answer: rightAnswer}) +
        newAnswer()
      : alert('Something incredibly weird just happened');
  };
  useEffect(() => {
    getQuestionOfDay();
  }, []);
  useEffect(() => {
    if (docRef) {
      getAnswersForQuestionOfDay();
    }
  }, [docRef]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
<Text style={styles.title}>Play the Game</Text>
</View> */}
      <View style={styles.main}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{todaysQuestion}.</Text>
        </View>
        <View style={styles.answer}>
          {todaysAnswers.length > 0 && !isLoading ? (
            <>
              <AnswerButton
                style={styles.button}
                answer={leftAnswer.answer}
                select={handleSelection}
                clicked={borderOne}
                answerId={1}
                unSelect={reset}
              />
              <AnswerButton
                style={styles.button}
                answer={rightAnswer.answer}
                select={handleSelection}
                clicked={borderTwo}
                answerId={2}
                unSelect={reset}
              />
            </>
          ) : (
            <Text>Loading answers...</Text>
          )}
        </View>
        <View style={styles.vote}>
          <View style={styles.voteButton}>
            <VoteButton vote={handleVote} access={selected} />
          </View>
          <View style={styles.progress}>
            <StatusBar hidden />
            <Status
              height={10}
              backColor="#f3f2f3"
              statusColor="#54cb2b"
              current={currentVotes}
              total={TotalVotes}
            />
            <Text style={styles.text}>
              {TotalVotes - currentVotes}/10 votes remaining today
            </Text>
          </View>
          <View style={styles.report}>
            <TouchableOpacity
              activeOpacity={currentVotes < 10 ? 0.4 : 1}
              onPress={currentVotes < 10 ? () => setVisible(true) : null}>
              <Text
                style={[
                  styles.reportText,
                  {color: currentVotes === 10 ? 'gray' : '#0d90fc'},
                ]}>
                Offensive Answer?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <NoVotes
          visible={noVotes}
          cancel={() => setNoVotes(false)}
          navigation={navigation}
        />
        <ReportAnswer
          visible={visible}
          cancel={() => setVisible(false)}
          answers={[leftAnswer, rightAnswer]}
          report={handleReport}
        />
      </View>
    </View>
  );
};

export default Vote;

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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  questionContainer: {
    flex: 0.5,
    marginTop: 18,
    paddingHorizontal: 10,
    // paddingRight: 10
  },
  question: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
    letterSpacing: 1,
  },
  answer: {
    flex: 2,
    flexDirection: 'row',
    padding: 15,
  },
  button: {
    flex: 1,
  },
  vote: {
    flex: 1,
  },
  voteButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  progress: {
    paddingTop: 20,
    paddingRight: 35,
    paddingLeft: 35,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: 'gray',
    fontSize: 12,
  },
  report: {
    paddingTop: 7,
  },
  reportText: {
    textAlign: 'center',
  },
});
