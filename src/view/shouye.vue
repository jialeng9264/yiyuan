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
    <!-- 平台项目数 -->
    <div class="small">
      <div class="small_num">
        <div class="small_num_list">
          <img src="@/assets/img/01.jpg" alt="">
          <div class="num fr">
            <p>平台项目数</p>
            <p><span>12,345</span>个</p>
          </div>
        </div>
      </div>
      <div class="small_num">
        <div class="small_num_list">
          <img src="@/assets/img/02.jpg" alt="">
          <div class="num fr">
            <p>平台合作企业</p>
            <p><span>12,345</span>家</p>
          </div>
        </div>
      </div>
      <div class="small_num">
        <div class="small_num_list">
          <img src="@/assets/img/03.jpg" alt="">
          <div class="num fr">
            <p>投标活跃数</p>
            <p><span>12,345</span>次</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 招投标采购 -->
    <div class="understand">
      <div class="under_l fl">
        <p class="under_l_title">招投标采购</p>
        <p class="under_l_content">了解平台了解平台了解平台了解平台了解平台   了解平台了解平台了解平台
          了解平台了解平台了解平台了解平台了解平台了解平台了解平台
          了解平台了解平台了解平台了解平台了解平台了解平台了解平台
        </p>
        <button class="under_l_login">登录体验</button>
      </div>
      <div class="under_r fr">
        <img src="@/assets/img/bg_04.png" alt="">
      </div>
    </div>
    <!-- 登录 -->
    <div class="login_c">
      <div class="login">
        <div class="login_l fl"></div>
        <div class="login_r fr">
          <p>
            <span>登录入口</span>
            可用户名或CA登录
          </p>
          <div class="login_in fr">
            <div class="login_ca fl" v-show="islogin">
                <div class="user">
                  <img src="@/assets/img/user.png" alt="">
                  <input type="text" placeholder="用户名/手机号">
                </div>
                <div class="password">
                  <img src="@/assets/img/password.png" alt="">
                  <input type="password" placeholder="密码">
                </div>
                <div class="l_r_c">
                  <ul>
                    <li>
                      <button class="deng">登录</button>
                    </li>
                    <li>
                      <button class="zhu">注册</button>
                    </li>
                    <li>
                      <button class="ca" @click="ca">CA登录</button>
                    </li>
                  </ul>
                </div>
            </div> 
            <div class="login_calogin fl" v-show="!islogin">
              <img src="@/assets/img/ca.png" alt="">
              <button>CA登录</button>
            </div>
            <div class="banli fr">
              <div class="banli_item">
                <img src="@/assets/img/wjmm.png" alt="">
                <a href="">忘记密码</a>
              </div>
              <div class="banli_item">
                <img src="@/assets/img/zcca.png" alt="">
                <a href="">CA办理</a>
              </div>
              <div class="banli_item">
                <img src="@/assets/img/lxwm.png" alt="">
                <a href="">在线咨询</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 交易中心 -->
    <div class="jiaoyi">
      <ul class="tab_tit fl">
        <p>交易中心</p>
        <li v-for="(title,index) in tabtitle"
          @click="cur=index"
          :class="{active:cur==index}">{{title}}</li>
      </ul>
      <div class="tab_content fr">
        <div v-for="(content,index) in tabmain" v-show="cur==index" class="tabcontent">
          <div class="content">
              <span class="fl">最新发布</span>
              <span class="fr">进入专区></span>
          </div>
          <ul>
            <li>
              <span class="list">交易中心采购信息交易中心采购信息交易中心采购信息交易中心采购信息交易中心</span>
              <span class="time fr">2021-07-10</span>
            </li>
            <li>
              <span class="list">交易中心采购信息交易中心采购信息交易中心采购信息交易中心采购信息交易中心</span>
              <span class="time fr">2021-07-10</span>
            </li>
            <li>
              <span class="list">交易中心采购信息交易中心采购信息交易中心采购信息交易中心采购信息交易中心</span>
              <span class="time fr">2021-07-10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 合作单位 -->
    <div class="hezuodanwei">
      <div class="hezuo">
        <p>合作单位</p>
      </div>
      <div class="danwei">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <v-footer></v-footer>
  
</div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import footer from '@/components/footer'
export default {
  components:{
    swiper,
    swiperSlide,
    'v-footer':footer
  },
  data() {
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
      tabtitle: ['采购信息', '招标公告', '中标公告', '变更公告'],
      tabmain: ['采购信息', '招标公告', '中标公告', '变更公告'],
      cur: 0, //默认选中第一个tab
      islogin:true
      // isShowLogin_calogin:false
    };
  },
  methods:{
    ca(){
      this.islogin = !this.islogin
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
}
</script>

<style lang="less" scoped>
// 轮播
  .recommendPage{
    // position: relative;
    width: 100%;
    height: 280px;
    // border: 1px solid red;
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
  // 平台项目数
  .small{
    width: 70%;
    height: 90px;
    // border: 1px solid green;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 95;
    transform: translate(-50%);
    background-color: #fff;
    box-shadow: 0px 12px 11px -10px #000;
      .small_num{
        flex: 1;
        // border: 1px solid red;
      }
  }

  .small_num_list{
    width: 66%;
    height: 70%;
    // border: 1px solid red;
    margin-left: 17%;
    margin-top: 4%;
      img{
        width: 75px;
        height: 60px;
      }
  }
  .num{
    width: 60%;
    height: 100%;
    font-size: 17px;
      p:last-child{
        padding-top: 10px;
      }
      span{
        font-size: 20px;
        color: rgb(168,0,0);
        margin-right: 18px;
      }
  }
// 招投标采购
  .understand{
    width: 70%;
    height: 280px;
    margin: 0 auto;
    margin-top: 80px;
    // border: 1px solid red;
      .under_l{
        width: 50%;
        height: 100%;
        // border: 1px solid green;
          .under_l_title{
            font-size: 23px;
            margin-top: 30px;
            padding-left: 10px;
            border-left: 6px solid rgb(253,207,59);
          }
          .under_l_content{
            margin-top: 25px;
            font-size: 17px;
            text-indent:2em;
          }
          .under_l_login{
            margin-top: 20px;
            color: #fff;
            background-color: rgb(0,106,176);
            padding: 5px 20px;
            border: none;
            cursor: pointer;
          }
      }
      .under_r{
        width: 45%;
        height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
      }
  }
// 登录
  .login_c{
    width: 100%;
    height: 415px;
    margin-top: 40px;
    background: url('~@/assets/img/bg.png') no-repeat;
    background-size: 100% 100%;
    border: 1px solid rgb(255,255,255,0);
      .login{
        width: 70%;
        height: 65%;
        // border: 1px solid red;
        margin: 0 auto;
        margin-top: 4%;
          .login_l{
            width: 48%;
            height: 100%;
          }
          .login_r{
            width: 52%;
            height: 100%;
            color: #fff;
            // background-color: green;
              span{
                font-size: 22px;
                letter-spacing: 4px;
                padding-right: 3px;
                border-bottom: 4px solid rgb(253,207,59)
              }
          }
      }
  }

  .login_in{
    width: 100%;
    height: 67%;
    margin-top: 8%;
    // border: 1px solid red;
      .login_ca{
        width: 45%;
        height: 100%;
        text-align: center;
        // border: 1px solid red;
        // position: relative;
      }
  }
  .login_calogin{
    width: 45%;
    height: 100%;
    text-align: center;
    // border: 1px solid red;
      img{
        margin: 0 auto;
      }
      button{
        width: 66%;
        height: 30px;
        margin-top: 10%;
        border-radius: 15px;
        background-color: rgb(231,73,70);
        letter-spacing: 5px;
        border: none;
        color: #fff;
        cursor: pointer;
        box-shadow: 1px 1px 3px 1px rgb(255,255,255,0.85)
      }
  }
  input::-webkit-input-placeholder{
    color:#fff;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#fff;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#fff;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
      color:#fff;
  }
  .user{
    width: 100%;
    height: 20%;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid #fff;
    position: relative;
      img{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 8%;
        top: 15%;
      }
      input{
        width: 75%;
        height: 30px;
        position: absolute;
        right: 3%;
        top: 10%;
        border: none;
        background-color: transparent;
      }
      input:focus{
        outline: none;
      }
  }
  .password{
    width: 100%;
    height: 20%;
    margin: 0 auto;
    margin-top: 11%;
    border-radius: 20px;
    border: 1px solid #fff;
    position: relative;
      img{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 8%;
        top: 15%;
      }
      input{
        width: 75%;
        height: 30px;
        position: absolute;
        right: 3%;
        top: 10%;
        border: none;
        background-color: transparent;
      }
      input:focus{
        outline: none;
      }
  }
  .l_r_c{
    width: 100%;
    height: 20%;
    margin-top: 14%;
    // border: 1px solid black;
      ul{
        width: 100%;
        height: 100%;
          li{
            float: left;
            width: 31%;
            height: 100%;
            margin-left: 2%;
              button{
                width: 100%;
                height: 100%;
                border-radius: 15px;
                border: none;
                cursor: pointer;
              }
              .deng{
                letter-spacing: 6px;
                color: #000;
                background-color: rgb(253,206,58);
              }
              .zhu{
                letter-spacing: 6px;
                color: #000;
                background-color: rgb(252,233,237);
              }
              .ca{
                color: #fff;
                background-color: rgb(232,72,72);
              }
          }
      }
  }
  .banli{
    width: 55%;
    height: 60%;
    display: flex;
    // border: 1px solid blue;
      .banli_item{
        flex: 1;
        text-align: center;
        // border: 1px solid red;
          img{
            width: 63px;
            height: 62px;
            vertical-align: middle;
          }
          a{
            display: inline-block;
            text-decoration: underline;
            color: #fff;
            margin-top: 5px;
          }
      }
  }
  // 交易
  .jiaoyi{
    width: 70%;
    height: 300px;
    margin: 0 auto;
    margin-top: 40px;
    // border: 1px solid red;
  }
  .tab_tit{
    width: 26%;
    height: 100%;
    text-align: center;
    color: #fff;
    background: url("~@/assets/img/bg_03.png") no-repeat;
    background-size: 100%;
      p{
        font-size: 28px;
        margin-top: 25px;
      }
      li{
        width: 60%;
        height: 30px;
        margin-top: 25px;
        color: rgb(0,104,187);
        background-color: #fff;
        border-radius: 15px;
        line-height: 30px;
        margin-left: 18%;
        cursor: pointer;
      }
  }
  .tab_tit .active{
    color: #fff;
    background-color: rgb(253,207,59);
  }
  .tab_content{
    width: 73%;
    height: 100%;
    border: 1px solid rgb(233,229,230);
    // background-color: blue;
     .tabcontent{
       width: 100%;
       height: 100%;
        .content{
          width: 100%;
          height: 36px;
          background: url("~@/assets/img/bg_05.jpg");
            span{
              display: inline-block;
              height: 36px;
              // border: 1px solid red;
              line-height: 36px;
              margin-left: 25px;
              margin-right: 25px;
              color: #fff;
            }
        }
        ul{
          width: 96%;
          height: 80%;
          margin: 0 auto;
          margin-top: 2%;
          background-color: #fff;
            li{
              height: 25px;
              margin-top: 10px;
              border-bottom: 1px dashed #333;
                .list{
                  display: inline-block;
                  width: 80%;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow:ellipsis;
                }
            }
            .time{
              margin-right: 20px;
            }
        }
        
     }
  }
  // 合作单位
  .hezuodanwei{
    width: 70%;
    height: 340px;
    margin: 0 auto;
    margin-top: 40px;
    // border: 1px solid red;
  }
  .hezuo{
    width: 66%;
    height: 17%;
    margin: 0 auto;
    display: table;
    // border: 1px solid green;
    background: url("~@/assets/img/bg_bt.png") no-repeat;
    background-size: 100% 100%;
      p{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 24px;
      }
  }
  .danwei{
    width: 100%;
    height: 80%;
    margin-top: 2%;
    // border: 1px solid blue;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    flex-wrap: wrap;
      span{
        width: 20%;
        height: 120px;
        background-color: blue;
        flex:none;/*不放大不缩小*/
        box-sizing: border-box;
        margin-right: 10px;
      }
  }
</style>