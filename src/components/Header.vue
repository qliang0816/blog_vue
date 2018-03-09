<template>
<div>
  <!-- nav start -->
  <nav class="am-g am-g-fixed blog-fixed blog-nav">
  <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
    <div class="am-collapse am-topbar-collapse" id="blog-collapse">
      <ul class="am-nav am-nav-pills am-topbar-nav">
        <li class="am-active"><router-link to="/">Articles</router-link></li>
        <li class="am-dropdown" data-am-dropdown>
          <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
            首页布局 <span class="am-icon-caret-down"></span>
          </a>
          <ul class="am-dropdown-content">
            <li><a href="lw-index.html">1. blog-index-standard</a></li>
            <li><a href="lw-index-nosidebar.html">2. blog-index-nosidebar</a></li>
            <li><a href="lw-index-center.html">3. blog-index-layout</a></li>
            <li><a href="lw-index-noslider.html">4. blog-index-noslider</a></li>
          </ul>
        </li>
        <li><a href="lw-article.html">Ablum</a></li>
        <li><router-link to="">Timeline</router-link></li>
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
export default {

}
</script>
