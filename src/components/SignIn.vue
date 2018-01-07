<template>
  <section class="main-container">
    <!-- <h1>CONNECT THROUGH</h1>
    <div>
        <button>facebook</button>
        <button>google</button>
    </div> -->

    <form class="form-container" @submit.prevent="login">
      <h1 class="head-title">Hi, Welcom Back!</h1>
      <input id="email" placeholder="Email"  v-model="signInDetails.email" type="email" required>
      <input  id="pass" placeholder="Password" v-model="signInDetails.password" type="text" required>
      <button  class="main-btn" type="submit">Log in</button>
    </form>  

  </section>
</template>

<script>
import { USER_LOGIN } from "../store/modules/user/user.module";

export default {
  name: "SignIn",
  data() {
    return {
      signInDetails: { email: "", password: "" }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({ type: USER_LOGIN, signInDetails: this.signInDetails })
        .then(_ => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err, "catch error in signin");
        });
    }
  },
  components: {}
};
</script>







<style scoped>
.main-container {
  width: 600px;
  display: flex;
  justify-content: center;
  margin-top:60px;

}
.form-container{
  display: flex;
  flex-flow: column wrap;
}

.head-title{
  font-size:2em;
  font-weight: 500;
  text-align:center;
  color: var(--third-color);
}

#email,
#pass,
.main-btn {
  width: 250px;
  padding: 5px 8px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin: 5px 0;
}
#email:focus,
#pass:focus {
  border-radius: 10px;
  border: 1px solid var(--third-color);
}
.main-btn {
  background-color: var(--third-color);
  opacity: .9;
  color: white;
}

.main-btn:hover{

	background: rgba(0,0,0,0);
  color: var(--third-color);
  box-shadow: inset 0 0 0 2px var(--third-color);

}
 

</style>

    
