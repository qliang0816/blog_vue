<template>
<div>
  <nav-header></nav-header>
  <!-- content start -->
  <div class="am-g am-g-fixed blog-fixed blog-content">
    <div class="am-u-sm-12">
      <h1 class="blog-text-center">-- Timeline --</h1>

      <div class="timeline-year" v-for="(year_data,year) in timelineData">
        <h1>{{ year }}</h1>
        <hr>
        <ul v-for="(month_data,month) in year_data">
          <h3>{{ month }}月</h3>
          <hr>
          <li v-for="item in month_data">
              <span class="am-u-sm-4 am-u-md-2 timeline-span">{{ item.updated_at }}</span>
              <span class="am-u-sm-8 am-u-md-6"><router-link :to="'/article/'+item.id">{{ item.title }}</router-link></span>
              <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">article</span>
              <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">Leo Qin</span>
          </li>
          <br><br>
        </ul>
        <br>
      </div>
      <hr>
    </div>
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
      // 时间线数据
      timelineData:[]
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
      axios.get('/api/timeline').then((response)=>{
        let data = response.data;
        // console.log(data);
        this.timelineData = response.data;
        var result = data.reduce((res, item) => {
          if (res[item.year] == null) {
            res[item.year] = {}
          }
          if (res[item.year][item.month] == null) {
            res[item.year][item.month] = []
          }
          res[item.year][item.month].push(item)
          // console.log(res);
          return res
        }, {})

        this.timelineData = result;
      })
    }
  }
}
</script>

