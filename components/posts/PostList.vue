<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
      <Post :is-admin="isAdmin" v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import Post from "@/components/posts/Post";
export default {
  components: {
    Post
  },
  props: {
    isAdmin: {
      type: Boolean,
      default:false,
      required:false,
    },
    posts: {
      required:true,
      type:Array,
      default: [],
    }
  }
};
</script>
