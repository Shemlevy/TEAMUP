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

    <form @submit.prevent="login">
      <div class="email">
        <input id="email"  v-model="loginDetails.email" type="email" placeholder="Email" aria-required="true">
      </div>
      <div class="pass">
        <input  id="pass" v-model="loginDetails.pass" type="text" placeholder="Password" aria-required="true">
      </div>
      <div class="name">
        <input  id="name" v-model="loginDetails.pass" type="text" placeholder="Full name" aria-required="true">
      </div>  
      <div class="btn-log">
        <button type="submit">Sign up</button>
      </div>
    </form>   
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginDetails: { email: "", pass: "" }
    };
  },
  methods: {
    login() {
          console.log('logindetails',this.loginDetails);
      
      this.$store
        .dispatch({ type: LOGIN, loginDetails: this.loginDetails })
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
  display: flex;
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
  display: flex;
  flex-flow: row wrap;
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
  width: 172px !important;
  height: 21px !important;
  padding: 8px !important;
  border-radius: 5px !important;
  border: 1px solid rgb(169, 187, 218) !important;
  font-size: 1em !important;
}
#email:focus,
#pass:focus,
#name:focus {
  border: 1px solid peru;
  outline: 1px solid peru;
  border-radius: 5px;
}

</style>

    
