// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


// const LearnButton = ({icon, color, text, navigation}) => {
//     const handlePress = () => {
//         navigation.navigate(text)
//     }

//     return (
//         <TouchableOpacity style={styles.container} onPress={handlePress}>
//             <View style={styles.container}>
//                 <View style={styles.left}>
//                     <View style={[styles.imageContainer, {backgroundColor: color}]}>
//                         <FontAwesome name={icon} size={15} color='white'/>
//                     </View>
//                 </View>
//                 <View style={styles.center}>
//                     <Text style={styles.name}>{text}</Text>
//                 </View>
//                 <View style={styles.right}>
//                     <MaterialIcons name="keyboard-arrow-right" size={30} color="#0d90fc"/>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

// export default LearnButton

// const styles = StyleSheet.create({
//     container : {
//         flex: 1,
//         flexDirection: 'row',
//         width: '100%',
//     },
//     left : {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     imageContainer : {
//         height: 30,
//         width: 30,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 3
//     },
//     center : {
//         flex: 5,
//         justifyContent: 'center'
//     },
//     name : {
//         fontSize: 18
//     },
//     right : {
//         flex: 1,
//         justifyContent: 'center'
//     }
// })
