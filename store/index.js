import Vuex from 'vuex';

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