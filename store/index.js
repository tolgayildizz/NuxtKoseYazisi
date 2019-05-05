import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchPost: [], //Postlar
        },
        mutations: {
            //State e verilerin set edilmesi
            setPost(state, post) {
                state.fetchPost = post;
            },
            //Yeni Bir post ekleme mutasyonu
            addPost(state, post) {
                state.fetchPost.push(post);
            },
            //Yazı güncelleme 
            updatePost(state, editedPost) {
                console.log("Mutations => " + editedPost);
                let post_index = state.fetchPost.findIndex(post => post.id == editedPost.id)
                console.log("Mutations | POST INDEX => " + post_index)
                state.fetchPost[post_index] = editedPost
            }
        },
        actions: {
            //Server başladığında yani sayfa yenilendiği veri çekilmesi
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.get(process.env.baseURL + 'post.json').then(result => {
                    let data = result.data;
                    let postArray = [];
                    for (let key in data) {
                        postArray.push({ id: key, ...data[key] });
                    }

                    vuexContext.commit('setPost', postArray);
                });
            },
            //Postların mutaion'a gönderilmesi
            setPost(context, post) {
                context.commit('setPost', post);
            },

            //Yeni Bir post ekleme actionu
            addPost(vuexContext, post) {
                return this.$axios.post(process.env.baseURL + "post.json", post).then(result => {
                    vuexContext.commit('addPost', { ...post, id: result.data.name });
                });
            },
            //Yazı güncelleme actionu
            updatePost(vuexContext, post) {
                return this.$axios.put(process.env.baseURL + "post/" + post.id + ".json", post).then(response => {
                    vuexContext.commit("updatePost", post);
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        getters: {
            //Postların Getirilmesi
            getPosts(state) {
                return state.fetchPost;
            }
        },
    });
};

export default createStore;