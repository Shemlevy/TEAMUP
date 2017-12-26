'user strict'

const URL = 'http://localhost:3003'



// function signup(userDetails) {
    // return axios.post(`${URL}/data/user`, userDetails)
    //     .then(_ => {
    //         console.log('userDetails', userDetails);
    //         return login(userDetails)
    //     })
    //     .catch(err => err)
// }

// function login(userCreds) {
//     return axios.post(`${URL}/login`, userCreds)
//         .then(({ data }) => {
//             return data
//         })
// }

// function logout() {
//     return axios.get(`${URL}/logout`)
// }


// export default {
//     signup,
//     login,
//     logout,
// } 






users = [
    {
        _id: '5a42017f1b02738337351487',
        profileImg: 'http://placehold.it/32x32',
        age: 40,
        password: '',
        name: 'Cecilia Nichols',
        gender: 'female',
        email: 'cecilianichols@edecine.com',
        phone: '+1 (850) 419-2382',
        about: 'Nulla et deserunt'
      },
      {
        _id: '5a42017fad5cf981c358da5c',
        profileImg: 'http://placehold.it/32x32',
        age: 35,
        password: '',
        name: 'Madeleine Kirk',
        gender: 'female',
        email: 'madeleinekirk@edecine.com',
        phone: '+1 (847) 547-2944',
        about: 'Occaecat fugiat incididunt nulla'
      },
      {
        _id: '5a42017f54524046b0c42733',
        profileImg: 'http://placehold.it/32x32',
        age: 24,
        password: '',
        name: 'Valdez Cruz',
        gender: 'male',
        email: 'valdezcruz@edecine.com',
        phone: '+1 (895) 431-3122',
        about: 'Nulla ex nisi adipisicing minim.'
      },
      {
        _id: '5a42017fbd55bb8f1c10ecb4',
        profileImg: 'http://placehold.it/32x32',
        age: 39,
        password: '',
        name: 'Dorothea Vazquez',
        gender: 'female',
        email: 'dorotheavazquez@edecine.com',
        phone: '+1 (855) 575-2813',
        about: 'Esse incididunt aute enim ex'
      }
]