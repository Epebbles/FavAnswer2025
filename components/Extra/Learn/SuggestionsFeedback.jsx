// import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import Rating from './Rating'
// import SubmitSuggestionButton from './SubmitSuggestionButton'

// const SuggestionsFeedback = ({navigation}) => {
//     const [charityName, setCharityName] = useState("")
//     const [charityWebsite, setCharityWebsite] = useState("")
//     const [question, setQuestion] = useState("")
//     const [feedbackRating, setFeedbackRating] = useState("")
//     const [feedbackDetails, setFeedbackDetails] = useState("")

//     const handleSelection = (text) => {
//         setFeedbackRating(text)
//     }

//     const handleSubmit = () => {
//         navigation.navigate('Leaderboard')
//     }

//     return (
//         <View style={styles.container}>
//             <ScrollView style={styles.details}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Suggestions & Feedback</Text>
//                 </View>
//                 <View style={styles.section}>
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionHeaderText}>Charity</Text>
//                     </View>
//                     <View style={styles.sectionDetails}>
//                         <Text style={styles.details}>We at FavAnswer are proud to support a wide range of many helpful and caring organizations. Please let us know which ones are important to you.</Text>
//                     </View>
//                     <View style={styles.charityInput}>
//                         <TextInput
//                             style={[styles.input, styles.height]}
//                             multiline={true}
//                             numberOfLines={3}
//                             blurOnSubmit={true}
//                             value={charityName}
//                             onChangeText={(e) => setCharityName(e)}
//                             placeholder="Suggest charity name"
//                             placeholderTextColor="#c7c7c7"
//                         />
//                         <TextInput
//                             style={styles.input}
//                             value={charityWebsite}
//                             onChangeText={(e) => setCharityWebsite(e)}
//                             placeholder="Charity website"
//                             placeholderTextColor="#c7c7c7"
//                         />
//                     </View>
//                 </View>
//                 <View style={styles.section}>
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionHeaderText}>FavAnswer Question</Text>
//                     </View>
//                     <View style={styles.sectionDetails}>
//                         <Text style={styles.details}>What do you think would be the coolest, most insightful and clever question we could ask? Remember, FavAnswer quiz questions have a 45 character count limit.</Text>
//                     </View>
//                     <View style={styles.charityInput}>
//                         <TextInput
//                             style={[styles.input, styles.height]}
//                             multiline={true}
//                             numberOfLines={3}
//                             blurOnSubmit={true}
//                             maxLength={45}
//                             value={question}
//                             onChangeText={(e) => setQuestion(e)}
//                             placeholder="Write here"
//                             placeholderTextColor="#c7c7c7"
//                         />
//                     </View>
//                 </View>
//                 <View style={styles.section}>
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionHeaderText}>General Feedback</Text>
//                     </View>
//                     <View style={styles.sectionDetails}>
//                         <Text style={styles.details}>How are we doing? Let us know where we are doing well and where we need help, we will do our best to build the best daily quiz for you and your friends.</Text>
//                     </View>
//                     <View style={styles.ratingSection}>
//                         <Text style={styles.ratingHeader}>Give us a rating!</Text>
//                         <View style={styles.hr}/>
//                         <View style={styles.rating}>
//                             <Rating icon="happy-outline" text="Great" selected={feedbackRating === "Great"? true : false} pressed={handleSelection}/>
//                         </View>
//                         <View style={styles.rating}>
//                             <Rating icon="emoticon-neutral-outline" text="Neutral" selected={feedbackRating === "Neutral"? true : false} pressed={handleSelection}/>
//                         </View>
//                         <View style={styles.rating}>
//                             <Rating icon="sad-outline" text="Poor" selected={feedbackRating === "Poor"? true : false} pressed={handleSelection}/>
//                         </View>
//                         <View style={styles.hr}/>
//                     </View>
//                     <View style={styles.charityInput}>
//                         <TextInput
//                             style={[styles.input, styles.height]}
//                             multiline={true}
//                             numberOfLines={4}
//                             blurOnSubmit={true}
//                             maxLength={45}
//                             value={feedbackDetails}
//                             onChangeText={(e) => setFeedbackDetails(e)}
//                             placeholder="Write here"
//                             placeholderTextColor="#c7c7c7"
//                         />
//                     </View>
//                 </View>
//                 <View style={styles.disclaimer}>
//                     <Text style={styles.disclaimerText}>Thank you for sharing your suggestions with us. It means a lot and helps us continue building a great experience for everyone.</Text>
//                 </View>
//                 <View style={styles.submit}>
//                     <SubmitSuggestionButton submit={handleSubmit}/>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// export default SuggestionsFeedback

// const styles = StyleSheet.create({
//     container : {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     header : {
//         flex: 0.2,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     title : {
//         fontSize: 24,
//         fontWeight: '500'
//     },
//     details : {
//         flex: 0.8,
//     },
//     section : {
//         flex: 1,
//     },
//     sectionHeader : {
//         flex: 1,
//         marginTop: 25,
//         marginBottom: 5,
//         paddingLeft: 15,
//         paddingRight: 15
//     },
//     sectionHeaderText : {
//         fontSize: 18,
//         fontWeight: '500'
//     },
//     sectionDetails : {
//         flex: 2,
//         paddingLeft: 15,
//         paddingRight: 15
//     },
//     details : {

//     },
//     input : {
//         borderWidth: StyleSheet.hairlineWidth,
//         borderRadius: 3,
//         marginTop: 3,
//         marginBottom: 3,
//         padding: 5
//     },
//     height : {
//         height: 60
//     },
//     charityInput : {
//         paddingLeft: 15,
//         paddingRight: 15,
//         marginTop: 20
//     },
//     ratingHeader : {
//         marginTop: 10,
//         marginBottom: 10,
//         paddingLeft: 15
//     },
//     rating : {
//         borderTopWidth: StyleSheet.hairlineWidth,
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         paddingLeft: 10
//     },
//     hr : {
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         width: '100%'
//     },
//     disclaimer : {
//         marginTop: 15,
//         paddingLeft: 15,
//         paddingRight: 15
//     },
//     disclaimerText : {

//     },
//     submit : {
//         marginTop: 25,
//         marginBottom: 25,
//         paddingLeft: '15%',
//         paddingRight: '15%'
//     }
// })
