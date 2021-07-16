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
        <el-breadcrumb-item>项目名称</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="content_c">
        <h3>项目名项目名称项目名称项目名称项目名称项目名称项目名称项目名称称</h3>
        <p>
          开标时间：
          <span>2021-07-01&nbsp;&nbsp;14:30</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          项目类型：
          <span>采购</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          发布时间：
          <span>2021-07-01&nbsp;&nbsp;14:30</span>
        </p>
        <div class="container">
          css实现段落P 首行缩进两个翰墨，css 缩进2个翰墨间距距离。html不使用空格字符，
          使用css完成段首或div内翰墨开头时空格两个笔墨成效。缩进2个文字排版效果缩进2个翰墨排版成就
          div内翰墨首行就像空格一样缩进2个文字间隔身分。缩进CSS 属性花色单词：text-indent
          设置装备摆设CSS缩进值：text-indent:2em设置值为2em——两个相对长度单位。
          假定设置装备摆设字体大小为12px，为甚么不配置缩进值为24px；例如设置字体大小为20px，
          为何不配置缩进值为40px呢？那就从html长度单位em标明：相关于目前对象内文本的字体尺寸。
          em这个单位的寄义即是相对于翰墨大小，1em便是1个笔墨大小，2em就是两个笔墨大小。
          px为绝对固定像素单元，如果模式字体大小旋转，而缩进px单元值是不随字体大小而改动，
          那么缩进就不是偏偏2个翰墨位置空格缩进间距了，修正文字大小就要再批改缩进值，
          对照贫穷困难。如果运用em绝对翰墨大小为2单位（2em），
          不管以后对DIV字体大小、P字体大小的篡改都会自适应缩进刚合适的2个翰墨空格成果。
        </div>
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
    }
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
  .content_c{
    width: 76%;
    height: 94%;
    // border: 1px solid green;
    margin: 0 auto;
    padding-top: 5%;
    // text-align: center;
      p{
        margin-top: 10px;
      }
  }
  .container{
    width: 100%;
    height: 90%;
    margin-top: 3%;
    text-indent: 2em;
    line-height: 24px;
  }
  .footer{
    margin-top: 20px;
  }
</style>