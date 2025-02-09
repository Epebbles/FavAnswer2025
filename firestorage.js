import storage from '@react-native-firebase/storage';
import {auth} from './firebaseconfig';
export async function uploadImage(imageUri) {
  const AUTH = auth().currentUser.uid;
  const bucket = `${AUTH}/${AUTH}`;
  await storage().ref(bucket).putFile(imageUri);
  const url = await storage().ref(bucket).getDownloadURL();
  return url;
}
