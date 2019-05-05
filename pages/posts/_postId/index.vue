<template>
  <PostDetail :post="post"/>
</template>

<script>
import axios from 'axios';
import PostDetail from "@/components/posts/PostDetail.vue";
export default {
  components: {
    PostDetail
  },
  computed: {
    post() {
      return this.$store.getters.getPosts;
    }
  },
  asyncData(context) {
    return axios.get("https://kose-yazisi-nux-js.firebaseio.com/post/"+context.params.postId+".json").then(response => {
      return {
        post: response.data
      }
    })
  }
};
</script>
