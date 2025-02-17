import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import DailyLeaderboard from '../components/LeaderAll/DailyLeaderboard2';
import MonthPagination from '../components/LeaderAll/MonthPagination';
import Questions from '../components/LeaderAll/Questions';
import TodayAnswers from '../components/LeaderAll/DummyData/TodaysLeaders';
import UserResponses from '../components/LeaderAll/DummyData/UserResponses';
import { StackScreenProps } from '@react-navigation/stack';
import { QuestionsProps, RootStackParamList } from '../components/types';
import { LeaderboardProps, ResponseItem, Response } from '../components/types';




// import TitleStyles from '../styles/TitleStyles.module.css'


const CurrentUser: { id: number } = { id: 22 };


const Leaderboard: React.FC<LeaderboardProps> = ({navigation}) => {
  const [view, setView] = useState('Month');
  const [winners, setWinners] = useState(UserResponses);
  const [date, setDate] = useState<number>(0);
  const [MonthlyData, setMonthlyData] = useState<ResponseItem[]>([]);
  const [MonthFilter, setMonthFilter] = useState<number>(new Date().getMonth());
  const [YearFilter, setYearFilter] = useState<number>(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dailyResponses, setDailyResponses] = useState<QuestionsProps[]>([]);
  const [index, setIndex] = useState<number>(0);

  const filterData = () => {
    const currentMonth = MonthFilter + 1;
    const currentYear = YearFilter;
    return UserResponses.filter((item) => {
      const [year, month] = item.date.split('-').map(Number);
      return currentMonth === month && currentYear === year;
    });
  };
  const onPressChangeView = (view: string) => {
    setView(view);
  };
  const onPressQuestion = (date: string, question: string, response: Response[]) => {
    setDailyResponses([{ date, question, responses: response, onPressChangeView: onPressChangeView, // Pass the existing function
      onPressQuestion: onPressQuestion, // Pass the existing function
      }]);
  };


  useEffect(() => {
    setIsLoading(false);
  }, [MonthlyData]);

  useEffect(() => {
    setMonthlyData(filterData());
  }, []);
  useEffect(() => {
    setIsLoading(true);
    setMonthlyData(filterData());
  }, [MonthFilter, YearFilter]);

  useEffect(() => {
    if (dailyResponses.length > 0) {
      setView('Daily');
    }
  }, [dailyResponses]);

  useEffect(() => {
    if (view === 'Daily') {
      navigation.setOptions({
        headerLeft: () => (
          <Button
            title="Back"
            onPress={() => {
              onPressChangeView('Month');
              navigation.navigate('Leaderboard');
            }}
          />
        ),
      });
    } else {
      navigation.setOptions({ headerLeft: undefined });
    }
  }, [view]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard abc</Text>
        <Text style={styles.title}>Leaderboard abc</Text>
      </View>
      <View style={styles.main} >
        {/* <Text style={styles.title}>Leaderboard</Text> */}
      {view === 'Month' ? (
        <>
          <View style={styles.monthSelection}>
            <MonthPagination monthFilter={MonthFilter} index={index} setIndex={setIndex} setMonthFilter={setMonthFilter} setYearFilter={setYearFilter} />
          </View>
          <ScrollView style={styles.dateSelection}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              MonthlyData.map(({date, question, answers}, i) => {
                return (
                  <Questions
                    key={i}
                    date={date}
                    question={question}
                    responses={answers.map((answer, index) => ({
                      ...answer,  // Keep existing properties
                      place: index + 1,  // Add missing 'place' property
                    }))}
                    onPressQuestion={onPressQuestion}
                    onPressChangeView={onPressChangeView}
                  />
                );
              })
            )}
          </ScrollView>
        </>
      ) : (
        <DailyLeaderboard
          date={dailyResponses[0]?.date}
          question={dailyResponses[0]?.question}
          responses={dailyResponses[0]?.responses}
          currentUserID={CurrentUser.id}
          onPressQuestion={onPressQuestion}
          onPressChangeView={onPressChangeView}
        />
      )}
      </View>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
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
  monthSelection: {
    flex: 0,
  },
  dateSelection: {
    flex: 9,
    marginTop: 10,
    // backgroundColor: '#ddd',
  },
});
