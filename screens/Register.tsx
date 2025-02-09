import {StyleSheet, View, Text, ScrollView, Button, Alert} from 'react-native';
import {firestore} from '../firebaseconfig';
import React from 'react';
import RegisterForm from '../components/RegisterOrProfile/RegisterForm';
import {auth} from '../firebaseconfig';
import {firebase} from '../firebaseconfig';
import {useProfileStore} from '../store';
import {uploadImage} from '../firestorage';
const Register = ({navigation}) => {
  const profileStore = useProfileStore();
  // `Type` prop in RegisterForm is used to specify certain styles and content on the page
  const handleSubmit = () => {
    /* //TODO: Decide if we want to save users profile picture from Oauth inside our storage or let the ImageURI be from there. If we do go second route this will probably end up changing their profile picture if they change it from their provider I.E Google/Apple. Or it may cause unkown side effects such as them no longer having a profile picture because the downlaod url changed from provider.
    ! My Suggestion is that we store their profile picture in our database no matter what to mitigate these possible side effects
    */
    uploadImage(profileStore.profileUri)
      .then(imageUrl => {
        firestore()
          .collection('User_Profile')
          .add({
            first_name: profileStore.fName,
            updated_on: firebase.firestore.FieldValue.serverTimestamp(),
            last_name: profileStore.lName,
            user_id: auth().currentUser.uid,
            charity: profileStore.charity,
            country: 'USA',
            email: profileStore.email,
            favAnimal: profileStore.favAnimal,
            favFood: profileStore.favFood,
            dob: profileStore.age,
            firstName_lastInitial: `${profileStore.fName} ${profileStore.lName}`,
            profile_imageUrl: imageUrl || profileStore.profilePic,
            gender: profileStore.gender,
            maritalStatus: profileStore.maritalStatus,
            account_creation_date:
              firebase.firestore.FieldValue.serverTimestamp(),
            city: profileStore.city,
            education: profileStore.education,
          });
      })
      .then(() => {
        Alert.alert('User Profile Created');
        navigation.navigate('BottomNav');
      })
      .catch(error => {
        console.error(error);
      });
    console.log('User Profile Sucessfully Added');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <RegisterForm
            type="New"
            initialProfilePic={profileStore.profilePic}
            initialFName={profileStore.fName}
            initialLName={profileStore.lName}
            initialEmail={profileStore.email}
            initialZipCode={profileStore.zipCode}
            initialGender={profileStore.gender}
            initialAge={profileStore.age}
            initialMaritalStatus={profileStore.maritalStatus}
            initialEducation={profileStore.education}
            initialFavAnimal={profileStore.favAnimal}
            initialFavFood={profileStore.favFood}
            initialCharity={profileStore.charity}
            initialCity={profileStore.city}
            navigation={navigation}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

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
    alignItems: 'center',
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
