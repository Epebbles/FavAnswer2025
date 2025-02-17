import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
const MonthlyLeader = () => {
const [selectedMonth, setSelectedMonth] = useState(1);

const months = [
{
id: 1,
name: 'January',
days: 30,
},
{
id: 2,
name: 'February',
days: 29,
},
{
id: 3,
name: 'March',
days: 31,
},
{
id: 4,
name: 'April',
days: 30,
},
{
id: 5,
name: 'May',
days: 31,
},
{
id: 6,
name: 'June',
days: 30,
},
{
id: 7,
name: 'July',
days: 31,
},
{
id: 8,
name: 'August',
days: 31,
},
{
id: 9,
name: 'September',
days: 30,
},
{
id: 10,
name: 'October',
days: 31,
},
{
id: 11,
name: 'November',
days: 30,
},
{
id: 12,
name: 'December',
days: 31,
},
];


const renderMonths = () => {
return (
<ScrollView
contentContainerStyle={styles.monthsContainer}
horizontal
showsHorizontalScrollIndicator={false}
>
{months.map((month) => (
<TouchableOpacity
key={month.id}
style={[
styles.monthButton,
selectedMonth === month.id && styles.selectedMonthButton,
]}
onPress={() => setSelectedMonth(month.id)}
>
<Text
style={[
styles.monthButtonText,
selectedMonth === month.id && styles.selectedMonthButtonText,
]}
>
{month.name}
</Text>
</TouchableOpacity>
))}
</ScrollView>
);
};

const renderDays = () => {
    const selectedMonthObj = months.find((month) => month.id === selectedMonth);
    if (selectedMonthObj) {
      const days = Array.from({ length: selectedMonthObj.days }, (_, index) => index + 1);
      return (
        <ScrollView contentContainerStyle={styles.daysContainer} showsVerticalScrollIndicator={false}>
          {days.map((day) => (
            <View key={day} style={styles.day}>
              <TouchableOpacity style={styles.stretchedDay} onPress={() => handleDayPress(day)}>
                <Text style={styles.dayText}>{day}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      );
    }
    return null;
  };
const handleDayPress = (day) => {
// Handle the button press for the selected day
console.log(`Day ${day} pressed`);
};


return (
<View style={styles.container}>
<View style={styles.monthsContainer}>
{renderMonths()}
</View>
<View style={styles.leaderboardContainer}>
<Text style={styles.leaderboardTitle}>HELLO</Text>
</View>
<View style={styles.daysContainer}>
<ScrollView
contentContainerStyle={{ ...styles.dayButtonContainer, marginTop: 50 }} // Adjust marginTop as needed
showsVerticalScrollIndicator={false}
>
{renderDays()}
</ScrollView>
</View>
</View>
);
};
const styles = StyleSheet.create({
outerContainer: {
flex: 1,
marginTop: 50, // Adjust this value to shift the content down
},
daysContainer: {
marginTop: 10,
flexDirection: 'column',
alignItems: 'center',
},
dayButtonContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'center',
},
leaderboardContainer: {
backgroundColor: 'blue',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
paddingHorizontal: 20,
paddingTop: 10,
},
leaderboardTitle: { // Use this style for the leaderboard title
flex: 7, // Change this to a higher value
backgroundColor: 'blue',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
paddingHorizontal: 20,
paddingTop: 20,
},
title: {
textAlign: 'center',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 0,
},
separator: {
borderBottomColor: 'gray',
borderBottomWidth: 1,
marginBottom: 10,
},
monthsContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'flex-start',
paddingBottom: 5, // Adjust this value to reduce the gap
marginBottom: 10,
},
monthButton: {
width: 80,
height: 30,
backgroundColor: 'gray',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 5,
marginVertical: 5,
marginRight: 5,
borderWidth: 1,
borderColor: 'black',
},
selectedMonthButton: {
backgroundColor: 'white',
},
monthButtonText: {
fontSize: 14,
color: 'white',
},
selectedMonthButtonText: {
color: 'black',
},
daysContainer: {
marginTop: 0,
flexDirection: 'column',
alignItems: 'center',
},
dayRow: {
    flexDirection: 'row',

 },
day: {
width: 30,
height: 30,
backgroundColor: 'black',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
margin: 5,
},
dayText: {
fontSize: 14,
color: 'white',
},
dayButtonContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'center',
},
dayButton: {
width: 40,
height: 40,
backgroundColor: 'black',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 20,
margin: 5,
},
dayButtonText: {
fontSize: 16,
color: 'white',
},
});




export default MonthlyLeader;



