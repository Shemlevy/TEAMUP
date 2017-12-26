<template>
  <section>
    <Nav></Nav>
    <!-- <h1>CONNECT THROUGH</h1>
    <div>
        <button>facebook</button>
        <button>google</button>
    </div> -->
    <div class="login-form">
      <div class="email">
          <label for="email">Email</label>
          <input id="email" type="text">
      </div>
      <div class="pass">
          <label for="pass">Password</label>
          <input  id="pass" type="text">
      </div>
      <div>
          <button>Log in</button>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    Nav
  },

};
</script>



<style scoped>
section{
  color:white;
}
.login-form{
  display: flex;
}
.email, .pass{
  display: flex;
  flex-flow: column;
  margin:10px;
}

#email, #pass{
  width: 145px;
  height: 15px;
  padding: 3px;
  border: 1px solid black;
}
#email:focus, #pass:focus{
  border: 1px solid peru;
  outline: 1px solid peru;
}

</style>

    
