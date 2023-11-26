<template>
  <div>
    <Header>
    </Header>
  </div>
  <div class="signup">
    <SignUp/>
  </div>
  <Footer>
  </Footer>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue';
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";

export default {
  name: 'SignUpView',
  components: {
    SignUp,
    Header,
    Footer,
  },
  methods: {
  }
}
</script>
<style scoped>
button {
  background:  #C4B7CB;
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top:  20px;
  margin-bottom:  20px;
  margin-right:  10px;
  color: #503E52;
  border-radius: 10px;
}

button:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  color: #000000;
  cursor: pointer;
}
</style>