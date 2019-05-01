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
            nuxtServerInit(vuexContext, context) {
                vuexContext.dispatch('setPost')
            },
            setPost(context,post) {
                context.commit('setPost', [
                    {
                      id: 1,
                      title: "Tolga YILDIZ'ın postu",
                      subTitle: "Fok balıkları çok yalnız",
                      text: "Fok balıklarının yalnız oluşu beni çok üzmektedir.",
                      author: "Tolga YILDIZ"
                    },
                    {
                      id: 2,
                      title: "Orhan ÖKSÜZ'ün postu",
                      subTitle: "Fok balıkları çok yalnızsa bizene",
                      text: "Fok balıklarının yalnız oluşu beni çok üzmemektedir.",
                      author: "Orhan ÖKSÜZ"
                    },
                    {
                      id: 3,
                      title: "Oğuzhan KIDIK'ın postu",
                      subTitle: "Fok balıkları çok yalnız yalanı",
                      text: "Fok balıklarının yalnız falan değil aq benden çok arkadaşı var.",
                      author: "Oğuzhan KIDIK"
                    }
                  ]);
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