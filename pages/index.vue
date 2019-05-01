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
  computed: {
    fetchPost() {
      return this.$store.getters.getPosts;
    }
  },
  created() {
    //this.$store.dispatch('setPost', this.fetchPost);
  },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch("setPost");
  //     resolve();
  //   }).catch(e => {
  //     context.error(e);
  //   });
  // }
};
</script>

<style>
</style>
