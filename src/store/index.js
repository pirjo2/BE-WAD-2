import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        posts: [
            {
                "id": 10,
                "date": "29.10.2023",
                "postText": "Yesss friends forever",
                "postImage": "",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            },
            {
                "id": 9,
                "date": "28.10.2023",
                "postText": "Okey",
                "postImage": "",
                "profilepic" : "pictures/mary.png",
                "author": "Mary567",
                "likes": 0
            },
            {
                "id": 8,
                "date": "27.10.2023",
                "postText": "Let's be friends then",
                "postImage": "",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            },
            {
                "id": 7,
                "date": "26.10.2023",
                "postText": "I love your cat",
                "postImage": "",
                "profilepic" : "pictures/mary.png",
                "author": "Mary567",
                "likes": 0
            },
            {
                "id": 6,
                "date": "25.10.2023",
                "postText": "This is my grumpy cat",
                "postImage": "pictures/cat.png",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            },
            {
                "id": 5,
                "date": "24.10.2023",
                "postText": "Wait a minute",
                "postImage": "",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            },
            {
                "id": 4,
                "date": "23.10.2023",
                "postText": "Send some memes or pictures\nFeeling bored",
                "postImage": "",
                "profilepic" : "pictures/mary.png",
                "author": "Mary567",
                "likes": 0
            },
            {
                "id": 3,
                "date": "22.10.2023",
                "postText": "YOLO",
                "postImage": "",
                "profilepic" : "pictures/mary.png",
                "author": "Mary567",
                "likes": 0
            },
            {
                "id": 2,
                "date": "21.10.2023",
                "postText": "Found my cat!! She was under the sink\nFeeling happy",
                "postImage": "",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            },
            {
                "id": 1,
                "date": "20.10.2023",
                "postText": "Has anybody seen my cat :[",
                "postImage": "",
                "profilepic" : "pictures/joonas.png",
                "author": "Joonas123",
                "likes": 0
            }
        ],

        SignUpForm: {
            email: 'toimib@gmail.com',
            password: 'S33_toimib'
        }
    },
        getters: {
            passwordValidation: state => {
                const password = state.SignUpForm.password;
                const lowerCase = password.match(/[a-z]/) || [];
                const upperCase = password.match(/[A-Z]/) || [];
                return password.length >= 8 &&
                    password.length < 15 &&
                    password[0].match(/[A-Z]/) &&
                    /[A-Z]/.test(password[0]) &&
                    lowerCase.length >= 2 &&
                    upperCase.length >= 1 &&
                    /\d/.test(password) &&
                    /_/.test(password);
            }
        },
    mutations: {
        /**setPosts(state, posts) {
            state.posts = posts;
        },**/
        resetAllLikes: state => {
            state.posts.forEach(posts => {
                posts.likes = 0;
            })
        },
        incrementLikes(state, postId) {
            const postIndex = state.posts.findIndex(post => post.id === postId);
            if (postIndex !== -1) {
                state.posts[postIndex].likes++;
                // You might want to send an API request to update the likes on the server here
                // For demonstration purposes, the likes are only updated locally in this example
            }
        },
        updateSignUpForm(state, {field, value}) {
            state.SignUpForm[field] = value;
        }

    },
    actions: {
        resetAllLikesAct: act => {
            setTimeout(function() {
                act.commit("resetAllLikes")
            })
        },
        incrementLikesAction({ commit }, postId) {
            commit('incrementLikes', postId);
        }
        /**fetchPosts({ commit }) {
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
          },**/

   

    }
}
)
