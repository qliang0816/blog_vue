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
            <span class="am-icon-user">&nbsp;<span style="color:black">Leo Qin</span></span>&nbsp;-&nbsp;
            <span></span>
            <span class="am-icon-calendar-minus-o">&nbsp;<span style="color:black">{{ article.updated_at }}</span></span>&nbsp;-&nbsp;
            <span class="am-icon-tags"></span>
            <router-link class="am-monospace" v-for="item in tags" :key="item.id" :to="{path:'/',query:{tag:item.id}}">{{ item.name }}&nbsp;</router-link>
          </p>
        </div>
        <div class="am-article-bd">
          <img v-lazy="'/storage/'+article.image" alt="" class="blog-entry-img blog-article-margin am-img-responsive" style="margin: 0 auto;height:400px">
        </div>
        <p v-html="text" v-highlight></p>
      </article>

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
      next:[],
      // 文章标签
      tags:''
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
      axios.get('/api/tagcate',{
        params:{
          article_id:this.$route.params.id
        }
      }).then((response)=>{
        this.tags = response.data;
      })
    },
  },
  watch:{
    // 监控路由变化，变化就刷新主组件
    "$route":"init"
  }
}
</script>
