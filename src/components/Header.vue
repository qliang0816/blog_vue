<template>
<div>
  <!-- nav start -->
  <nav class="am-g am-g-fixed blog-fixed blog-nav">
  <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
    <div class="am-collapse am-topbar-collapse" id="blog-collapse">
      <ul class="am-nav am-nav-pills am-topbar-nav">
        <li><router-link to="/">Articles</router-link></li>
        <li class="am-dropdown" data-am-dropdown>
          <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:void(0);">
            Category <span class="am-icon-caret-down"></span>
          </a>
          <ul class="am-dropdown-content">

            <li v-for="item in titleCate"><router-link to="">{{ item.name }}</router-link></li>
          </ul>
        </li>
        <li class="am-dropdown" data-am-dropdown>
          <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:void(0);">
            Ablum <span class="am-icon-caret-down"></span>
          </a>
          <ul class="am-dropdown-content">
            <li><router-link to="">All</router-link></li>
            <li v-for="item in imageCate"><router-link to="">{{ item.name }}</router-link></li>
          </ul>
        </li>
        <li><router-link to="/timeline">Timeline</router-link></li>
      </ul>
      <form class="am-topbar-form am-topbar-right am-form-inline" role="search">
        <div class="am-form-group">
          <input type="text" class="am-form-field am-input-sm" placeholder="搜索">
        </div>
      </form>
    </div>
  </nav>
  <hr>
  <!-- nav end -->
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      // 文章标题分类
      titleCate:[],
      // 图片分类
      imageCate:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      axios.get('/api/titlecate').then((response)=>{
        this.titleCate = response.data;
      });
      axios.get('/api/imagecate').then((response)=>{
        this.imageCate = response.data;
      });
    }
  }

}
</script>
