import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state:{
            fetchPost: [],
        },
        mutations:{
            setPost(state,post) {
                state.fetchPost = post;
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://kose-yazisi-nux-js.firebaseio.com/post.json').then(result => {
                    let data = result.data;
                    let postArray = [];
                    for(let key in data) {
                        postArray.push({id:key, ...data[key]});
                    }

                    vuexContext.commit('setPost', postArray);
                });
            },
            setPost(context,post) {
                context.commit('setPost', post);
            }
        },
        getters:{
            getPosts(state) {
                return state.fetchPost;
            }
        },
    });
};

export default createStore;