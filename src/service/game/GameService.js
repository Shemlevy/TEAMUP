'use strict'


const GAME_URL = 'http://localhost:3000/data/game';

var games = []

function _getGameCatagoryUrl(catagory){
  return `${Game_URL}/${catagory}`
}


function _getGameUrl(gameId) {
  return `${GAME_URL}/${gameId}`;
}

function getGameById(gameId) {
  return new Promise((resolve, reject) => {
    var selectedGame = games.find(game => game._id === gameId)
    if (selectedGame) resolve(selectedSame)
    else rejecet()
  })
  // return new Promise ((resove, reject) => {
  //     return axios
  //     .get(_getGameUrl(gameId))
  //     .then(res => res.data)
  // })
}


function getGamesByCatagoryId(catagoryId = null) {
  return new Promise((resolve, reject) => {
    if (!catagoryId) {
      resolve(games)
      return;
    }
    
    var selectedGames = games.filter(game => game.catagoryId === catagoryId)
    if (selectedGames) resolve(selectedGames)
    else rejecet()
  })

  // return axios.get(_getGamesCatagoryUrl)(catagory)
  //         .then(res => res.data)
  //         .catch(e => console.log('No Games', e))
}




export default {
  getGamesByCatagoryId,
  getGameById,
}




var games = [
  {
    _id: '5a4130f222b11b534f3480d3',
    logo: 'https://static.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    catagoryId: '5a41f7a62f7ac8f876f05913',
    name: 'PukiSoccer',
    schhedule: 1514251226,
    adminId: '5a42017f1b02738337351487',
    location: {
      address: '146 Frank Court, Bourg, Hawaii, 5155',
      latitude: 38.732705,
      longitude: -18.026913,
    },
    membersLimit: 10,
    members: [
      {id: "5a42017f1b02738337351487"},
      {id: "5a42017fbd55bb8f1c10ecb4"},
      {id: "5a42017f54524046b0c42733"}
    ]
  },
  {
    _id: '5a41fa1a07939b4a38708361',
    catagoryId: '5a41fa1a69eca78df41eb03a',
    adminId: '5a42017f1b02738337351487',
    logo: 'https://www.casinopauma.com/wp-content/uploads/2016/11/poker-5.jpg',
    name: 'Mallory',
    location: {
      address: '760 Sackman Street, Bloomington, Idaho, 320',
      latitude: -40.489104,
      longitude: 120.174056
    },
    about: 'Est deserunt in velit esse. Voluptate ipsum esse',
    schedule: '2017-09-08T11:25:57 -02:00',
    membersLimit: 8,
    members: [
      {_id: '5a42017f1b02738337351487'},
      {_id: '5a42017fad5cf981c358da5c'},
      {_id: '5a42017fbd55bb8f1c10ecb4'}
    ]
  },
  {
    _id: '5a41fa1a002727d5daa69a6c',
    catagoryId: '5a41fa1ae7736f3b000c5c15',
    adminId: '5a42017fbd55bb8f1c10ecb4',
    logo: 'https://static.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
    name: 'Tyson',
    location: {
      address: '519 Gem Street, Stockwell, Ohio, 1395',
      latitude: -78.800698,
      longitude: -109.31595
    },
    about: 'incididunt labore exercitation tempor do nulla velit dolore. Ad duis eu excepteur reprehenderit id elit minim ut magna.\r\n',
    schedule: '2014-12-11T12:17:39 -02:00',
    membersLimit: 9,
    members: [
      {_id: '5a42017fbd55bb8f1c10ecb4'},
      {_id: '5a42017fad5cf981c358da5c'},
      {_id: '5a42017f54524046b0c42733'}
    ]
  },
  {
    _id: '5a42017fbd55bb8f1c10ecb4',
    catagoryId: '5a41f7a62f7ac8f876f05913',
    adminId: '5a41fa1ab218007180e47be3',
    logo: 'https://www.casinopauma.com/wp-content/uploads/2016/11/poker-5.jpg',
    name: 'Elise',
    location: {
      address: '619 Richardson Street, Loma, Guam, 8278',
      latitude: -88.617296,
      longitude: 104.533855
    },
    about: 'Amet voluptate velit in eu Lorem nostrud reprehenderit in.\r\n',
    schedule: '2015-01-24T06:32:29 -02:00',
    membersLimit: 9,
    members: [
      {_id: '5a42017fbd55bb8f1c10ecb4'},
      {_id: '5a42017fad5cf981c358da5c'},
      {_id: '5a42017f54524046b0c42733'}
    ]
  },
  {
    _id: '5a42017f1b02738337351487',
    catagoryId: '5a41fa1a69eca78df41eb03a',
    adminId: '5a41fa1ac025f5b3ee8b425f',
    logo: 'https://www.casinopauma.com/wp-content/uploads/2016/11/poker-5.jpg',
    name: 'Sonja',
    location: {
      address: '999 Commerce Street, Robinette, North Dakota, 2892',
      latitude: 30.521439,
      longitude: -9.997314
    },
    about: 'Commodo ut adipisicing esse enim quis et eu. Elit in do ex ex et esse.\r\n',
    schedule: '2014-11-16T10:38:09 -02:00',
    membersLimit: 9,
    members: [
      {_id: '5a42017f1b02738337351487'},
      {_id: '5a42017fbd55bb8f1c10ecb4'},
      {_id: '5a42017f54524046b0c42733'}
    ]
  }
]
