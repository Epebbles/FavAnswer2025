import React, { Children, createContext, useState } from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '282715649612-htl49k6v9pjp3arg1nlu9jt257u6ljto.apps.googleusercontent.com',
});
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                signin: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e) {
                        console.log(e);
                    }
                },
                onGoogleButtonPress: async () => {
                    try {
                        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
                        const {idToken} = await GoogleSignin.signIn();
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        await auth().signInWithCredential(googleCredential);
                    }   catch(error) {
                        console.log({error});
                    }
                },

                register: async (email, password, confirmPassword) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password, confirmPassword);
                    } catch(e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
