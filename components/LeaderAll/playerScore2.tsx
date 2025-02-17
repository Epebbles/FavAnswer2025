import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React, {useState, useEffect} from 'react';

interface CurrentLeaderProps {
  place: number;
  firstName: string;
  lastName: string;
  image: ImageSourcePropType | string;
  answer: string;
  votes: number;
  maritalStatus: string;
  location: string;
  age: number;
  gender: string;
  userID: number;
  currentUserID: number;
}
const CurrentLeader: React.FC<CurrentLeaderProps> = ({
  place,
  firstName,
  lastName,
  image,
  answer,
  votes,
  maritalStatus,
  location,
  age,
  gender,
  userID,
  currentUserID,
}) => {
  const [placement, setPlacement] = useState<string | number>('loading...');
  const [userName, setUserName] = useState('loading...');
  const [userImage, setUserImage] = useState<ImageSourcePropType | null>(null);
  const [userAnswer, setUserAnswer] = useState('loading...');
  const [voteCount, setVoteCount] = useState<number | string>('loading...');
  const [CurrentUser, setCurrentUser] = useState<boolean>(userID == currentUserID);

  const displayText = (selection?: string): string => {
    if (!selection) {return 'N/A';}
    return selection.length > 6
      ? `${selection.substring(0, 6)}...${selection.substring(selection.length - 3)}`
      : selection;
  };

  const placementSuffix = (place: number): string => {
    switch (place) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  useEffect(() => {
    setPlacement(place);
    setUserName(`${firstName} ${lastName.substring(0, 1)}`);
    setUserImage(typeof image === 'string' && image !== '' ? { uri: image } : null);
    setUserAnswer(answer);
    setVoteCount(votes);
  }, [place, firstName, image, answer, votes]);
  return (
    <>
      <View style={[styles.container, CurrentUser && {backgroundColor: '#f2f2f2', borderColor: '#ff8a58', borderWidth: 2}]}>
        <View style={styles.left}>
          { placement ? <View style={styles.placeContainer}>
            <Text style={styles.place}>{placement}</Text>
            <Text style={styles.placeSuffix}>{placementSuffix(Number(placement))}</Text>
          </View> :
          <View style={styles.placeContainer}>
          <Text style={styles.place}>You</Text>
        </View>}
        </View>
        <View style={styles.center}>
          <View style={styles.cTop}>
            <Text numberOfLines={3} style={styles.answer}>
              {userAnswer}
            </Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.cBottom}>
            <View style={styles.bLeft}>
              <Text
                style={[
                  CurrentUser ? styles.currUserDemoColor : styles.demoColor,
                  styles.userName,
                ]}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {userName}
              </Text>
              <Text
                style={[
                  CurrentUser ? styles.currUserDemoColor : styles.demoColor,
                ]}
                ellipsizeMode="tail"
                numberOfLines={1}>{`${age}, ${gender}`}</Text>
            </View>
            <View style={styles.bCenter}>
            <View style={styles.imgContainer}>
              {userImage ? (
                <Image style={styles.image} source={userImage} />
              ) : (
                <Text style={styles.initials}>{`${firstName[0]}${lastName[0]}`}</Text>
              )}
            </View>
            </View>
            <View style={styles.bRight}>
              <Text
                style={[
                  styles.location,
                  CurrentUser ? styles.currUserDemoColor : styles.demoColor,
                ]}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {location}
              </Text>
              <Text
                style={[
                  styles.marital,
                  CurrentUser ? styles.currUserDemoColor : styles.demoColor,
                ]}>
                {maritalStatus}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.voteCount}>{voteCount}</Text>
        </View>
      </View>
    </>
  );
};

export default CurrentLeader;

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
  // grayBackground: {
  //   padding: 10,
  //   backgroundColor: 'blue'
  // },
  // container: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   margin: 10
  // },
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  left: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 6,
  },
  right: {
    flex: 2,
  },
  cTop: {
    flex: 6,
    justifyContent: 'center',
  },
  cBottom: {
    flex: 6,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bLeft: {
    height: '100%',
    justifyContent: 'center',
    flex: 5,
  },
  bCenter: {
    flex: 2,
    marginHorizontal: 5,
  },
  bRight: {
    flex: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
  },
  imgContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#f36b26',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  initials: {
    fontSize: 22,
    fontWeight: '500',
  },
  answer: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  place: {
    fontWeight: '500',
    fontSize: 22,
  },
  placeSuffix: {
    fontSize: 18,
  },
  currUserDemoColor: {
    color: '#000',
  },
  demoColor: {
    color: '#999',
  },
  userName: {
    marginBottom: 3,
  },
  location: {
    textAlign: 'right',
    marginBottom: 3,
  },
  marital: {
    textAlign: 'right',
  },
  voteCount: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 22,
  },
  votes: {
    textAlign: 'center',
  },
});
