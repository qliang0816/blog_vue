<template>
<div>
  <!-- nav start -->
<nav class="am-g am-g-fixed blog-fixed blog-nav">
<button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
  <div class="am-collapse am-topbar-collapse" id="blog-collapse">
    <ul class="am-nav am-nav-pills am-topbar-nav">
      <li class="am-active"><a href="lw-index.html">首页</a></li>
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
      <li><a href="lw-article.html">标准文章</a></li>
      <li><a href="lw-img.html">图片库</a></li>
      <li><a href="lw-article-fullwidth.html">全宽页面</a></li>
      <li><a href="lw-timeline.html">存档</a></li>
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
<!-- banner start -->
<div class="am-g am-g-fixed blog-fixed am-u-sm-centered blog-article-margin">
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
</div>
<!-- banner end -->

<!-- content srart -->
<div class="am-g am-g-fixed blog-fixed">
  <div class="am-u-md-8 am-u-sm-12">
    <article class="am-g blog-entry-article">
        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">
            <img src="static/i/f10.jpg" alt="" class="am-u-sm-12">
        </div>
        <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">
            <span><a href="" class="blog-color">article &nbsp;</a></span>
            <span> @amazeUI &nbsp;</span>
            <span>2015/10/9</span>
            <h1><a href="">我本楚狂人，凤歌笑孔丘</a></h1>
            <p>我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。
            </p>
            <p><a href="" class="blog-continue">continue reading</a></p>
        </div>
    </article>
    <ul class="am-pagination">
      <li class="am-pagination-prev"><a href="">&laquo; Prev</a></li>
      <li class="am-pagination-next"><a href="">Next &raquo;</a></li>
    </ul>
  </div>

    <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
        <div class="blog-sidebar-widget blog-bor">
            <h2 class="blog-text-center blog-title"><span>About ME</span></h2>
            <img src="static/i/f14.jpg" alt="about me" class="blog-entry-img" >
            <p>妹纸</p>
            <p>
        我是妹子UI，中国首个开源 HTML5 跨屏前端框架
        </p><p>我不想成为一个庸俗的人。十年百年后，当我们死去，质疑我们的人同样死去，后人看到的是裹足不前、原地打转的你，还是一直奔跑、走到远方的我？</p>
        </div>
        <div class="blog-sidebar-widget blog-bor">
            <h2 class="blog-text-center blog-title"><span>Contact ME</span></h2>
            <p>
                <a href=""><span class="am-icon-qq am-icon-fw am-primary blog-icon"></span></a>
                <a href=""><span class="am-icon-github am-icon-fw blog-icon"></span></a>
                <a href=""><span class="am-icon-weibo am-icon-fw blog-icon"></span></a>
                <a href=""><span class="am-icon-reddit am-icon-fw blog-icon"></span></a>
                <a href=""><span class="am-icon-weixin am-icon-fw blog-icon"></span></a>
            </p>
        </div>
        <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
            <h2 class="blog-title"><span>TAG cloud</span></h2>
            <div class="am-u-sm-12 blog-clear-padding">
            <a href="" class="blog-tag">amaze</a>
            <a href="" class="blog-tag">妹纸 UI</a>
            <a href="" class="blog-tag">HTML5</a>
            <a href="" class="blog-tag">这是标签</a>
            <a href="" class="blog-tag">Impossible</a>
            <a href="" class="blog-tag">开源前端框架</a>
            </div>
        </div>
    </div>
</div>
<!-- content end -->
  <footer class="blog-footer">
    <div class="blog-text-center">© 2015 AllMobilize, Inc. Licensed under MIT license. Made with love By LWXYFER</div>
  </footer>

</div>
</template>
<script>

export default {

}
</script>


