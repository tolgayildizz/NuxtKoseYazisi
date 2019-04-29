<template>
  <PostDetail :post="post"/>
</template>

<script>
import PostDetail from "@/components/posts/PostDetail.vue";
export default {
  components: {
    PostDetail
  },
  asyncData(context, callback) {
    setTimeout(()=> {
      callback(null, {
        post: {
          id:1,
          author:"Cimbili İbo",
          title:"İstilamız Başlar ("+context.params.postId+")",
          subTitle:"Çekilin Kenara biz 0 çizerken",
          text:"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.",
        }
      })
    }, 1500)
  }
};
</script>
