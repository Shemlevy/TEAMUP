'user strict'

import axios from 'axios'

const USER_URL = 'http://localhost:3003';

function getEmptyUser() {
  return {
    name: '',
    password: '',
    imgUrl: 'https://cdn4.iconfinder.com/data/icons/social-communication/142/add_user-512.png',
    email: '',
    phone: '',
    about: '',
    games: []
  }
}

function register(newUserDetails) {
  return axios.post(`${USER_URL}/data/user`, newUserDetails)
    .then(_ => {
      console.log('newUserDetails', newUserDetails);
      return login(newUserDetails)
    })
    .catch(err => err)
}

function updateUser(userDetails){
  return axios.put(`${USER_URL}/data/user/${userDetails._id}`, userDetails)
  .then(res => {
    return res.data
  })
  .catch(_ => 'something didnt happend')
}

function login(userDetails) {
    return axios.post(`${USER_URL}/login`, userDetails)
        .then(({ data }) => {
            return data.user
        })
}

function logout(){
  return axios.get(`${USER_URL}/logout`)
        .then()
        .catch(_ => console.log('shit happend'))
}

function deleteUser(userId){
  return axios.delete(`${USER_URL}/${userId}`)
        .then(res => {
          return res.data
        })
        .catch(err => {
          console.log('user could not be deleted')
        })
}


export default {
  updateUser,
  getEmptyUser,
  register,
  login,
  deleteUser
}



