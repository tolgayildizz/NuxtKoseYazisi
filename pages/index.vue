<template>
  <div>
    <PostList :posts="fetchPost"/>
    <About/>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About
  },
  data() {
    return {
      fetchPost: []
    };
  },
  created() {},
  asyncData(context, callback) {
    callback(null, {
      fetchPost: [
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
      ]
    });
  }
};
</script>

<style>
</style>
