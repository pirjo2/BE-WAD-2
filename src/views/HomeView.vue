<template>
  <div>
    <Header>
    </Header>
  </div>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <all-posts/>
  </div>
  <button @click="resetAllLikes">Reset All Likes</button>
  <Footer>
  </Footer>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer";
import AllPosts from "@/components/AllPosts";

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    AllPosts
  },
  methods: {
    resetAllLikes: function () {
      this.$store.dispatch('resetAllLikesAct');
    }
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
