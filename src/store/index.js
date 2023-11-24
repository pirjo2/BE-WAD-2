import { createStore } from 'vuex'

export default createStore({
    
    state: {
        posts: [
        ]
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        fetchPosts({ commit }) {
            return fetch('./myjson.json')
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Failed to fetch posts');
                }
                return response.json();
              })
              .then((json) => {
                commit('setPosts', json);
              })
              .catch((error) => {
                console.error('Error fetching posts:', error);
              });
          },

   
}})
