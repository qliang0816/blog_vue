<template>
<div>
<nav-header></nav-header>
<!-- content start -->
<div class="am-g am-g-fixed blog-fixed blog-content">
    <div class="am-u-md-8 am-u-sm-12">
      <article class="am-article blog-article-p">
        <div class="am-article-hd">
          <h1 class="am-article-title blog-text-center">{{ article.title }}</h1>
          <p class="am-article-meta blog-text-center">
              <span><a href="#" class="blog-color">article &nbsp;</a></span>-
              <span><a href="#">@Leo_Qin &nbsp;</a></span>-
              <span><a href="#">{{ article.updated_at }}</a></span>
          </p>
        </div>
        <div class="am-article-bd">
          <img v-lazy="'/storage/'+article.image" alt="" class="blog-entry-img blog-article-margin am-img-responsive" style="margin: 0 auto;height:400px">
        </div>
        <p v-html="text" v-highlight></p>
      </article>
      <!-- <div class="am-g blog-article-widget blog-article-margin">
        <div class="am-u-lg-4 am-u-md-5 am-u-sm-7 am-u-sm-centered blog-text-center">
          <span class="am-icon-tags"> &nbsp;</span><a href="#">标签</a> , <a href="#">TAG</a> , <a href="#">啦啦</a>
        </div>
      </div> -->
      <hr>
      <ul class="am-pagination blog-article-margin">
        <li v-if="previous!=null" class="am-pagination-prev"><router-link :to="'/article/'+previous.id">&laquo; {{ previous.title }}</router-link></li>
        <li v-if="next!=null" class="am-pagination-next"><router-link :to="'/article/'+next.id">{{ next.title }} &raquo;</router-link></li>
      </ul>
      <!-- <hr> -->
      <!-- <form class="am-form am-g">
          <h3 class="blog-comment">评论</h3>
        <fieldset>
          <div class="am-form-group am-u-sm-4 blog-clear-left">
            <input type="text" class="" placeholder="名字">
          </div>
          <div class="am-form-group am-u-sm-4">
            <input type="email" class="" placeholder="邮箱">
          </div>

          <div class="am-form-group am-u-sm-4 blog-clear-right">
            <input type="password" class="" placeholder="网站">
          </div>

          <div class="am-form-group">
            <textarea class="" rows="5" placeholder="一字千金"></textarea>
          </div>

          <p><button type="submit" class="am-btn am-btn-default">发表评论</button></p>
        </fieldset>
      </form>
      <hr> -->
    </div>
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
import marked from 'marked'
export default {
  data(){
    return{
      // 文章内容
      article:[],
      // text
      text:'',
      // 上一篇
      previous:[],
      // 下一篇
      next:[]
    }
  },
  components:{
    AboutMe,
    NavFooter,
    NavHeader
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get('/api/article',{
        params:{
          id:this.$route.params.id
        }
      }).then((response)=>{
        this.article = response.data.article;
        this.text = marked(this.article.text,{sanitize:false});
        this.previous = response.data.previous;
        this.next = response.data.next;
        window.scroll(0, 0);
      })
    },
  },
  watch:{
    // 监控路由变化，变化就刷新主组件
    "$route":"init"
  }
}
</script>
