// Remove Long Line before Gender, FavAnimals, and Charity
// Move statement below the line for zip code
// Fix buttons

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';

import CharityPopUp from './CharityPopUp';
import CityList from './OptionLists/CityList';
import DobList from './OptionLists/DobList';
import EducationList from './OptionLists/EducationList';
import FavAnimalList from './OptionLists/FavAnimalList';
import FavFoodList from './OptionLists/FavFoodList';
import GenderList from './OptionLists/GenderList';
import MaritalStatusList from './OptionLists/MaritalStatusList';
import SearchPopUp from './SearchPopUp';
import SegmentedPicker from 'react-native-segmented-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {useProfileStore} from '../../store';

interface RegisterFormProps {
  type: string;
  initialProfilePic: string;
  initialFName: string;
  initialLName: string;
  initialCities: string;
  initialGender: string;
  initialAge: { month: string; day: string; year: string };
  initialMaritalStatus: string;
  initialEducation: string;
  initialFavAnimal: string;
  initialFavFood: string;
  initialCharity: string;
}

const RegisterForm:React.FC<RegisterFormProps> = ({
  type,
  initialProfilePic,
  initialFName,
  initialLName,
  initialCities,
  initialGender,
  initialAge,
  initialMaritalStatus,
  initialEducation,
  initialFavAnimal,
  initialFavFood,
  initialCharity,
}) => {
  const [profilePic, setProfilePic] = useState(initialProfilePic);
  const [fName, setFName] = useState(initialFName);
  const [lName, setLName] = useState(initialLName.substring(0,1));
  const [cities, setCities] = useState(initialCities);
  const [gender, setGender] = useState(initialGender);
  const [age, setAge] = useState(initialAge);
  const [maritalStatus, setMaritalStatus] = useState(initialMaritalStatus);
  const [education, setEducation] = useState(initialEducation);
  const [favAnimal, setFavAnimal] = useState(initialFavAnimal);
  const [favFood, setFavFood] = useState(initialFavFood);
  const [charity, setCharity] = useState(initialCharity);
  const [profileUri, setProfileUri] = useState(initialProfilePic);

  const genderRef = useRef<any>(null);
  const dobRef = useRef<any>(null);
  const msRef = useRef<any>(null);
  const edRef = useRef<any>(null);

  const navigation = useNavigation();
  const profileStore = useProfileStore();

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => { //pick options
      if (response.assets) {
        setProfilePic(response.assets[0].uri);
        setProfileUri(response.assets[0].uri);
      } else {
        setProfilePic(null);
        setProfileUri('');
      }
    });
  };

  const InputName = ({
    text,
    maxLength,
    placeholder,
    mySetState,
    required,
    value,
  }) => {
    const [inputText, setInputText] = useState(value);
    return (
      <View style={[styles.rowName, {paddingLeft: 5}]}>
        <Text style={styles.label}>
          {text}
          {required && '*'}
        </Text>
        <TextInput
          style={[styles.input, styles.nameInput]}
          key={placeholder}
          placeholderTextColor="#c7c7c7"
          textAlign="left"
          maxLength={maxLength}
          placeholder={placeholder}
          onChangeText={e => setInputText(e)}
          onBlur={() => mySetState(inputText)}
          value={inputText}
        />
      </View>
    );
  };

  const InputWSegmentPicker = ({
    type,
    text,
    selection,
    myState,
    setMyState,
    Seg,
    placeholder,
    idx,
    required,
    list,
  }) => {
    const [visible, setVisible] = useState(false);

    const handlePress = e => {
      visible ? setMyState(e) + setVisible(false) : setVisible(true);
    };

    const displayText = selection => {
      const maxLength = 13;
      let displayText = '';
      if (myState === '' && placeholder) {
        displayText = placeholder;
      } else if (selection === '') {
        displayText = selection;
      } else if (text === 'City') {
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
      } else {
        displayText = selection;
      }
      return displayText;
    };

    return (
      <View style={styles.row} key={idx}>
        <Text style={styles.label}>
          {text}
          {required && '*'}
        </Text>

        <TouchableOpacity activeOpacity={0.4} onPress={e => handlePress(e)}>
          <Text
            key={`${idx}_input`}
            style={[
              styles.input,
              type === 'New' && styles.edit,
              myState === '' ? styles.placeholder : null,
            ]}>
            {displayText(selection)}
          </Text>
        </TouchableOpacity>

        {Seg ? (
          <SegmentedPicker
            size={0.35}
            ref={Seg.ref}
            visible={visible}
            onCancel={() => setVisible(false)}
            onConfirm={selections => handlePress(selections)}
            options={Seg.options}
            defaultSelections={ myState ? myState : Seg.defaultSelections }
          />
        ) : text === 'Charity' ? (
          <CharityPopUp
            visible={visible}
            currentSelection={charity}
            confirmed={(inputField, text) =>
              setMyState(text) + setVisible(false)
            }
            cancel={() => setVisible(false)}
          />
        ) : (
          <SearchPopUp
            visible={visible}
            type={text}
            text={text}
            currentInput={myState}
            confirmed={(inputField, text) =>
              setMyState(text) + setVisible(false)
            }
            cancel={() => setMyState(false)}
            list={list}
          />
        )}
      </View>
    );
  };

  const InputNumber = ({
    text,
    type,
    maxLength,
    setMyState,
    placeholder,
    required,
    idx,
    value,
    ref,
  }) => {
    const [inputText, setInputText] = useState(value);
    return (
      <View style={styles.row} key={idx}>
        <Text style={styles.label}>
          {text}
          {required && '*'}
        </Text>
        <TextInput
          maxLength={maxLength}
          key={`${idx}_input`}
          keyboardType="number-pad"
          returnKeyType="done"
          style={[styles.input, type !== 'New' && styles.edit]}
          placeholder={placeholder}
          onChangeText={e => setInputText(e)}
          onBlur={() => setMyState(inputText)}
          value={inputText}
          ref={ref}
        />
      </View>
    );
  };

  

  const inputList = [
    {
      title: "We don't share any info outside of the app",
      components: [
        {
          type: type,
          text: 'City',
          required: true,
          selection: profileStore.city,
          myState: profileStore.city,
          setMyState: profileStore.setCity,
          placeholder: 'Enter',
          list: CityList,
        },
        {
          type: type,
          text: 'Birthday',
          required: true,
          selection: `${profileStore.age.month} ${profileStore.age.day} ${profileStore.age.year}`,
          myState: profileStore.age,
          setMyState: profileStore.setAge,
          placeholder: 'MM/DD/YYYY',
          Seg: {
            ref: dobRef,
            options: DobList,
            defaultSelections: {month: 'Mar', day: '3', year: '2002'},
          },
        },
      ],
    },
    {
      title: 'Boring marketing stuff to find more players',
      components: [
        {
          type: type,
          text: 'Gender',
          required: false,
          selection: profileStore.gender.gender,
          myState: profileStore.gender,
          setMyState: profileStore.setGender,
          placeholder: 'Select',
          Seg: {
            ref: genderRef,
            options: GenderList,
            defaultSelections: {gender: 'Non-binary'},
          },
        },
        {
          type: type,
          text: 'Marital Status',
          required: false,
          selection: profileStore.maritalStatus.maritalStatus,
          myState: profileStore.maritalStatus,
          setMyState: profileStore.setMaritalStatus,
          placeholder: 'Select',
          Seg: {
            ref: msRef,
            options: MaritalStatusList,
            defaultSelections: {maritalStatus: 'Married'},
          },
        },
        {
          type: type,
          text: 'Education',
          required: false,
          selection: profileStore.education.education,
          myState: profileStore.education,
          setMyState: profileStore.setEducation,
          placeholder: 'Select',
          Seg: {
            ref: edRef,
            options: EducationList,
            defaultSelections: {education: 'Some College'},
          },
        },
      ],
    },
    {
      title: 'You be you! We love everyone',
      components: [
        {
          type: type,
          text: 'FavAnimal',
          required: true,
          selection: profileStore.favAnimal,
          myState: profileStore.favAnimal,
          setMyState: profileStore.setFavAnimal,
          placeholder: 'Enter',
          list: FavAnimalList,
        },
        {
          type: type,
          text: 'FavFood',
          required: true,
          selection: profileStore.favFood,
          myState: profileStore.favFood,
          setMyState: profileStore.setFavFood,
          placeholder: 'Enter',
          list: FavFoodList,
        },
      ],
    },
    {
      title: 'When you win, so does your charity',
      components: [
        {
          type: type,
          text: 'Charity',
          required: true,
          selection: profileStore.charity,
          myState: profileStore.charity,
          setMyState: profileStore.setCharity,
          placeholder: 'Select',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sections}>
        <View style={styles.infoContent}>
          <View style={styles.profileImgSection}>
            <TouchableOpacity activeOpacity={0.4} onPress={handleChoosePhoto}>
              <View style={styles.profileIcon}>
                {/* Still need to figure out how we are going to store images, whether its locally in the phone, or in the cloud. Since the leaderboard will be displaying other users images we might have to store in the cloud, but not sure the FireBase process for that. */}
                {profileUri !== '' ? (
                  <Image style={styles.proImg} source={{uri: profileUri}} />
                ) : profileStore.fName.length > 0 ||
                  profileStore.lName.length > 0 ? (
                  <Text style={styles.initials}>
                    {profileStore.fName[0]}
                    {profileStore.lName[0]}
                  </Text>
                ) : (
                  <Image
                    style={styles.proImg}
                    source={require('../../assets/Images/iosAppLogo.png')}
                  />
                )}
              </View>
            </TouchableOpacity>
            {/* Touchable text for adding or editing photo */}
            <TouchableOpacity activeOpacity={0.4} onPress={handleChoosePhoto}>
              <Text style={styles.upload}>
                {profileUri == '' ? 'Add' : 'Edit'} Photo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.name}>
            <InputName
              type={type}
              text={'First Name'}
              maxLength={14}
              placeholder={'Name'}
              mySetState={profileStore.setFName}
              value={profileStore.fName}
            />
            <View style={styles.hrName} />
            <InputName
              type={type}
              text={'Last Initial'}
              maxLength={1}
              placeholder={'Initial'}
              mySetState={profileStore.setLName}
              value={profileStore.lName}
            />
          </View>
        </View>
        <View style={styles.hr} />
      </View>

      {inputList.map(({title, components}, idx) => {
        return (
          <View style={styles.sections} key={idx}>
            <Text style={title ? styles.statement : styles.noStatement}>
              {title}
            </Text>
            <View style={styles.content}>
              {components.map((component, idx) => {
                return (
                  <Fragment key={idx}>
                    <View style={styles.hrI} />
                    <InputWSegmentPicker
                        type={component.type}
                        text={component.text}
                        required={component.required}
                        selection={component.selection}
                        onPress={component.onPress}
                        myState={component.myState}
                        setMyState={component.setMyState}
                        placeholder={component.placeholder}
                        Seg={component.Seg}
                        list={component.list}
                        idx={idx}
                      />

                    {idx + 1 === components.length && (
                      <View style={styles.hr} />
                    )}
                  </Fragment>
                );
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 5,
  },
  nameLabel: {
    fontSize: 18,
    marginLeft: 0,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  hrI: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 40,
    marginRight: 42,
  },
  hrName: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 12,
    marginRight: 20,
  },
  profileIcon: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f36b26',
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  proImg: {
    width: '100%',
    height: '100%',
  },
  infoContent: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 25,
    marginRight: 25,
  },
  profileImgSection: {
    width: '18%',
  },
  initials: {
    fontSize: 40,
  },
  name: {
    width: '70%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 11,
    marginHorizontal: 40,
  },
  rowName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 11,
    marginHorizontal: 11,
  },
  width: {
    width: '70%',
  },
  statement: {
    width: '100%',
    fontSize: 12,
    color: 'gray',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 40,
  },
  noStatement: {
    marginTop: -8,
  },
  input: {
    fontSize: 18,
    textAlign: 'left',
    width: 180,
    marginRight: 0,
  },
  nameInput: {
    width: 120,
  },
  placeholder: {
    color: '#c7c7c7',
  },
  upload: {
    // fontSize: 10,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
  edit: {
    marginLeft: 5,
  },

  content: {
    fontSize: 20,
  },
  sections: {
    padding: 1
  }
});
