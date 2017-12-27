'user strict'

const URL = 'http://localhost:3003'



function register(newUserDetails) {
  return new Promise((resolve, reject) => {
    users.push(newUserDetails)
    resolve(newUserDetails)
  })
}

function login(userLoginDetails) {
  console.log('in service',userLoginDetails.email);
  return new Promise((resolve, reject) => {
    var user = users.find(user => user.email === userLoginDetails.email && user.password === userLoginDetails.pass)
    if(user){
      resolve(user)
    }else{
      reject({messege: 'invaild user details'}) 
    }
  })
}


// function signup(userDetails) {
//     return axios.post(`${URL}/data/user`, userDetails)
//         .then(_ => {
//             console.log('userDetails', userDetails);
//             return login(userDetails)
//         })
//         .catch(err => err)
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


export default {
    register,
    login,
} 






var users = [
    {
        _id: '5a42017f1b02738337351487',
        profileImg: 'https://i0.wp.com/urtechpartner.com/wp-content/uploads/2017/07/Profile-Pics-DP.jpg?resize=466%2C604&ssl=1',
        age: 40,
        password: '123',
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