import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { firestore, TODAY } from '../firebaseconfig';
import AnswerButton from '../components/Vote/AnswerButton';
import NoVotes from '../components/Vote/NoVotes';
import ReportAnswer from '../components/Vote/ReportAnswer';
import Status from '../components/Status';
import VoteButton from '../components/Vote/VoteButton';

interface Answer {
  id: string;
  answer: string;
  answerCreatorId: string;
  answers_score: number;
  isActive: boolean;
}

interface AnswerSelected {
  answerId: number;
  answer: Answer;
}

interface VoteProps {
  navigation: any; // Replace 'any' with proper navigation type if using React Navigation
}

const Vote: React.FC<VoteProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentVotes, setCurrentTotalVotes] = useState<number>(0);
  const TotalVotes = 10;
  const [todaysQuestion, setTodaysQuestion] = useState<string>('');
  const [todaysAnswers, setTodaysAnswers] = useState<Answer[]>([]);
  const [answerSelected, setAnswerSelected] = useState<AnswerSelected | null>(null);
  const [docRef, setDocRef] = useState<string | null>(null);
  const [leftAnswer, setLeftAnswer] = useState<Answer | null>(null);
  const [rightAnswer, setRightAnswer] = useState<Answer | null>(null);
  const [borderOne, setBorderOne] = useState<boolean>(false);
  const [borderTwo, setBorderTwo] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [noVotes, setNoVotes] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const document = 'question_playDate';

  const getQuestionOfDay = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('Questions ')
        .where(document, '==', TODAY)
        .get();

      const data = querySnapshot.docs.map((doc) => doc.data());

      // Check if there are any documents
      if (querySnapshot.docs.length === 0) {
        console.error('No documents found in the query snapshot');
        return; // Exit the function if no documents are found
      }

      const questionRef = querySnapshot.docs[0].ref.id;
      setDocRef(questionRef);
      setTodaysQuestion(data[0]?.question || 'No question available');
      getAnswersForQuestionOfDay();
    } catch (error) {
      console.error(error);
    }
  };
  const getAnswersForQuestionOfDay = async (): Promise<void> => {
    if (!docRef) return;

    try {
      const querySnapshot = await firestore()
        .collection('Answers')
        .where('belongsToQuestion', '==', docRef)
        .where('isActive', '==', false)
        .get();

      const extractedData: Answer[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }) as Answer);

      setTodaysAnswers(extractedData);
      // After fetching answers, handle the answers and set initial left and right answers
      handleAnswers(extractedData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAnswers = (answersList: Answer[]): void => {
    if (answersList.length > 0) {
      setIsLoading(false);
      let newAnswers: Answer[] = [];
      for (; newAnswers.length < 2 && answersList.length > 0;) {
        const rand = Math.floor(Math.random() * answersList.length);

        //! Covering Edge Case for chances that same number is picked twice.
        if (!newAnswers.includes(answersList[rand])) {
          newAnswers.push(answersList[rand]);
        }
      }
      setLeftAnswer(newAnswers[0]);
      setRightAnswer(newAnswers[1]);
    }
  };

  // Takes current list and removes the answer just submitted, then chooses a new random answer from the updates list
  const newAnswer = (): void => {
    if (!answerSelected) return;

    const newList = todaysAnswers.filter((item) => {
      console.log(
        '🚀 ~ file: Vote.jsx:97 ~ newList ~ answerSelected:',
        answerSelected,
      );
      return item.answer !== answerSelected.answer.answer;
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
      setLeftAnswer(newList[rand]);
    } else {
      setRightAnswer(newList[rand]);
    }
    setTodaysAnswers(newList);
  };

  // checks if there are any votes left for the user to use, if not, popup shows up
  const handleVote = (): void => {
    if (currentVotes < TotalVotes) {
      setCurrentTotalVotes((prev) => prev + 1);
      reset();
      newAnswer();
    } else {
      setNoVotes(true);
    }
  };

  // Submit hasn't been completed yet, once we plug backend in, this will change
  const handleSelection = (answerId: number, answer: Answer): void => {
    if (currentVotes === TotalVotes) {
      handleVote();
      return;
    }

    if (answerId === 1) {
      setBorderOne(true);
      setBorderTwo(false);
      setSelected(true);
      setAnswerSelected({ answerId, answer: leftAnswer! });
    } else {
      setBorderTwo(true);
      setBorderOne(false);
      setSelected(true);
      setAnswerSelected({ answerId, answer: rightAnswer! });
    }
  };

  // resets any choices made and diables vote button
  const reset = (): void => {
    setSelected(false);
    setBorderOne(false);
    setBorderTwo(false);
  };

  // after submitted offense to specific answer, we will send the information here
  const handleReport = (answer: Answer, reason: { reason: string }): void => {
    reset();
    setVisible(false);

    answer.answer === leftAnswer.answer
    if (answer.answer === leftAnswer?.answer) {
      alert(`Left Answer Reported: ${answer.answer} Reason: ${reason.reason}`);
      setAnswerSelected({ answerId: 1, answer: leftAnswer });
      newAnswer();
    } else {
      alert(`Right Answer Reported: ${answer.answer} Reason: ${reason.reason}`);
      setAnswerSelected({ answerId: 2, answer: rightAnswer });
      newAnswer();
    }
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
                  { color: currentVotes === 10 ? 'gray' : '#0d90fc' },
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
