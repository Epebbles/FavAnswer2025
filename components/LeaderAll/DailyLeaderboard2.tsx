import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import CurrentLeader from './playerScore2';
import {useNavigation} from '@react-navigation/native';
import {Response, TodaysLeaderboardProps} from '../types';


const months: { [key: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const FormatDate = (date: string): string => {
  const d = new Date(`${date}T00:08:00.000`);
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};

const TodaysLeaderboard: React.FC<TodaysLeaderboardProps> = ({
  question,
  date,
  responses,
  onPressChangeView,
  currentUserID,
}) => {
  const navigation = useNavigation();

  const [leaderBoard, setLeaderBoard] = useState<Response[]>([]);
  const [currentUserResponse, setCurrentUserResponse] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inTop20, setInTop20] = useState<boolean>(false);

  useEffect(() => {
    if (leaderBoard.length > 0) {
      setIsLoading(false);
    }
  }, [leaderBoard]);

  useEffect(() => {
    let userResponse: Response | null = null; // Temporary variable to hold the current user's response
    let DailyResponses: Response[] = responses
    .sort((p1, p2) => (p1.votes < p2.votes ? 1 : p1.votes > p2.votes ? -1 : 0))
    .map((r, i) => {
      const updatedResponse = { ...r, place: i + 1 };
      if (r.id === currentUserID) {userResponse = updatedResponse;}
      return updatedResponse;
    });

  setLeaderBoard(DailyResponses);

  // Only update state once outside the loop
  if (setCurrentUserResponse) {
    setCurrentUserResponse(userResponse);
  }
}, [responses, currentUserID]);



  useEffect(() => {
    setInTop20(currentUserResponse ? currentUserResponse.place <= 20 : true);
  }, [currentUserResponse]);


  return (
    <View style={styles.container}>
      <View style={styles.qod}>
        <Text style={styles.questionDate}>{FormatDate(date)}</Text>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question}</Text>
          {/* <Text style={styles.questionText}>My favorite holiday is...</Text> */}
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.leaderBoard}>
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <ScrollView style={styles.leaders}>
            {leaderBoard.slice(0, 20).map(({ id, firstName, lastName, maritalStatus, city, place, age, gender, answer, votes, pic }) => (
              <CurrentLeader
                key={id}
                place={place}
                firstName={firstName}
                lastName={lastName}
                image={pic}
                answer={answer}
                votes={votes}
                maritalStatus={maritalStatus}
                location={city}
                age={age}
                gender={gender}
                userID={id}
                currentUserID={currentUserID}

              />
                  ))}
            {!inTop20 && currentUserResponse && (
              <CurrentLeader
                place={currentUserResponse.place}
                firstName={currentUserResponse.firstName}
                lastName={currentUserResponse.lastName}
                image={currentUserResponse.pic}
                answer={currentUserResponse.answer}
                votes={currentUserResponse.votes}
                maritalStatus={currentUserResponse.maritalStatus}
                location={currentUserResponse.city}
                age={currentUserResponse.age}
                gender={currentUserResponse.gender}
                userID={currentUserResponse.id}
                currentUserID={currentUserID}
              />
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default TodaysLeaderboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 11,
  },
  leaderBoard: {
    flex: 8,
  },
  hTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 7,
    width: 7,
    borderRadius: 50,
    marginRight: 6,
  },
  hBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    flex: 2,
  },
  timeLeft: {
    flex: 1,
  },
  timeLeftText: {
    marginLeft: 10,
  },
  qod: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  questionDate: {
    color: '#ff8a58',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 15,
    marginLeft: 50,
  },
  question: {
    flex: 11,
    fontWeight: '500',
    backgroundColor: '#ff8a58',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  questionText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'left',
  },
  myAnswer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternative: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choice: {},
  button: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
  },
  leaderTitle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderBoardText: {},
  leaders: {
    backgroundColor: '#ddd',
  },
  loading: {},
});
