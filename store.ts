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


const authStore: StateCreator<AuthState> = (set, get) => ({
  initialized: true,
  user: null,

  setUser: (user) => set({ user }),
  setInitialized: (initialized) => set({ initialized }),

  onAuthStateChanged: (user) => {
    get().setUser(user);
    if (get().initialized) {
      get().setInitialized(false);
    }
  },
  registerWithEmail: async (email: string, password: string) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response) {
        console.log('User registered:', response);
      }
    } catch (e) {
      console.error(e.message);
    }
  },
  subscribe: () => {
    const subscriber = auth().onAuthStateChanged(get().onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },
  signOut: async () => {
    try {
      await auth().signOut();
      console.log('User signed out!');
    } catch (e: any) {
      console.error(e.message);
    }
  },

  onGoogleButtonPress: async () => {
    try {
      GoogleSignin.configure({
        webClientId: '282715649612-htl49k6v9pjp3arg1nlu9jt257u6ljto.apps.googleusercontent.com',
      });
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      if (!idToken) throw new Error('Google Sign-In failed: No ID token returned');
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  onAppleButtonPress: async () => {
    try {
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
      const { identityToken, nonce } = appleAuthRequestResponse;
      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );
  
      // Sign the user in with the credential
      await auth().signInWithCredential(appleCredential);
    } catch (e: any) {
      console.error(e.message);
    }
  },

  onFacebookButtonPress: async () => {
    try {
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
      await auth().signInWithCredential(facebookCredential);
    } catch (e: any) {
      console.error(e.message);
    }
  },
});

export const useProfileStore = create(profileStore);
export const useAuthStore = create(authStore);
