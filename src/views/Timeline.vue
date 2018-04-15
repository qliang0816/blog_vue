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
        let result = data.reduce((res, {id, year, month, title, updated_at,tags,tags_id}) => {
          if (!res.has(year)) res.set(year, new Map())
          let thisYear = res.get(year)
          if (!thisYear.has(month)) thisYear.set(month, [])
          let thisMonth = thisYear.get(month)
          let tags_arr=tags.split(",")
          let tags_id_arr = tags_id.split(",")
          let final_tags=this.tag_merge(tags_id_arr,tags_arr)
          thisMonth.push({id, title, updated_at,final_tags})
          return res
        }, new Map())
        // console.log(result)
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
            month_value.forEach(date_value => {
              this.timelineData +=
              "<li> \
                <span class='am-u-sm-4 am-u-md-2 timeline-span am-icon-calendar-minus-o'> "+date_value.updated_at+"</span> \
                <span class='am-u-sm-6 am-u-md-5 am-icon-file-text'> <a href=/#/article/"+date_value.id+">"+date_value.title+"</a></span> \
                <span class='am-u-sm-6 am-u-md-3 am-hide-sm-only am-icon-tags'> ";
                date_value.final_tags.forEach((element,index) => {
                  this.timelineData+="<a href=/#/?tag="+index+">"+element+"</a> ";
                });
                this.timelineData+="</span> \
                <span class='am-u-sm-4 am-u-md-2 am-hide-sm-only am-icon-user'> Leo Qin</span> \
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
    },
    tag_merge(tags_id_arr,tags_arr){
      let arr = new Array()
      for (let i = 0; i < tags_id_arr.length; i++) {
        arr[tags_id_arr[i]] = tags_arr[i];
      }
      return arr
    }
  }
}
</script>

