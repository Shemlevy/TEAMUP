<template>
  <section>
   
    <!-- <h1>CONNECT THROUGH</h1>
    <div>
        <button>facebook</button>
        <button>google</button>
    </div> -->

    <form @submit.prevent="login">
      <div class="email">
          <label for="email">Email</label>
          <input id="email"  v-model="signInDetails.email" type="email">
      </div>
      <div class="pass">
          <label for="pass">Password</label>
          <input  id="pass" v-model="signInDetails.pass" type="text">
      </div>
      <div class="btn-log">
          <button type="submit">Log in</button>
      </div>
    </form>

   
  </section>
</template>

<script>
import { USER_LOGIN} from "../store/modules/user/user.module";

export default {
  name: "SignIn",
  data() {
    return {
      signInDetails: { email: "", pass: "" }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({ type: USER_LOGIN, signInDetails: this.signInDetails })
        .then(_ => {
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err, "catch error in signin");
        });
    }
  }
};
</script>







<style scoped>
section {
  color: white;
}
form {
  display: flex;
  /* position: fixed;
  right:0; */
  margin: 20px;
}
.email,
.pass {
  display: flex;
  flex-flow: column;
  margin: 10px;
  font-family: var(--secondery-font);
}

#email,
#pass {
  width: 145px;
  height: 15px;
  padding: 3px;
  border: 1px solid black;
}
#email:focus,
#pass:focus {
  border: 1px solid peru;
  outline: 1px solid peru;
}
.btn-log {
  align-self: center;
}
</style>

    
