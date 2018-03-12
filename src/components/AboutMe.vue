<template>
<div>
  <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
    <div class="blog-sidebar-widget blog-bor">
        <h2 class="blog-text-center blog-title"><span>About ME</span></h2>
        <img src="static/i/me.jpeg" alt="about me" class="blog-entry-img" >
        <p>秦梁(Leo)</p>
        <p>写博客:一方面,为了找到更多志同道合的人;另一方面,为了更好地学习,扩大影响力.对于任何一个程序员来说是极其必要的.我的博客内容包括了,技术笔记,生活图片库.对我来说,博客记录我的成长过程,更可以让未来的我看到现在的不成熟想法与创意.</p>
    </div>
    <div class="blog-sidebar-widget blog-bor logo-box">
        <h2 class="blog-text-center blog-title"><span>Contact ME</span></h2>
        <ul>
          <li>
              <a href="https://github.com/LeoQin0816" target="_blank"><span class="am-icon-github am-icon-fw blog-icon"></span></a>
          </li>
          <li>
              <a href="https://gitlab.com/LeoQin0816" target="_blank"><span class="am-icon-gitlab am-icon-fw blog-icon"></span></a>
          </li>
          <li class="my-qq">
              <a href="javascript:void(0);" target="_blank"><span class="am-icon-qq am-icon-fw blog-icon"></span></a>
              <p class="qq-logo"></p>
          </li>
          <li class="my-wechat">
              <a href="javascript:void(0);" target="_blank"><span class="am-icon-weixin am-icon-fw blog-icon"></span></a>
              <p class="wechat-logo"></p>
          </li>
          <li class="my-weibo">
              <a href="javascript:void(0);" target="_blank"><span class="am-icon-weibo am-icon-fw blog-icon"></span></a>
              <p class="weibo-logo"></p>
          </li>
      </ul>
    </div>
    <br><br>
    <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
        <h2 class="blog-title"><span>TAG cloud</span></h2>
        <div class="am-u-sm-12 blog-clear-padding">
        <router-link v-for="item in tagCate" :key="item.id" to="" class="blog-tag">{{ item.name }}</router-link>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      tagCate:[],
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get('/tagcate').then((response)=>{
        this.tagCate = response.data;
      });
    }
  }
}
</script>

