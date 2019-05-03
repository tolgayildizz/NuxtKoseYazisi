<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend v-if="isUpdate">Köşe Yazısını Düzenle</legend>
        <legend v-else>Yeni Köse Yazısı</legend>
        <div class="form-group">
          <label>Yazar Adı</label>
          <input
            v-model="post.author"
            type="text"
            class="form-control"
            placeholder="Yazarın adını giriniz.."
          >
        </div>
        <div class="form-group">
          <label>Baslık</label>
          <input
            type="text"
            class="form-control"
            v-model="post.title"
            placeholder="Yazının baslıgını giriniz.."
          >
        </div>
        <div class="form-group">
          <label>Alt Baslık</label>
          <input
            type="text"
            v-model="post.subTitle"
            class="form-control"
            placeholder="Yazının alt baslıgını giriniz.."
          >
        </div>
        <div class="form-group">
          <label>Köse Yazısı</label>
          <textarea class="form-control" v-model="post.text" rows="5"></textarea>
        </div>
        <button @click="$router.go(-1)" class="btn btn-danger">İptal</button>
        <button type="submit" class="btn btn-primary">Kaydet</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: null,
        subTitle: null,
        author: null,
        text: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    }
  },
  props: {
    isUpdate: {
      default: false,
      type: Boolean,
      required: false
    },
    post: {
      required: false,
      type: Object
    }
  },
  created() {
    this.post = this.post
      ? this.post
      : {
          id: null,
          title: null,
          subTitle: null,
          author: null,
          text: null
        };
  }
};
</script>
