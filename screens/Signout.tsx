import { firebase } from '@react-native-firebase/auth';

import React from 'react';

const signOutUser = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
};

export default signOutUser;
