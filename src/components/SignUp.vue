<template>

  <div class="signupform">
    <form class="signuparea">
      <label>Email</label>
      <input v-model="email" @input="updateForm('email')"><br>
      <label>Password</label>
      <input v-model="password" @input="updateForm('password')"><br>
      <p v-if="passwordValidation = true"></p>
      <!-- kui kasutada passwordValidation, siis läheb pekki. nt: v-if="passwordvalidation" selles <p> atribuutis
           voi nupu disablemisel -->
      <button>Signup</button>
    </form>
  </div>
</template>


<script>

export default {
  name: 'SignUp',
  computed: {
    email: function() {
      return this.$store.state.SignUpForm.email;
    },
    password: function() {
      return this.$store.state.SignUpForm.password;
    },
    passwordValidation: function() {
      return this.$store.getters.passwordValidation() ;
    },
  },
  methods: {
    updateForm() {
      this.$store.commit('updateSignUpForm', {field, value: this[field] });
    },
  }
}
</script>


<style>
.signupform {
  padding: 10px 20px 10px 20px;
  margin: auto;
}
.signuparea {
  background-color: #e8d8ff;
  border: 2px solid;
  border-color: #ffc2ff;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 10px 20px;
  text-align: center;
  display: block;
}
label {
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 20px;
  text-align: center;
}
input {
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
button {
  background: #9dcaff;
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top:  20px;
  margin-bottom:  20px;
  margin-right:  100px;
  color: #503E52;
  border-radius: 10px;

}

button:hover {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.8);
  color: #000000;
  cursor: pointer;
}
</style>