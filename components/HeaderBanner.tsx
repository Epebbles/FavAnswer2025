import { Image, StyleSheet, Text, View } from 'react-native';


interface HeaderBannerProps {
    Title?: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ Title }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>
            {Title && <Text style={styles.title}>{Title}</Text>}
        </View>
    );
};

export default HeaderBanner;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
    },

    image : {
        width: 180,
        height: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5,
      },
});
