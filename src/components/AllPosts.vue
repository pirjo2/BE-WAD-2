
<template>
    <div class = addPostbox id = allposts>
    
    <div class="posts" v-for = "post in posts" :key="post.id">
        <header class = "post-header">
          <a class="post-date">{{ post.date }}</a>
          <img :src="post.profilepic"  class="post-logo" />
          <a class="post-author">{{ post.author }}</a>
        </header>
        <img :src="post.postImage"  class="post-content" />
        <a class="post-title">{{ post.postText }}</a>

        <a class="likes"> Likes:{{post.likes}} </a>
        <button class="like-button" @click="handleLike(post.id)">
          <img src="pictures/like.png" alt="Like Button"  />
        </button>
    </div>
    </div>
    
    </template>
    
    <script>
    export default {
      computed: {
        posts: function (){
          return this.$store.state.posts;
          console.log('Fetched posts:', this.$store.state.posts);
        },
      },

      methods: {
        incrementLikesAction: function(postId) {
          this.$store.dispatch('incrementLikesAction', postId); // Dispatching the 'incrementLikesAction' Vuex action with the postId
        },
        handleLike: function(postId) {
          this.incrementLikesAction(postId); // Calls the 'incrementLikesAction' Vuex action when the 'Like' button is clicked
        },
        fetchData() {
           this.$store.dispatch('fetchPosts');
        },
      },
      created() {
        // You can automatically fetch data when the component is created
        this.fetchData();
      }
    };
    </script>
    
    <style scoped>
    img {
      width: inherit;
      height: inherit;
      object-fit: contain;
    }
    .posts {
        background-color: #DDD5DC;
        border-radius: 0.2em;
        padding: 8px 20px;
        margin-left: 10em;
        margin-right: 10em;
        margin-top: 2em;
        margin-bottom: 2em;
        box-shadow: none;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    
    .post-header {
        display: block;
        font-size: 1.2em;
        margin-bottom: 25px;
    }
    
    .post-date {
        padding-top: 0.3em;
        float: right;
        display: block;
    }
    
    .post-content {
        font-size: 1.0em;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    
    #post-title {
        padding-top: 0.3em;
        float: left;
        display: block;
       
    }
    
    .post-logo {
        height: 2.5em;
        width: 2.5em;
        float: left;
        border: solid 5px grey;
        border-radius: 0.3em;
    }
    .post-author{
      float: left;
    }
    
    .post-author {
        height: 1.5em;
        width: 1.5em;
        padding-left: 10px;
    }
    
    .like-button {
        height: 3em;
        width: 3em;
        padding: 12px 2px 2px 2px;
        cursor: pointer;
        user-select: none;
        float: left;
        display: contents;
    }
    @media (max-width: 800px) {
        .posts {
            margin: 1em;
        }
        .addPostBox {
            margin: 1em;
        }
        
    }
    </style>
    
    