<template>
  <div>
    <PostList :posts="fetchPost"/>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList
  },
  computed: {
    fetchPost() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>

<style>
</style>
