import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { create, StateCreator } from 'zustand';

// ✅ Define types for Profile Store
interface ProfileState {
  profilePic: string;
  fName: string;
  lName: string;
  email: string;
  zipCode: string;
  gender: string;
  age: string;
  maritalStatus: string;
  education: string;
  favAnimal: string;
  favFood: string;
  charity: string;
  city: string;
  profileUri: string;

  setProfileUri: (profileUri: string) => void;
  setProfilePic: (profilePic: string) => void;
  setFName: (fName: string) => void;
  setLName: (lName: string) => void;
  setEmail: (email: string) => void;
  setZipCode: (zipCode: string) => void;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setMaritalStatus: (maritalStatus: string) => void;
  setEducation: (education: string) => void;
  setFavAnimal: (favAnimal: string) => void;
  setFavFood: (favFood: string) => void;
  setCharity: (charity: string) => void;
  setCity: (city: string) => void;
}

// ✅ Define the Zustand store for profile
const profileStore: StateCreator<ProfileState> = (set) => ({
  profilePic: '',
  fName: '',
  lName: '',
  email: '',
  zipCode: '',
  gender: '',
  age: '',
  maritalStatus: '',
  education: '',
  favAnimal: '',
  favFood: '',
  charity: '',
  city: '',
  profileUri: '',

  setProfileUri: (profileUri) => set({ profileUri }),
  setProfilePic: (profilePic) => set({ profilePic }),
  setFName: (fName) => set({ fName }),
  setLName: (lName) => set({ lName }),
  setEmail: (email) => set({ email }),
  setZipCode: (zipCode) => set({ zipCode }),
  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setMaritalStatus: (maritalStatus) => set({ maritalStatus }),
  setEducation: (education) => set({ education }),
  setFavAnimal: (favAnimal) => set({ favAnimal }),
  setFavFood: (favFood) => set({ favFood }),
  setCharity: (charity) => set({ charity }),
  setCity: (city) => set({ city }),
});

// ✅ Define types for Auth Store
interface AuthState {
  initialized: boolean;
  user: string | null;
  setUser: (user: string | null) => void;
  setInitialized: (initialized: boolean) => void;
  onAuthStateChanged: (user: string | null) => void;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  subscribe: () => () => void;
  signOut: () => Promise<void>;
  onGoogleButtonPress: () => Promise<void>;
  onAppleButtonPress: () => Promise<void>;
  onFacebookButtonPress: () => Promise<void>;
}


let authStore = (set, get) => ({
  initialized: true,
  user: '',

  setUser: user => set({user}),
  setInitialized: initialized => set({initialized}),

  onAuthStateChanged: user => {
    get().setUser(user);
    get().initialized && get().setInitialized(false);
  },
  registerWithEmail: async (email, password, confirmPassword) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
        confirmPassword,
      );
      if (response) {
        console.log('?', response);
      }
    } catch (e) {
      console.error(e.message);
    }
  },
  subscribe: () => {
    const subscriber = auth().onAuthStateChanged(get().onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },
  signOut: () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  },

  onGoogleButtonPress: async () => {
    GoogleSignin.configure({
      webClientId:
        '282715649612-htl49k6v9pjp3arg1nlu9jt257u6ljto.apps.googleusercontent.com',
    });
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  },

  onAppleButtonPress: async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
  },

  onFacebookButtonPress: async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  },
});

export const useProfileStore = create(profileStore);
export const useAuthStore = create(authStore);
