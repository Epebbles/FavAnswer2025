import {ScrollView, StyleSheet, View, Text, Button, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import RegisterForm from '../components/RegisterOrProfile/RegisterForm';
import {uploadImage} from '../firestorage';
import {useProfileStore} from '../store';
import {firestore} from '../firebaseconfig';
import {auth} from '../firebaseconfig';

interface UserProfile {
  profile_imageUrl?: string;
  first_name?: string;
  last_name?: string;
  age?: string;
  email?: string;
  zipCode?: string;
  gender?: string;
  dob?: string;
  maritalStatus?: string;
  education?: string;
  favAnimal?: string;
  favFood?: string;
  charity?: string;
  city?: string;
}

export default function Profile({navigation}: {navigation: any}) {
  const [user, setUser] = useState<any>(null);
  const [doc, setDoc] = useState<string>('');
  const [initializing, setInitializing] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserProfile>({});
  const profileStore = useProfileStore();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {setInitializing(false);}
  }
  //* Gets Users Profile and the Documents ID of their Profile.
  const getUserProfile = async () => {
    if (auth().currentUser) {
      try {
        const userProfile = await firestore()
          .collection('User_Profile')
          .where('user_id', '==', `${auth().currentUser.uid}`)
          .get();
        //*Check if the query snapshot has any documents
        if (userProfile.size > 0) {
          const userData = userProfile.docs[0].data();
          const document = userProfile.docs[0].ref._documentPath._parts[1];
          setDoc(document);
          setUserData(userData);
        } else {
          console.warn('No matching user profile found.');
        }
      } catch (error) {
        Alert.alert(`${error.message}`);
        console.error(error);
      }
    } else {
      Alert.alert('Please Login to Continue.');
    }
  };
  // !Function to set the variables in Zustand State Management
  const setStore = () => {
    if (userData) {
      profileStore.setProfilePic(userData.profile_imageUrl);
      profileStore.setFName(userData.first_name || '');
      profileStore.setLName(userData.last_name || '');
      profileStore.setEmail(userData.email || '');
      profileStore.setZipCode(userData.zipCode || '');
      profileStore.setGender(userData.gender || '');
      profileStore.setAge(userData.dob || '');
      profileStore.setMaritalStatus(userData.maritalStatus || '');
      profileStore.setEducation(userData.education || '');
      profileStore.setFavAnimal(userData.favAnimal || '');
      profileStore.setFavFood(userData.favFood || '');
      profileStore.setCharity(userData.charity || '');
      profileStore.setCity(userData.city || '');
    }
  };
  //*:Updates user by first Uploading the Image to FireStorage If different.

  const handleUpdate = () => {
    if (doc) {
      uploadImage(profileStore.profileUri)
        .then(imageUrl => {
          return firestore()
            .collection('User_Profile')
            .doc(doc)
            .update({
              first_name: profileStore.fName,
              updated_on: firestore.FieldValue.serverTimestamp(),
              last_name: profileStore.lName,
              charity: profileStore.charity,
              country: 'USA',
              email: profileStore.email,
              favAnimal: profileStore.favAnimal,
              favFood: profileStore.favFood,
              dob: profileStore.age,
              firstName_lastInitial: `${profileStore.fName} ${profileStore.lName}`,
              profile_imageUrl: imageUrl,
              gender: profileStore.gender,
              maritalStatus: profileStore.maritalStatus,
            });
        })
        .then(() => {
          //? Which page should we navigate to after update? or don't navigate anywhere?
          Alert.alert('Profile Updated');
          navigation.navigate('Vote');
        })
        .catch(error => {
          Alert.alert(error.message);
          console.error(error);
        });
    } else {
      console.warn('No Document to Reference', doc);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    getUserProfile();
    return subscriber;
  }, []);
  //TODO: In this page, we will include a useEffect or useContext depending on which is better fitting to transfer the users current credentials through the "RegisterForm" component so it auto populates for them
  //! useEffect should be used because we are using Zustand for State persistance
  useEffect(() => {
    //* Update profileStore values once userData is fetched
    setStore();
  }, [userData]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <RegisterForm
            initialProfilePic={profileStore.profilePic}
            initialFName={profileStore.fName}
            initialLName={profileStore.lName}
            initialEmail={profileStore.email}
            initialZipCode={profileStore.zipCode}
            initialGender={profileStore.gender}
            initialAge={userData?.age}
            initialMaritalStatus={profileStore.maritalStatus}
            initialEducation={profileStore.education}
            initialFavAnimal={profileStore.favAnimal}
            initialFavFood={profileStore.favFood}
            initialCharity={profileStore.charity}
            initialCity={profileStore.city}
            navigation={navigation}
          />
          <Button title="Update" onPress={handleUpdate} />
        </ScrollView>
      </View>
    </View>
  );
}

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
});
