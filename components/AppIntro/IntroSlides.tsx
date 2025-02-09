const IntroSlides = [
  {
    id: '1',
    title: 'Fun, Daily\nQuizes',
    description: 'A New Short-Answer Quiz is Available Each Day.',
    image: require('../../assets/Intro/VoteScreen-250px.png'),
    styles: {
      textAlign: 'left',

      imagePosition: {
        transform: [{rotate: '15deg'}],
        position: 'absolute',
        top: '32%',
        left: '12%',
      },

      blobPosition: {
        position: 'absolute',
        top: '40%',
        left: '5%',
      },
    },
  },

  {
    id: '2',
    title: 'Two Ways\nto Play',
    description:
      'You can Submit Your FavAnswer to be Voted on... or Vote for others.',
    image: require('../../assets/Intro/SubmitAnswer-250px.png'),
    styles: {
      textAlign: 'right',

      imagePosition: {
        transform: [{rotate: '-15deg'}],
        position: 'absolute',
        bottom: '24%',
      },

      blobPosition: {
        position: 'absolute',
        top: '13%',
      },
    },
  },

  {
    id: '3',
    title: 'Daily Winner\nEarns $',
    description:
      'Each day, the Top Voted FavAnswer Wins and gets to select a Charity to donate to',
    image: require('../../assets/Intro/CharitySelection-250px.png'),
    styles: {
      textAlign: 'center',

      imagePosition: {
        transform: [{rotate: '5deg'}],
        position: 'absolute',
        top: '30%',
      },

      blobPosition: {
        position: 'absolute',
        top: '20%',
        left: '20%',
      },
    },
  },
];

export default IntroSlides;
