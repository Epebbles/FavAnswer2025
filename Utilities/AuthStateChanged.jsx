// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

// import auth from '@react-native-firebase/auth';

// function AuthApp() {
//   // Set an initializing state while Firebase connects
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
//   // Handle user state changes
//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);
//     if (initializing) return null;
//     if (!user) {
//         return (
//             <View>
//                 <Text>Login</Text>
//             </View>
//         );
//     }
//     return (
//         <View>
//             <Text>Bye Felicia {user.email}</Text>
//         </View>
//     );
// }

// export default AuthApp;
