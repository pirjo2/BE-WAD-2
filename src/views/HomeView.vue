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
  <Footer>
  </Footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer";
import AllPosts from "@/components/AllPosts";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
    Footer,
    AllPosts
  }
}
</script>
