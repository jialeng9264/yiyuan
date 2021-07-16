<template>
  <div>
    <div class="recommendPage">
      <!-- 轮播 -->
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="@/assets/img/banner00.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/banner01.jpg" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <div class="dangqian">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>您的当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>招标公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="content">
      <div class="container">
          <!-- 搜索与添加区域 -->
        <el-row>
          <el-col>
            <el-input placeholder="可根据项目编号或者项目名称进行查询" v-model="queryInfo.query" clearable @clear="dataList">
              <el-button slot="append" icon="el-icon-search" @click="dataList"></el-button>
            </el-input>
          </el-col>
        </el-row>


        <el-tabs :data="searchlist" type="card" @tab-click="handleClick">
          <el-tab-pane label="全部" name="all">
            <ul>
              <li>
                <div class="xinxi fl">
                  <p>信信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息息</p>
                  <p class="leixing">
                    项目类型：
                    <span>采购</span>
                  </p>
                </div>
                <div class="see fr">
                  <span class="time fl">2021-07-07</span>
                  <el-button type="primary">查看详情</el-button>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="招标公告" name="zhaobiao">招标公告</el-tab-pane>
          <el-tab-pane label="投标公告" name="toubiao">投标公告</el-tab-pane>
          <el-tab-pane label="变更公告" name="biangeng">变更公告</el-tab-pane>
        </el-tabs>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-size="queryInfo.pagesize"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import footer from '@/components/footer'
export default {
  data(){
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000
        // 显示分页
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true //允许分页点击跳转
        // },
      },
      queryInfo:{
        query:'',
        // 当前的页数
        pagenum:1,
        // 当前每页显示多少条数据
        pagesize:18
      },
      searchlist:[],
      total:0
    }
  },
  created(){
    this.dataList()
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async dataList(){
      // const {data:res} = await this.$http.get('users',{params:this.queryInfo})
      // if(res.meta.status !== 200) {
      //   return this.$message.error('获取数据列表失败')
      // }
      // this.searchlist = res.data.users
      // this.total = res.data.total
      // console.log(res)
      },
      // 监听pagesize改变的事件
      handleSizeChange(newSize){
        console.log(newSize)
        this.queryInfo.pagesize = newSize
        this.dataList()
      },
      // 监听页码值改变的事件
      handleCurrentChange(newPage){
        console.log(newPage)
        this.queryInfo.pagenum = newPage
        this.dataList()
    },
  },
  components:{
    swiper,
    swiperSlide,
    'v-footer':footer
  }
}
</script>

<style lang="less" scoped>
  /* 轮播 */
  .recommendPage{
    /* position: relative; */
    width: 100%;
    height: 280px;
    /* border: 1px solid red; */
     .swiper-container{
       width: 100%;
       height: 100%;
     }
  }
  .swiper-slide{
    width: 100%;
    height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
  }

  // 当前位置
  .dangqian{
    width: 70%;
    height: 40px;
    margin: 0 auto;
    margin-top: 10px;
    // border: 1px solid red;
      .el-breadcrumb{
        line-height: 40px;
      }
  }

  // 内容
  .content{
    width: 70%;
    height: 800px;
    // border: 1px solid red;
    margin: 0 auto;
    margin-top: 30px;
    box-shadow: 0px 1px 16px 2px rgba(0,0,0,0.4);
  }
  .container{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding-top: 4%;
    // border: 1px solid red;
  }
  .el-tabs{
    margin-top: 30px;
  }

  .el-tab-pane ul{
    width: 100%;
      li{
        width: 100%;
        height: 70px;
        // border: 1px solid red;
        border-bottom: 1px dashed #333;
          .xinxi{
            width: 74%;
            height: 100%;
              .leixing{
                color: rgb(1,101,187);
                  span{
                    color: rgb(154,154,154);
                  }
              }
             p{
               line-height: 35px;
             }
          }
          .see{
            width: 26%;
            height: 100%;
            line-height: 70px;
            vertical-align:middle;
              .el-button{
                margin-left: 24%;
              }
          }
      }
  }
  .el-pagination{
    text-align: center;
  }
  .footer{
    margin-top: 20px;
  }
</style>