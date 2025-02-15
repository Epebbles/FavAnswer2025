// adjust lettering spacing 1 to 1.5

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

interface Answer {
  text?: string;
}

interface AnswerButtonProps {
  answer: Answer | string;
  select: (id: string, answer: Answer | string) => void;
  unSelect: () => void;
  clicked: boolean;
  answerId: string;
  fontSize: number;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  select,
  unSelect,
  clicked,
  answerId,
  fontSize,
}) => {
  const [border, setBorder] = useState<boolean>(false);
  const [answerItem, setAnswerItem] = useState<Answer | string>();

  useEffect(() => {
    setAnswerItem(answer);
    setBorder(clicked);
  }, [answer, clicked]);

  const handleSelect = () => {
    border ? unSelect() : select(answerId, answer);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.appButtonContainer, {borderWidth: border ? 2 : 0}]}
        onPress={handleSelect}>
        <Text
          numberOfLines={11}
          style={[styles.appButtonText, {fontSize: fontSize}]}>
          {answerItem
            ? typeof answerItem === 'string'
              ? answerItem
              : answerItem.text ?? 'loading...'
            : 'loading...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnswerButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#f3f9ff',
    borderColor: '#0d90fc',
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  appButtonText: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: '300',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
});
