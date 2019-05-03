<template>
  <PostForm :post="loadedPost" :is-update="true"/>
</template>

<script>
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "Tolga YILDIZ'ın postu",
        subTitle: "Fok balıkları çok yalnız",
        text: "Fok balıklarının yalnız oluşu beni çok üzmektedir.",
        author: "Tolga YILDIZ"
      }
    };
  }
};
</script>
