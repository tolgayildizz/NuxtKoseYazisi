<template>
    <PostForm @submit="savePost($event)"/>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/admin/PostForm';
export default {
    components: {
        PostForm,
    },
    methods: {
        savePost(post) {
            axios.post("https://kose-yazisi-nux-js.firebaseio.com/post.json", post).then(result => {
                console.log(result);
                this.$router.push('/admin');
            })
        }
    }
}
</script>
