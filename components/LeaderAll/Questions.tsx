import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { QuestionsProps } from '../types';

const months = {
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
    return `${d.getMonth() + 1}/${d.getDate()}`;
};

const Questions: React.FC<QuestionsProps> = ({ date, question, responses, onPressQuestion, onPressChangeView }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressQuestion(date, question, responses)}>
      <View style={styles.left}>
        <Text style={styles.date}>{FormatDate(date)}</Text>
      </View>
      <View style={styles.center}>
        <Text numberOfLines={3} style={styles.question}>{question}</Text>
      </View>
      <View style={styles.right}>
        <FontAwesome5Icons name="chevron-right" size={20} color="#0d90fc" />
      </View>
    </TouchableOpacity>
  );
};

export default Questions;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  left: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',

  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  date: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
  },
});
