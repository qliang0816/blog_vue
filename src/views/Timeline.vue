<template>
<div>
  <nav-header></nav-header>
  <!-- content start -->
  <div class="am-g am-g-fixed blog-fixed blog-content">
    <div class="am-u-sm-12">
      <h1 class="blog-text-center">-- Timeline --</h1>
      <div v-html="timelineData">
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
      timelineData:''
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
        let result = data.reduce((res, {id, year, month, title, updated_at}) => {
          if (!res.has(year)) res.set(year, new Map())
          let thisYear = res.get(year)
          if (!thisYear.has(month)) thisYear.set(month, [])
          let thisMonth = thisYear.get(month)
          thisMonth.push({id, title, updated_at})
          return res
        }, new Map())
        for (let [year_key,year_value] of result) {
          this.timelineData +=
          "<div class='timeline-year'> \
          <h1>"+year_key+"</h1> \
          <hr>";
          for (let [month_key,month_value] of year_value) {
            this.timelineData +=
            "<ul> \
            <h3>"+month_key+"月</h3> \
            <hr>";
            month_value.forEach(element => {
              this.timelineData +=
              "<li> \
                <span class='am-u-sm-4 am-u-md-2 timeline-span'>"+element.updated_at+"</span> \
                <span class='am-u-sm-8 am-u-md-6'><a href=/#/article/"+element.id+">"+element.title+"</a></span> \
                <span class='am-u-sm-4 am-u-md-2 am-hide-sm-only'>article</span> \
                <span class='am-u-sm-4 am-u-md-2 am-hide-sm-only'>Leo Qin</span> \
              </li>";
            });
            this.timelineData +=
            "<br><br> \
            </ul>";
          }
          this.timelineData +=
          "<br> \
          </div>";
        }
      });
      // this.$refs.NavHeader.$emit('init')
      console.log(this.$refs)
    }
  }
}
</script>

