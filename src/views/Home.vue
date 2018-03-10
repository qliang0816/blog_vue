<template>
<div>
<nav-header></nav-header>
<!-- content start -->
<div class="am-g am-g-fixed blog-fixed">
  <div class="am-u-md-8 am-u-sm-12">
    <article class="am-g blog-entry-article" v-for="text in texts">
        <div class="am-u-lg-4 am-u-md-12 am-u-sm-12 blog-entry-img">
            <img :src="'storage/'+text.image" alt="" class="am-u-sm-12">
        </div>
        <div class="am-u-lg-8 am-u-md-12 am-u-sm-12 blog-entry-text">
            <span><a href="" class="blog-color">article &nbsp;</a></span>
            <span> @Leo Qin &nbsp;</span>
            <span>{{ text.updated_at }}</span>
            <h1><router-link to="">{{ text.title }}</router-link></h1>
            <p>{{ text.summary }}</p>
            <!-- <p><a href="" class="blog-continue">continue reading</a></p> -->
        </div>
    </article>
    <ul class="am-pagination am-pagination-centered">
      <li v-bind:class="{'am-disabled':pageMark==1}"><a href="javascript:void(0);" v-on:click="prev">&laquo;</a></li>
      <li v-for="n in totalPage" v-bind:class="{'am-active': n==pageMark}"><a href="javascript:void(0);">{{ n }}</a></li>
      <li v-bind:class="{'am-disabled':pageMark==totalPage}"><a href="javascript:void(0);" v-on:click="next">&raquo;</a></li>
    </ul>
  </div>
  <!-- 右侧关于我界面 -->
  <about-me></about-me>
</div>
<!-- content end -->
  <nav-footer></nav-footer>
</div>
</template>
<script>
import AboutMe from '@/components/AboutMe'
import NavFooter from '@/components/Footer'
import NavHeader from '@/components/Header'
import axios from 'axios'
export default {
  data(){
    return{
      // 页数
      page:1,
      // 前一页后一页标识
      pageMark:1,
      // 每页条数
      paginate:6,
      // 总页数
      totalPage:'',
      // 文章
      texts:[]
    }
  },
  mounted(){
    this.init();
  },
  components:{
    AboutMe,
    NavFooter,
    NavHeader
  },
  methods:{
    // 初始化
    init(){
      axios.get("/home/paginate/"+this.paginate+"?page="+this.page).then((response)=>{
        let res = response.data;
        this.texts = res.data;
        this.totalPage = res.last_page;
        this.pageMark=this.page;
        this.windowScroll();
      })
    },
    // 前一页
    prev(){
      this.init(--this.page);
    },
    // 后一页
    next(){
      this.init(++this.page);
    },
    // 窗口滚回最顶部
    windowScroll(){
      window.scroll(0, 0);
    }
  }
}
</script>


