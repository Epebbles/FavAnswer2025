import { StackScreenProps } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
  BottomNav: undefined;
  'Sign up': undefined;
  Register: undefined;
  Today: {
    date: string;
    question: string;
    responses: Response[];
    currentUserID: number;
  };
  'How to Play': undefined;
  'About Us': undefined;
  'Terms & Conditions': undefined;
  'Privacy Policy': undefined;
  'Suggestions & Feedback': undefined;
  Leaderboard: undefined;

};

export interface QuestionsProps {
  date: string;
  question: string;
  responses: Response[];  // ✅ Use Response instead of any[]
  onPressChangeView: (view: string) => void;
  onPressQuestion: (date: string, question: string, responses: Response[]) => void;
}


export interface ResponseItem {
  id: string;
  question: string;
  date: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  pic: string | ImageSourcePropType;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  gender: string;
  birthday: string;
  LEN?: number;
  age: number;
  maritalStatus: string;
  education: string;
  favAnimal: string;
  favFood: string;
  charity: string;
  question: string;
  answer: string;
  votes: number;
}

// Interface for Leaderboard component props (used in Leaderboard.tsx)
export interface LeaderboardProps {
  navigation: any; // Replace `any` with proper type from React Navigation if available
}

// Interface for Today's Leaderboard props
export interface TodaysLeaderboardProps {
  question: string;
  date: string;
  responses: Response[];
  onPressQuestion: (date: string, question: string, responses: Response[]) => void;
  onPressChangeView: (view: string) => void;
  currentUserID: number;
}

// Interface for extended leaderboard items (if you add extra properties like `place`)
export interface LeaderboardItem extends ResponseItem {
  place: number;
}

export interface Response {
  id: number;
  firstName: string;
  lastName: string;
  maritalStatus: string;
  city: string;
  place: number;
  age: number;
  gender: string;
  answer: string;
  votes: number;
  pic: string | ImageSourcePropType;
}

// If a screen needs access to navigation props:
export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;
