<template>
  <PostDetail :post="post"/>
</template>

<script>
import PostDetail from "@/components/posts/PostDetail.vue";
export default {
  components: {
    PostDetail
  },
  computed: {
    post() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>
