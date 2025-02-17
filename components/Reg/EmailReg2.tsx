import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useAuthStore } from '../../store';
import { useProfileStore } from '../../store';

type EmailReg2Props = {
  navigation: NavigationProp<any>; // Replace `any` with a more specific navigation type if available
};

const EmailReg2: React.FC<EmailReg2Props> = ({ navigation }) => {
  const [regEmail, setRegEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const { registerWithEmail } = useAuthStore();
  const { setEmail, setFName, setLName, setProfilePic } = useProfileStore();

  const updateProfile = (userData: any, isNewUser: boolean) => {
    if (!userData) return;
    if (isNewUser) {
      navigation.navigate('BottomNav');
    } else {
      userData.email && setEmail(userData.email);
      userData.given_name && setFName(userData.given_name);
      userData.family_name && setLName(userData.family_name);
      userData.picture && setProfilePic(userData.picture);
      navigation.navigate('Register');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword || !password) return;
    try {
      const u = await registerWithEmail(regEmail, password); //Where is additionalUserInfo coming from? It's not the store
      if (u?.additionalUserInfo?.profile) {
        updateProfile(u.additionalUserInfo.profile, u.additionalUserInfo.isNewUser);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.hr} />
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Email*</Text>
            <TextInput
              placeholderTextColor="#c7c7c7"
              placeholder="Enter email"
              style={[styles.input, styles.email]}
              onChangeText={e => setRegEmail(e)}
              value={regEmail}
            />
          </View>
          <View style={styles.hrI} />
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Password*</Text>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#c7c7c7"
              placeholder="Enter password"
              style={styles.input}
              onChangeText={e => setPassword(e)}
              value={password}
            />
          </View>
          <View style={styles.hrI} />
          <View style={styles.row}>
            <Text style={styles.inputLabel}>Confirm*</Text>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#c7c7c7"
              placeholder="Confirm password"
              style={[styles.input, styles.confirm]}
              onChangeText={e => setConfirmPassword(e)}
              value={confirmPassword}
            />
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => handleRegister()}>
            <Text style={styles.registerButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmailReg2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    // backgroundColor: 'rgba(0,0,0,0.5)'
  },
  label: {
    justifyContent: 'center',
    textAlign: 'center',
    // flex: 2,
    fontSize: 18,
    fontWeight: '500',
  },
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hrI: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 25,
    marginRight: 25,
  },
  header: {
    marginBottom: 10,
    textAlign: 'left',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    flex: 1,
  },
  space: {
    flex: 1,
  },
  form: {
    width: 330,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 11,
    paddingLeft: 25,
    paddingRight: 25,
  },
  inputLabel: {
    fontSize: 18,
    marginRight: 20,
  },
  input: {
    width: 200,
    fontSize: 18,
    textAlign: 'left',
  },
  email: {
    marginLeft: 35,
  },
  confirm: {
    marginLeft: 13,
  },
  footer: {
    marginTop: 25,
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  registerButton: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#0d90fc',
  },
  backText: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    color: '#0d90fc',
  },
  view: {
    padding: 1
  }
});
