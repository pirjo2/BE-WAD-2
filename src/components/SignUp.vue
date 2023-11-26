<template>
  <div class="signupform">
    <form class="signuparea">
      <label for="email">Email</label>
      <input type="password" id="email"><br>
      <label for="pass">Password</label>
      <input type="password" id="pass"><br>
      <button @click="checkPassword">Signup</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'SignUp',
  methods: {
    checkPassword: function () {
      this.$store.dispatch('resetAllLikesAct');
    }
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  color: #000000;
  cursor: pointer;
}
</style>