<template>
  <PostForm :post="loadedPost" :is-update="true" @submit="updatePost($event)"/>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm
  },
  asyncData(context) {
    return axios
      .get(
        "https://kose-yazisi-nux-js.firebaseio.com/post/" +
          context.params.postId +
          ".json"
      )
      .then(response => {
        return {
          loadedPost: response.data
        };
      });
  },
  methods: {
    updatePost(post) {
      this.$store.dispatch("updatePost", {
        ...post,
        id: this.$route.params.postId
      }).then(response => {
        this.$router.push('/admin');
      });
    }
  }
};
</script>
