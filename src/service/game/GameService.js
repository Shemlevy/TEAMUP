'use strict'

import axios from 'axios'

let GAME_URL = 'http://localhost:3003/data/game';
if(process.env.NODE_ENV !== 'development'){
  GAME_URL = '/data/game'
}

function getEmptyGame(){
  return {
    url: '',
    category:{},
    level:'',
    name: '',
    date: '',
    location: {
      lat: null,
      lng: null,
      address: ''
    },
    about: '',
    playersLimit: null,
    players:{}
  }
}

function updateGame(game){
  console.log('im in updateGame......in process')
  return axios.put(`${GAME_URL}/${game._id}`, game)
  
  // .then(res => {
  //   return res.data
  // })
  // .catch(_ => 'something didnt happend')
}

function deleteGame(gameId){
  return axios.delete(`${GAME_URL}/${gameId}`)
        .then(res => {
          return res.data
        })
        .catch(err => {
          console.log('game could not be deleted')
        })
}

function createGame(newGame){
  return axios.post(GAME_URL , newGame)
         .then(res =>{
          //  console.log(res)
          return res.data
         })
         .catch(err => {
           console.log('could not create new game')
         })
}



function getGameById(gameId) {
  return axios.get(`${GAME_URL}/${gameId}`)
    .then(res => {
      return res.data
    }).catch(err => {
      console.log('Couldnt find the game')
    })
}

function getPlayerGames (PlayerId){
  return axios.get(`${GAME_URL}`, {params:{ PlayerId }})
    // console.log('player id in service: ', PlayerId)
    .then(res => {
      console.log('recived player games in service: ' , res)
      return res.data
    })
    .catch(e => console.log('Could not find player games', e))
}

function getGames(categoryId = null) {
  if(categoryId === '5a510c70734d1d5a2369c2e1') categoryId = null
  return axios.get(`${GAME_URL}`, { params: { categoryId } })
    .then(res => {
      // console.log({res, msg: 'we are in the service'})
      if (res.data.length === 0) return null
      return res.data
    })
    .catch(e => console.log('No Games', e))
}



export default {
  getGames,
  getGameById,
  createGame,
  deleteGame,
  updateGame,
  getPlayerGames
}
