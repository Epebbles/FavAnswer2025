import { StyleSheet, Text, Image, ScrollView, View, Linking } from 'react-native';
import React from 'react';

const AboutUs = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.title}>About Us</Text>
                </View>
                <Text style={styles.textHeader}>Background</Text>
                <Text style={styles.text}>
                    FavAnswer was founded on a few related concepts {'\u2014'} that it's becoming harder to connect to each other these days, and also that online discussions are becoming more and more divisive.
                </Text>
                <Text style={styles.text}>
                    We hope to bring people closer together through playing this game and help us all understand that our differences are not as vast as they seem.
                </Text>
                <Text style={styles.textHeader}>Contributors</Text>
                <View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/ctolnai.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/ctolnai')}
                            >Chris Tolnai</Text>
                            {' '}was a first joiner {'\u2014'} decided technologies and setup the GitHub repository</Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/JonathanJCisneros.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/JonathanJCisneros')}
                            >Jonathan Cisneros</Text>
                            {' '}was one of the first to join and developed the initial front-end framework layouts, and designed the first screens</Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/Epebbles.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/Epebbles')}
                            >Evan Pebbles</Text>
                            {' '}has been with the project the longest and managed the back-end setup, including creating the sign-in authorization permissions
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/elliecombs.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/elliecombs')}
                            >Ellie Combs</Text>
                            {' '}managed the back-end setup integrating Firebase/Firestore and choose the right tools for future flexibility and functionality
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/truongdinhthien.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/truongdinhthien')}
                            >Thomas Truong</Text>
                            {' '}developed the initial front-end designs of most screens
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/HectorDNuno.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/HectorDNuno')}
                            >Hector Nuno</Text>
                            {' '}managed the pop-up modals, action sheets, and app intro.
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/HollyDraz.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/HollyDraz')}
                            >Holly Drazenovich</Text>
                            {' '}revised the profile screens and led project QA
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/jadewiegel.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/jadewiegel')}
                            >Jade Wiegel</Text>
                            {' '}iterated front-end design for the Vote and Play screens and developed the header and button components
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/johnryanmal.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/johnryanmal')}
                            >John Ryan Malanyaon</Text>
                            {' '}developed the front-end design for the Learn pages, as well as a Google Sheets interface to interact with Firebase
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/DFLLinton.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/DFLLinton')}
                            >Dominic Linton</Text>
                            {' '}wrote the initial scripts identifying answer pairs to be shown to uses, and worked on the scoring system
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/makbusher.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/makbusher')}
                            >Makayla Usher</Text>
                            {' '}designed the bottom navigation, sign-in page, and header
                        </Text>
                    </View>
                    <View style={styles.profile}>
                        <Image
                            style={styles.profileImage}
                            source={{uri: 'https://github.com/StevenMetz.png'}}
                        />
                        <Text style={styles.profileText}>
                            <Text
                                style={styles.link}
                                onPress={() => Linking.openURL('https://github.com/StevenMetz')}
                            >Steven Metz</Text>
                            {' '}worked on setting up the Firebase instance
                        </Text>
                    </View>
                </View>
                <Text style={styles.textHeader}>Contact Us</Text>
                <Text style={styles.text}>
                    To contact FavAnswer, please email{' '}
                    <Text style={styles.link}
                        // does not work on ios simulator, but should work on real device
                        onPress={() => Linking.openURL('mailto:dave@favanswer.com')}
                    >dave@favanswer.com</Text>.
                </Text>
                <Text style={styles.text}>
                    To give us your ideas, please visit{' '}
                    <Text style={styles.link}
                        // does not work on ios simulator, but should work on real device
                        onPress={() => { navigation.navigate('Learn'); navigation.navigate('Suggestions & Feedback');}}
                    >Suggestions & Feedback</Text>.
                </Text>
                <View style={styles.space}/>
            </ScrollView>
        </View>
    );
};

export default AboutUs;

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
    space : {
        height: 25,
    },
    indent : {
        paddingLeft: 25,
    },
    main : {
        paddingHorizontal: 25,
    },
    textHeader : {
        fontSize: 20,
        marginTop: 25,
        fontWeight: '500',
    },
    text : {
        marginTop: 10,
    },
    link : {
        color: 'blue',
    },
    profile : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    profileText : {
        flex: 1,
        marginLeft: 10,
    },
    profileImage : {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
