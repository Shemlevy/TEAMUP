<template>
  <section>
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

    <form @submit.prevent="register">
      <div class="email">
        <input id="email"  v-model="SignUpDetails.email" type="email" placeholder="Email" aria-required="true">
      </div>
      <div class="pass">
        <input  id="pass" v-model="SignUpDetails.pass" type="text" placeholder="Password" aria-required="true">
      </div>
      <div class="name">
        <input  id="name" v-model="SignUpDetails.name" type="text" placeholder="Full name" aria-required="true">
      </div>  
      <div class="btn-log">
        <button type="submit">Sign up</button>
      </div>
    </form>   
  </section>
</template>

<script>
import {USER_REGISTER} from '../store/modules/user/user.module';

export default {
  name: "SignUp",
  data() {
    return {
      SignUpDetails: { email: "", pass: "" , name: ""}
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

};
</script>



<style scoped>
section {
  color: white;
  font-family: var(--secondery-font);
}
.details-sign{
  margin:20px;
}
.head-sign{
  font-size: 1.5em;
  margin-bottom: 20px;
}
.head-sign span{
  color: peru;
}
p {
  font-weight: 700;
  font-size: 1em;
  margin:10px;
}
p span {
  color:rgba(180, 174, 174, 0.808);
  font-weight: 300;
}
form {
  margin: 20px;
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
  height: 21px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgb(169, 187, 218);
  font-size: 1em;
}
#email:focus,
#pass:focus,
#name:focus {
  border: 1.5px solid peru;
  outline: 1.5px solid peru;
  border-radius: 5px;
}
.btn-log{
  margin-left: 20px;
}

</style>

    
