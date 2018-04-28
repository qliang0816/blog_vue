<template>
<div>
  <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
    <div class="blog-sidebar-widget blog-bor">
        <h2 class="blog-text-center blog-title"><span>About ME</span></h2>
        <img src="/static/i/me.jpeg" alt="about me" class="blog-entry-img" >
        <p class="am-monospace">秦梁(Leo)</p>
        <div class="am-kai" style="text-align:left">
          <p>
            <h6>写博客:</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一方面,为了找到更多志同道合的人; <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一方面,为了更好地学习,扩大影响力。对于任何一个程序员来说是极其必要的。 <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的博客内容包括了,技术笔记,生活图片库。对我来说,博客记录我的成长过程,更可以让未来的我看到现在的不成熟想法与创意。
          </p>
        </div>
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
    <div class="blog-sidebar-widget blog-bor">
        <h2 class="blog-title"><span>Category</span></h2>
        <ul class="am-list admin-sidebar-list" id="collapase-nav-1"  style="text-align:left">
            <li class="am-panel" v-for="(value,key,index) in textCate">
                <a :data-am-collapse="JSON.stringify({parent: '#collapase-nav-1', target: '#'+index+'-nav'})">
                    &nbsp;&nbsp;{{ key }}
                    <i class="am-icon-angle-right am-fr am-margin-right"></i>
                </a>
                <ul class="am-list am-collapse admin-sidebar-sub" :id="index+'-nav'">
                    <li style="height:42px" v-for="i in value"><router-link :to="'/article/'+i.id">&nbsp;&nbsp;{{ i.title }}</router-link></li>
                    <!-- 默认显示六条 -->
                    <li v-if="value.length==6"><router-link :to="{path:'/',query:{category:value[0].category_id}}">&nbsp;&nbsp;&nbsp;&nbsp;<ins>查看更多...</ins></router-link></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
        <h2 class="blog-title"><span>TAG cloud</span></h2>
        <div class="am-u-sm-12 blog-clear-padding">
        <router-link v-for="item in tagCate" :key="item.id" :to="{path:'/',query:{tag:item.id}}" class="blog-tag">{{ item.name }}</router-link>
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
      // 标签分类
      tagCate:[],
      // 文章分类
      textCate:[],
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get('/api/tagcate').then((response)=>{
        this.tagCate = response.data;
      });
      axios.get('/api/category').then((response)=>{
        this.textCate = response.data;
      })
    }
  }
}
</script>

