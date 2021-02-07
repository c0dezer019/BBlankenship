const data = [
  {
    languages: [
      {
        name: 'HTML5',
        image: 'images/tech_icons/html5.png',
      },
      {
        name: 'CSS3',
        image: 'images/tech_icons/css3.png',
      },
      {
        name: 'Javascript',
        image: 'images/tech_icons/javascript.png',
      },
      {
        name: 'Python',
        image: 'images/tech_icons/python.png',
      },
    ],
    fnl: [
      {
        name: 'Bootstrap',
        image: 'images/tech_icons/bootstrap.png',
      },
      {
        name: 'Next.js',
        image: 'images/tech_icons/nextjs.png',
      },
      {
        name: 'EJS',
        image: '',
      },
      {
        name: 'Express.js',
        image: '',
      },
      {
        name: 'Flask',
        image: 'images/tech_icons/flask.png',
      },
      {
        name: 'Node.js',
        image: 'images/tech_icons/nodejs.png',
      },
      {
        name: 'Material UI',
        image: 'images/tech_icons/mui.png',
      },
    ],
    database: [
      {
        name: 'PostgreSQL',
        image: 'images/tech_icons/postgresql.png',
      },
      {
        name: 'Sequelize',
        image: 'images/tech_icons/sequelize.png',
      },
    ],
    cloud: [
      {
        name: 'Azure',
        image: 'images/tech_icons/azure.png',
      },
    ],
    os: [
      {
        name: 'Fedora',
        image: 'images/tech_icons/fedora.png',
      },
      {
        name: 'Kali',
        image: '',
      },
      {
        name: 'Ubuntu',
        image: '',
      },
      {
        name: 'Windows',
        image: '',
      },
    ],
  },
  {
    contactInfo: {
      discord: {
        user: 'c0dezer019#4224',
        url: 'https://discordapp.com/users/c0dezer019#4224',
        image: 'images/social_media/discord.png',
      },
      email: {
        address: 'c0dezer019@zohomail.com',
        url: 'mailto:c0dezer019@zohomail.com',
        image: 'images/social_media/email.png',
      },
      gitHub: {
        user: 'c0dezer019',
        url: 'https://github.com/c0dezer019',
        image: 'images/tech_icons/octocat.png',
      },
      linkedIn: {
        user: 'brian-blankenship',
        url: 'https://www.linkedin.com/in/brian-blankenship',
        image: 'images/social_media/linkedin.png',
      },
      reddit: {
        user: 'MrChurch2015',
        url: 'https://www.reddit.com/user/MrChurch2015',
        image: 'images/social_media/reddit.png',
      },
      twitter: {
        user: 'c0dezer019',
        url: 'https://twitter.com/c0dezer019',
        image: 'images/social_media/twitter.png',
      },
    },
    get contactDossier() {
      return this.contactInfo;
    },
    set updateDiscord(newUser) {
      this.discord.user = newUser;
    },
    set updateEmail(newEmail) {
      this.email.email = newEmail;
    },
    set updateGitHub(newUser) {
      this.gitHub.user = newUser;
    },
    set updateLinkedIn(newUser) {
      this.linkedIn.user = newUser;
    },
    set updateReddit(newProfile) {
      this.reddit.user = newProfile;
    },
    set updateSkype(newUser) {
      this.skype.user = newUser;
    },
    set updateTwitter(newUser) {
      this.twitter.user = newUser;
    },
  },
  {
    projects: [
      {
        name: 'battleship',
        description: 'A clone of the classic game, Battleship. It is a turn-based game where each player has their '
          + 'own play field represented by a grid. The player places pieces in random locations on the grid in random '
          + '90 degree rotations. Once pieces are set for both players, the game begins. On each turn, the player '
          + 'selects a random grid square on the opponent\'s grid to try and hit an enemy ship. The goal is to sink '
          + 'all enemy ships to win.',
        screenshot: 'https://i.imgur.com/D8EB2VS.png?1',
        tag: 'BS',
        tech: ['HTML5', 'CSS', 'Javascript'],
        url: 'https://battleship.bblankenship.me',
      },
      {
        name: '404AnswerNotFound',
        description: 'This app was inspired by Quora and StackedOverflow and is a Q&A site purely dedicated to the '
          + 'programming world. I developed this with a small team of engineers, which I was the project lead. Our '
          + 'goal was to create a cleaner and more lenient app then that of StackOverflow or Quora.',
        screenshot: 'https://i.imgur.com/kw5mfc6.png',
        tag: 'ANF',
        tech: ['Azure', 'Bootstrap', 'Express.js', 'EJS', 'PostgreSQL'],
        url: 'https://404anf.azurewebsites.net/',
      },
      {
        name: 'stormcaster',
        description: 'Stormcaster is a WIP weather app that is the first phase to a much larger project. My goal' +
          ' with this app is to make it a convenient place to get weather conditions and forecast for a user\'s' +
          ' current and searched locations as well as provide some jokes to provide some humor with each update.',
        screenshot: 'https://i.imgur.com/eRrYTGb.png',
        tag: 'SC',
        tech: ['Axios', 'Material-UI', 'Fetch', 'React', 'SASS'],
        API: ['OpenWeatherMap', 'canhazdadjoke'],
        url: 'https://stormcaster.bblankenship.me',
      },
    ],
  },
  {
    workInProgress: [
      {
        name: 'Project Meteorstorm',
        description: 'Project Meteorstorm is the parent project for Stormcaster. The goal of this app is to provide' +
          ' total information in regards to meteorology including Earth and space weather, environmental news, and' +
          ' astronomical data such as NEO tracking (Near-Earth Objects) and meteor storms.',
        plannedTech: ['Axios', 'React', 'React Native', 'XState', 'RequireJS or Webpack', 'SASS'],
      },
      {
        name: 'The Coffee Shop',
        description: '',
      },
    ],
  },
];

export default data;
