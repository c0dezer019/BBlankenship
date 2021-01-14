const projectData = [
  {
    languages: ['HTML', 'CSS', 'JS', 'Python'],
    frameworksAndLibraries: [
      'React.js',
      'Next.js',
      'EJS',
      'Express.js',
      'Flask',
      'Node.js',
      'Bootstrap',
      'MaterialUI',
    ],
    database: ['PostgreSQL', 'Sequelize', 'ORM'],
    cloud: ['Azure'],
    os: ['Fedora', 'Kali', 'Ubuntu', 'Windows 10'],
  },
  {
    projects: [
      {
        name: 'Battleship',
        description: 'A clone of the classic game, Battleship. It is a turn-based game where each player has their '
          + 'own play field represented by a grid. The player places pieces in random locations on the grid in random '
          + '90 degree rotations. Once pieces are set for both players, the game begins. On each turn, the player '
          + 'selects a random grid square on the opponent\'s grid to try and hit an enemy ship. The goal is to sink '
          + 'all enemy ships to win.',
        screenshot: 'https://imgur.com/mZ3Fw9X',
        usedTech: ['HTML5', 'CSS', 'Javascript'],
        url: 'https://c0dezer019.github.io/Battleship',
      },
      {
        name: '404AnswerNotFound',
        description: 'This app was inspired by Quora and StackedOverflow and is a Q&A site purely dedicated to the '
          + 'programming world. I developed this with a small team of engineers, which I was the project lead. Our '
          + 'goal was to create a cleaner and more lenient app then that of StackOverflow or Quora.',
        screenshot: 'https://i.imgur.com/kw5mfc6.png',
        usedTech: ['Azure', 'Bootstrap', 'Express.js', 'EJS', 'PostgreSQL'],
        url: 'https://404anf.azurewebsites.net/',
      },
      {
        name: 'Stormcaster',
        description: 'Stormcaster is a WIP weather app that is the first phase to a much larger project. My goal' +
          ' with this app is to make it a convenient place to get weather conditions and forecast for a user\'s' +
          ' current and searched locations as well as provide some jokes to provide some humor with each update.',
        screenshot: '',
        usedTech: ['Axios', 'Material-UI', 'Fetch', 'React', 'SASS'],
        usedAPI: ['OpenWeatherMap', 'canhazdadjoke'],
        url: 'https://github.com/c0dezer019/Stormcaster',
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
    ],
  },
];

export default projectData;
