<template>
<div>
<nav-header></nav-header>
<!-- banner start -->
<!-- <div class="am-g am-g-fixed blog-fixed am-u-sm-centered blog-article-margin">
    <div data-am-widget="slider" class="am-slider am-slider-b1" data-am-slider='{&quot;controlNav&quot;:false}' >
    <ul class="am-slides">
      <li>
        <img src="static/i/b1.jpg">
        <div class="blog-slider-desc am-slider-desc ">
            <div class="blog-text-center blog-slider-con">
                <span><a href="" class="blog-color">Article &nbsp;</a></span>
                <h1 class="blog-h-margin"><a href="">总在思考一句积极的话</a></h1>
                <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。
                </p>
                <span class="blog-bor">2015/10/9</span>
                <br><br><br><br><br><br><br>
            </div>
        </div>
      </li>
    </ul>
    </div>
</div> -->
<!-- banner end -->

<!-- content start -->
<div class="am-g am-g-fixed blog-fixed">
  <div class="am-u-md-8 am-u-sm-12">

    <article class="am-g blog-entry-article" v-for="text in texts">
        <div class="am-u-lg-4 am-u-md-12 am-u-sm-12 blog-entry-img">
            <img v-lazy="'/storage/'+text.image" alt="" class="am-u-sm-12">
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


    <ul class="am-pagination">
      <li class="am-pagination-prev" v-if="pageMark!=1"><a href="javascript:void(0);" v-on:click="prev">&laquo; Prev</a></li>
      <li class="am-pagination-next" v-if="pageMark!=totalPage"><a href="javascript:void(0);" v-on:click="next">Next &raquo;</a></li>
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


