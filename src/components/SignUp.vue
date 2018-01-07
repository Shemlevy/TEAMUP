<template>
  <section class="main-container">
    <div class="details-sign">
      <div class="head-sign">
        <h1>Connect with friends and the
            world around you on TEAM<span>UP</span>.
        </h1>
      </div>
      <p>Look for games around you <span> Online or in specific time</span></p>
      <p>Find friends with common hobbies <span> In your area or wherever</span></p>
      <p>Open game groups <span> And invite your friends</span></p>
    </div>

    <form class="main-form" @submit.prevent="register">
      <div class="email">
        <input id="email"  v-model="SignUpDetails.email" type="email" placeholder="Email" required>
      </div>
      <div class="pass">
        <input  id="pass" v-model="SignUpDetails.password" type="text" placeholder="Password" required>
      </div>
      <div class="name">
        <input  id="name" v-model="SignUpDetails.name" type="text" placeholder="Full name" required>
      </div>  
      <div class="btn-log">
        <button class="main-btn" type="submit">Sign up</button>
      </div>
    </form>   
  </section>
</template>

<script>
import {USER_REGISTER} from '../store/modules/user/user.module';
import userService from '../service/user/UserService'
export default {
  name: "SignUp",
  data() {
    return {
      SignUpDetails: null
    };
  },
  methods: {
    register() {      
      this.$store
        .dispatch({ type: USER_REGISTER, newUser: this.SignUpDetails })
        .then(_ => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created(){
    this.SignUpDetails = userService.getEmptyUser()
  }

};
</script>



<style scoped>
.main-container{
  max-width: 600px;
  color: rgb(57, 51, 51);
  margin: 20px;
}
.details-sign{
  margin:20px;
}
.head-sign{
  font-size: 1.5em;
  margin-bottom: 20px;
  font-weight: 900;
}
.head-sign span{
  color: var(--third-color)
}
.main-form{
  margin-left:17px;
}
p {
  font-weight: 800;
  font-size: 1em;
  margin:10px;
}
p span {
  color:rgba(99, 99, 99, 0.808);
  font-weight: 400;
}
form {
  /* margin: 20px; */
  display: flex;
  flex-flow: column wrap;
  width: 180px;
}
.email,
.pass,
.name {
  display: flex;
  flex-flow: column;
  margin: 10px;
}

#email,
#pass,
#name {
  width: 172px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgb(169, 187, 218);
  font-size: 1em;
  font-weight: 600;
}
#email:focus,
#pass:focus,
#name:focus {
  border: 1.5px solid var(--third-color);
  outline: 1.5px solid var(--third-color);
  border-radius: 5px;
}

.main-btn{
  width:172px;  
  background-color: #fff;
  margin: 10px;
  margin-bottom:100px;
}

</style>

    
