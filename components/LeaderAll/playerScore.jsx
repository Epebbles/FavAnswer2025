import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const CurrentLeader = ({
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
  const [placement, setPlacement] = useState('loading...');
  const [userName, setUserName] = useState('loading...');
  const [userImage, setUserImage] = useState('loading...');
  const [userAnswer, setUserAnswer] = useState('loading...');
  const [voteCount, setVoteCount] = useState('loading...');
  const [CurrentUser, setCurrentUser] = useState(userID == currentUserID);

  const displayText = selection => {
    const maxLength = 6;
    let displayText = '';

    if (selection == undefined) {
      displayText = selection;
    } else if (selection.length > maxLength) {
      displayText =
        selection.substring(0, maxLength) +
        '...' +
        selection.substring(selection.length - 3);
    } else {
      displayText = selection;
    }
    return displayText;
  };

  const placementSuffix = place => {
    let suffix = '';
    switch (place) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
    return suffix;
  };
  useEffect(() => {
    setPlacement(place);
    setUserName(`${firstName} ${lastName.substring(0, 1)}`);
    setUserImage(image);
    setUserAnswer(answer);
    setVoteCount(votes);
  }, [firstName, image, answer, votes]);
  return (
    <>
      <View style={styles.hr} />
      <View style={[styles.container, CurrentUser && {backgroundColor: '#f2f2f2'}]}>
        <View style={styles.left}>
          { placement ? <View style={styles.placeContainer}>
            <Text style={styles.place}>{placement}</Text>
            <Text style={styles.placeSuffix}>{placementSuffix(placement)}</Text>
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
                {userImage === '' ? (
                  <Text style={styles.initials}>{`${firstName.substring(
                    0,
                    1,
                  )}${lastName.substring(0, 1)}`}</Text>
                ) : (
                  <Image style={styles.image} source={userImage} />
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
      <View style={styles.hr} />
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
    paddingTop: 10,
    paddingBottom: 10,
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
