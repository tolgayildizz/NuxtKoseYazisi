<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList :posts="fetchPost" :is-admin="true"/>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList
  },
  layout: "admin",
  computed: {
    fetchPost() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>

<style>
</style>
