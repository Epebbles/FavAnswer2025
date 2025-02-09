import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import SubmitSuggestionButton from './SubmitSuggestionButton';
import Dropdown from './Dropdown';
import LinearScale from './LinearScale';

import { auth, TODAY, TIME, firestore } from '../../firebaseconfig';

const SuggestionsFeedback = ({navigation}) => {
    const [charityDetails, setCharityDetails] = useState('');
    const [charityFavorite, setCharityFavorite] = useState('');
    const [questionDetails, setQuestionDetails] = useState('');
    const [feedbackHighlight, setFeedbackHighlight] = useState('');
    const [feedbackDetails, setFeedbackDetails] = useState('');
    const [feedbackRating, setFeedbackRating] = useState(null);
    const [userEmail, setUserEmail] = useState('');


    const handleSubmit = () => {
        firestore()
            .collection('FeedBack')
            .add({
                feedback_rating: feedbackRating,
                feedback_written: feedbackDetails,
                suggested_question: questionDetails,
                suggested_charityName: charityDetails,
                favCharityCategories: charityFavorite,
                email: userEmail,
                user_id: auth().currentUser.uid,
                submitedOn: TODAY,
                submitedTime: TIME,
            })
            .then(() => {
                setCharityDetails('');
                setCharityFavorite('');
                setQuestionDetails('');
                setFeedbackHighlight('');
                setFeedbackDetails('');
                setFeedbackRating(null);
                setUserEmail('');
                Alert.alert('Feedback submitted');
            })
            .catch((error) => {
                Alert.alert(`Oops Something went wrong heres what we got ${error}`);
            });
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.title}>Suggestions & Feedback</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>General Feedback</Text>
                    </View>
                    <View style={styles.sectionDetails}>
                        <Text>How likely are you to recommend using this app to your friends and family?</Text>
                    </View>
                    <View style={styles.sectionComponent}>
                        <LinearScale
                            min={0}
                            max={10}
                            selected={feedbackRating}
                            onSelect={setFeedbackRating}
                        />
                    </View>
                    <View style={styles.sectionSpace}/>
                    <View style={styles.sectionDetails}>
                        <Text>What is one thing we should do immediately to improve?</Text>
                    </View>
                    <View style={styles.sectionInput}>
                        <TextInput
                            style={[styles.input, styles.height]}
                            multiline={true}
                            blurOnSubmit={false}
                            numberOfLines={4}
                            maxLength={1000}
                            value={feedbackHighlight}
                            onChangeText={(e) => setFeedbackHighlight(e)}
                            placeholder="You should..."
                            placeholderTextColor="#c7c7c7"
                        />
                    </View>
                    <View style={styles.sectionSpace}/>
                    <View style={styles.sectionDetails}>
                        <Text>How are we doing? Let us know where we are doing well and where we need help, we will do our best to build the best daily quiz for you and your friends.</Text>
                    </View>
                    <View style={styles.sectionInput}>
                        <TextInput
                            style={[styles.input, styles.height]}
                            multiline={true}
                            blurOnSubmit={false}
                            numberOfLines={4}
                            maxLength={1000}
                            value={feedbackDetails}
                            onChangeText={(e) => setFeedbackDetails(e)}
                            placeholder="I think that..."
                            placeholderTextColor="#c7c7c7"
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>FavAnswer Question</Text>
                    </View>
                    <View style={styles.sectionDetails}>
                        <Text>What do you think would be the coolest, most insightful and clever question we could ask? Remember, FavAnswer quiz questions have a 65 character count limit.</Text>
                    </View>
                    <View style={styles.sectionInput}>
                        <TextInput
                            style={[styles.input, styles.height]}
                            multiline={true}
                            blurOnSubmit={false}
                            numberOfLines={4}
                            maxLength={65}
                            value={questionDetails}
                            onChangeText={(e) => setQuestionDetails(e)}
                            placeholder="My favorite..."
                            placeholderTextColor="#c7c7c7"
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Charity</Text>
                    </View>
                    <View style={styles.sectionDetails}>
                        <Text>What is your favorite kind of charity?</Text>
                    </View>
                    <View style={styles.sectionComponent}>
                        <Dropdown
                            selected={{charity: charityFavorite}}
                            onSelect={(selections) => setCharityFavorite(selections.charity)}
                            options={[
                                {
                                    key: 'charity',
                                    items: [
                                        {label: 'None', value: ''},
                                        {label: 'Animals', value: 'Animals'},
                                        {label: 'Arts & Culture', value: 'Arts & Culture'},
                                        {label: 'Civil Rights', value: 'Civil Rights'},
                                        {label: 'Climate & Environment', value: 'Climate & Environment'},
                                        {label: 'Education & Youth Development', value: 'Education & Youth Development'},
                                        {label: 'Health & Nutrition', value: 'Health & Nutrition'},
                                        {label: 'Housing & Homelessness', value: 'Housing & Homelessness'},
                                        {label: 'LGBTQ+', value: 'LGBTQ+'},
                                        {label: 'Mental Health', value: 'Mental Health'},
                                        {label: 'Military & Veterans Affairs', value: 'Military & Veterans Affairs'},
                                        {label: 'Religion & Spirituality', value: 'Religion & Spirituality'},
                                        {label: 'Science & Technology', value: 'Science & Technology'},
                                    ],
                                },
                            ]}
                        />
                    </View>
                    <View style={styles.sectionSpace}/>
                    <View style={styles.sectionDetails}>
                        <Text>We at FavAnswer are proud to support a wide range of many helpful and caring organizations. Please let us know which ones are important to you.</Text>
                    </View>
                    <View style={styles.sectionInput}>
                        <TextInput
                            style={[styles.input, styles.height]}
                            multiline={true}
                            blurOnSubmit={false}
                            numberOfLines={3}
                            maxLength={1000}
                            value={charityDetails}
                            onChangeText={(e) => setCharityDetails(e)}
                            placeholder="I'd like to suggest..."
                            placeholderTextColor="#c7c7c7"
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Superuser</Text>
                    </View>
                    <View style={styles.sectionDetails}>
                        <Text>Would you like to be a FavAnswer superuser? You can help us by providing other product and and experience feedback.</Text>
                        <View style={styles.sectionSpace}/>
                        <Text>If so, you can provide your email below:</Text>
                    </View>
                    <View style={styles.sectionInput}>
                        <TextInput
                            style={[styles.input]}
                            multiline={false}
                            blurOnSubmit={true}
                            returnKeyType="done"
                            maxLength={320}
                            value={userEmail}
                            onChangeText={(e) => setUserEmail(e)}
                            placeholder="Email address"
                            placeholderTextColor="#c7c7c7"
                        />
                    </View>
                </View>
                <View style={styles.submit}>
                    <SubmitSuggestionButton submit={handleSubmit}/>
                </View>
                <View style={styles.section}>
                    <Text style={styles.footerText}>Thank you for sharing your suggestions with us.{'\n'}It means a lot and helps us continue building a great experience for everyone!</Text>
                </View>
                <View style={styles.space}/>
            </ScrollView>
        </View>
    );
};


export default SuggestionsFeedback;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
    },
    header : {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 24,
        fontWeight: '500',
    },
    main : {
        paddingHorizontal: 25,
    },
    section : {
        flex: 1,
    },
    sectionHeader : {
        flex: 1,
        marginTop: 25,
        marginBottom: 10,
    },
    sectionHeaderText : {
        fontSize: 20,
        fontWeight: '500',
    },
    sectionComponent: {
        marginTop: 15,
    },
    sectionSpace : {
        height: 20,
    },
    input : {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
    },
    height : {
        height: 60,
    },
    sectionInput : {
        marginTop: 10,
    },
    ratingHeader : {
        marginTop: 20,
        marginBottom: 15,
    },
    rating : {
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 10,
    },
    hr : {
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
    },
    submit : {
        marginTop: 25,
        marginBottom: 25,
        paddingLeft: '15%',
        paddingRight: '15%',
    },
    space : {
        height: 25,
    },
    footerText : {
        textAlign: 'center',
        fontSize: 12,
        color: 'gray',
    },
});
