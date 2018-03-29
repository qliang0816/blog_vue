<template>
<div>
  <nav-header></nav-header>
<!-- content start -->
<div class="am-g am-g-fixed blog-fixed blog-content">
  <figure data-am-widget="figure" class="am am-figure am-figure-default "   data-am-figure="{  pureview: 'true' }">
      <div id="container">
          <div v-for="item in imageList"><img :src="'/storage/'+item.url"><h3>{{ item.title }}</h3></div>
    </div>
  </figure>

</div>
<!-- content end -->
  <nav-footer></nav-footer>
</div>
</template>
<script>
import NavFooter from '@/components/Footer'
import NavHeader from '@/components/Header'
import axios from 'axios'
export default {
  data(){
    return{
      // 图片列表
      imageList:''
    }
  },
  components:{
    NavFooter,
    NavHeader
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get("/api"+this.$route.fullPath).then((response)=>{
        this.imageList = response.data;
      })
    }
  },
  watch:{
    'imageList':function(){
      this.$nextTick(function(){
        $(function(){
          setTimeout(function(){
            $('#container').pinto()
          },100);
        });
      })
    }
  }
}
</script>

