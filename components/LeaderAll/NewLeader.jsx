import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import MonthlyLeader from './MonthlyLeader';
// import { firestore } from "../../firebaseconfig"
//
const NewLeader = () => {
// const collectionRef = firestore().collection('LeaderBoard')
const dailyQuestion = 'This is the maximum amount of characters to ask in a question';
const dailyDate = 'Feb 19, 2023';
// console.log(collectionRef)
/*
import TODAY from ../../firebaseconfig.js
get users profile on app load?
if we get it on app load then we can write all the data using Zustand.
move this function to play?
const handleAddLeaderBoard = () => {
firebase()
.collection("Leaderboard")
.add({
user_id: auth().currentUser.uid,
firstName_lastInitial: 'Cedric N', -> this changes to profileStore.firstName_lastInitial
profile_image_url: '', -> this changes to profileStore.profileURI
city: 'vegas', -> this changes to profileStore.city
score: 978,
age: 26,
gender: 'Female', -> this changes to profileStore.gender
maritalStatus: 'Single', -> this changes to profileStore.maritalStatus
answer: answer -> if this is created on play page
})
}
this is what date looks like July 22, 2023
const handleGetDailyLeaderboard = () > {
firebase().collection("Leaderboard")
.where("Date", "==", `${selectedDate}`)
.orderBy("score","desc")
.limit(20)
.then((response) => {
setLeader({response.data()})
console.log(response.data())
}).catch((error) => {
console.error(error)
})
}
currentday - birthdate
*/


const persons = [
{
user_id: '1',
firstName_lastInitial: 'Cedric N',
profile_image_url: '',
city: 'vegas',
score: 978,
age: 26,
gender: 'Female',
maritalStatus: 'Single',
answer: 'jalapefio- spicy and can handle',
},
{
user_id: '2',
firstName_lastInitial: 'Sarah E',
profile_image_url:'',
city: 'Appleton',
score: 968,
age: 29,
gender: 'Female',
maritalStatus: 'Single',
answer: 'like onions and the crunch. Many people do not know there are is so many different types',
},
{
user_id: '3',
firstName_lastInitial: 'Brittany C',
profile_image_url: '',
city: 'mg',
score: 964,
age: 19,
gender: 'Female',
maritalStatus: 'Married',
answer: 'carrots because | like the way they are mushed when cooked',
},
{
user_id: '4',
firstName_lastInitial: 'Jenifer T',
profile_image_url:'',
city: 'Waukesha',
score: 929,
age: 31,
gender: 'Female',
maritalStatus: 'Single',
answer: 'brocilli. I like the taste',
},
];




const sortedPersons = [...persons].sort((a, b) => b.score - a.score);
const [showButton, setShowButton] = useState(true); // State to control the button visibility
const [showMonthly, setShowMonthly] = useState(true);


return (
<View style={styles.container}>
<Text style={styles.title}>Leaderboard</Text>
<Text style={styles.date}>{dailyDate}</Text>
<View style={styles.questionContainer}>
<Text style={styles.question}>{dailyQuestion}</Text>
</View>
<ScrollView style={styles.leaders}>
{sortedPersons.map((person) => (
<View key={person.user_id} style={styles.rowContainer}>
<View style={styles.personContainer}>
<Text style={styles.personAnswer}>{person.answer}</Text>
<View style={styles.answerLine} />
<View style={styles.personDetailsContainer}>
<View style={styles.personNameAgeContainer}>
<Text style={styles.personName}>{person.firstName_lastInitial}</Text>
<Text style={styles.personDetails}>{person.age}</Text>
</View>
<View style={styles.maritalStatusCityContainer}>
<Text style={styles.personDetails}>{person.maritalStatus}</Text>
<Text style={styles.personDetails}>{person.city}</Text>
</View>
</View>
</View>
<Text style={styles.personScore}>{person.score}</Text>
</View>
))}
</ScrollView>




<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.toggleButton}>
<Text style={styles.toggleButtonText}>Toggle</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.monthlyButton}>
<Text style={styles.toggleButtonText}>Monthly</Text>
</TouchableOpacity>
</View>
</View>
);
};




const styles = StyleSheet.create({
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 20,
},
toggleButton: {
backgroundColor: 'pink',
padding: 10,
borderRadius: 5,
flex: 1,
marginRight: 10,
},
monthlyButton: {
backgroundColor: 'grey',
padding: 10,
borderRadius: 5,
flex: 1,
marginLeft: 10,
},
toggleButtonText: {
fontSize: 16,
color: 'black',
textAlign: 'center',
},
container: {
flex: 1,
backgroundColor: '#fff',
paddingVertical: 20,
paddingHorizontal: 0,
},
title: {
textAlign: 'center',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 5,
},
date: {
textAlign: 'center',
fontSize: 16,
marginBottom: 10,
},
questionContainer: {
backgroundColor: '#ff8a58',
padding: 10,
marginBottom: 20,
},
question: {
fontSize: 20,
textAlign: 'center',
marginBottom: 20,
color: 'white',
},
leaders: {
flex: 1,
},
rowContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
borderWidth: 1,
borderColor: 'black',
borderRadius: 5,
padding: 10,
marginBottom: 10,
},
personContainer: {


flex: 1,
},
personName: {
fontSize: 15,
fontWeight: 'bold',
marginTop: 3,
marginBottom: 5,
color: 'black',
},
personDetails: {
fontSize: 16,
marginBottom: 5,
color: 'black',
},
personAnswer: {
textAlign: 'center',
marginBottom: 5,
fontSize: 18,
color: 'black',
},
answerLine: {
borderBottomColor: 'black',
borderBottomWidth: 1,
marginBottom: 5,
},
personScore: {
fontSize: 20,
fontWeight: 'bold',
color: 'black',
},
personContainer: {
flex: 1,
},
personDetailsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
personNameAgeContainer: {
flexDirection: 'column',
marginRight: 10,
},
maritalStatusCityContainer: {
flexDirection: 'column',
},






});




export default NewLeader;



