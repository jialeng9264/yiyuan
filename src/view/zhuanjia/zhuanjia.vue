<template>
  <div>
    <div class="content">
      <div class="container">
        <ul>
          <li @click="num=0" :class="{active:num==0}" class="fl">在库专家
          </li>
          <span></span>
          <li @click="num=1" :class="{active:num==1}" class="fr">专家</li>
        </ul>
        <div class="denglu">
          <div class="zaiku_login" v-show="num==0">
            <el-form ref="zaikuloginFormRef" :model="zaikuloginForm" :rules="zaikuloginFormRules" label-width="0px" class="login_form">
              <!-- 用户名 -->
              <el-form-item prop="username">
                <el-input v-model="zaikuloginForm.username" prefix-icon="el-icon-user-solid" placeholder="用户名"></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password">
                <el-input v-model="zaikuloginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="密码"></el-input>
              </el-form-item>
              <!-- 按钮区域 -->
              <el-form-item class="btns">
                <el-button type="primary" @click="zaiku_login">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="zhuanjia_login" v-show="num==1">
            <el-form ref="zhuanjialoginFormRef" :model="zhuanjialoginloginForm" :rules="zhuanjialoginFormRules" label-width="0px" class="login_form">
              <!-- 用户名 -->
              <el-form-item prop="username">
                <el-input v-model="zhuanjialoginloginForm.username" prefix-icon="el-icon-user-solid" placeholder="专家用户名"></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password">
                <el-input v-model="zhuanjialoginloginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="密码"></el-input>
              </el-form-item>
              <!-- 按钮区域 -->
              <el-form-item class="btns">
                <el-button type="primary" @click="zhuanjia_login">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="text">
          <p>专家登录：
            <a href="">采购类项目</a>
            请用专家登录
          </p>
          <p>在库专家登录：
            <a href="">工程类项目</a>
            请用在库专家登录
          </p>
        </div>
      </div>
    </div>

    <div class="biaoduan">
      <div class="xuanze">
        <p>已选择标段</p>
      </div>
      <div class="biaoduan_list">
        <ul>
          <li v-for="item in list">{{item}}</li>
        </ul>
      </div>
    </div>

    <div class="diqu">
     <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="石家庄市" name="shi">
        <p>选择地区：</p>
        <ul>
          <li>桥东区</li>
          <li>长安区</li>
          <li>桥西区</li>
          <li>新华区</li>
          <li>桥东区</li>
          <li>井陉矿区</li>
          <li>井陉县</li>
          <li>正定县</li>
          <li>栾城县</li>
          <li>行唐县</li>
          <li>灵寿县</li>
          <li>高邑县</li>
          <li>深泽县</li>
          <li>赞皇县</li>
          <li>无极县</li>
          <li>平山县</li>
          <li>元氏县</li>
          <li>赵县</li>
          <li>辛集市</li>
          <li>藁城市</li>
          <li>晋州市</li>
          <li>新乐市</li>
          <li>鹿泉市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="唐山市" name="tang">
        <p>选择地区：</p>
        <ul>
          <li>路南区</li>
          <li>路北区</li>
          <li>古冶区</li>
          <li>开平区</li>
          <li>丰南区</li>
          <li>丰润区</li>
          <li>滦县</li>
          <li>滦南县</li>
          <li>乐亭县</li>
          <li>迁西县</li>
          <li>玉田县</li>
          <li>唐海县</li>
          <li>遵化市</li>
          <li>迁安市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="秦皇岛市" name="qin">
        <p>选择地区：</p>
        <ul>
          <li>海港区</li>
          <li>山海关区</li>
          <li>北戴河区</li>
          <li>青龙满族自治县</li>
          <li>昌黎县</li>
          <li>抚宁县</li>
          <li>卢龙县</li>
          <li>其它区</li>
          <li>经济技术开发区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="邯郸市" name="han">
        <p>选择地区：</p>
        <ul>
          <li>邯山区</li>
          <li>丛台区</li>
          <li>复兴区</li>
          <li>峰峰矿区</li>
          <li>邯郸县</li>
          <li>临漳县</li>
          <li>成安县</li>
          <li>大名县</li>
          <li>涉县</li>
          <li>磁县</li>
          <li>肥乡县</li>
          <li>永年县</li>
          <li>邱县</li>
          <li>鸡泽县</li>
          <li>广平县</li>
          <li>馆陶县</li>
          <li>魏县</li>
          <li>曲周县</li>
          <li>武安市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="邢台市" name="xing">
        <p>选择地区：</p>
        <ul>
          <li>桥东区</li>
          <li>桥西区</li>
          <li>邢台县</li>
          <li>临城县</li>
          <li>内丘县</li>
          <li>柏乡县</li>
          <li>隆尧县</li>
          <li>任县</li>
          <li>南和县</li>
          <li>宁晋县</li>
          <li>巨鹿县</li>
          <li>新河县</li>
          <li>广宗县</li>
          <li>平乡县</li>
          <li>威县</li>
          <li>清河县</li>
          <li>临西县</li>
          <li>南宫市</li>
          <li>沙河市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="保定市" name="bao">
        <p>选择地区：</p>
        <ul>
          <li>新市区</li>
          <li>北市区</li>
          <li>南市区</li>
          <li>满城县</li>
          <li>清苑县</li>
          <li>涞水县</li>
          <li>阜平县</li>
          <li>徐水县</li>
          <li>定兴县</li>
          <li>唐县</li>
          <li>高阳县</li>
          <li>容城县</li>
          <li>涞源县</li>
          <li>望都县</li>
          <li>安新县</li>
          <li>易县</li>
          <li>曲阳县</li>
          <li>蠡县</li>
          <li>顺平县</li>
          <li>博野县</li>
          <li>雄县</li>
          <li>涿州市</li>
          <li>定州市</li>
          <li>安国市</li>
          <li>高碑店市</li>
          <li>高开区</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="张家口市" name="zhang">
        <p>选择地区：</p>
        <ul>
          <li>桥东区</li>
          <li>桥西区</li>
          <li>宣化区</li>
          <li>下花园区</li>
          <li>宣化县</li>
          <li>张北县</li>
          <li>康保县</li>
          <li>沽源县</li>
          <li>尚义县</li>
          <li>蔚县</li>
          <li>阳原县</li>
          <li>怀安县</li>
          <li>万全县</li>
          <li>怀来县</li>
          <li>涿鹿县</li>
          <li>赤城县</li>
          <li>崇礼县</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="承德市" name="cheng">
        <p>选择地区：</p>
        <ul>
          <li>双桥区</li>
          <li>双滦区</li>
          <li>鹰手营子矿区</li>
          <li>承德县</li>
          <li>兴隆县</li>
          <li>平泉县</li>
          <li>滦平县</li>
          <li>隆化县</li>
          <li>丰宁满族自治县</li>
          <li>宽城满族自治县</li>
          <li>围场满族蒙古族自治县</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="沧州市" name="cang">
        <p>选择地区：</p>
        <ul>
          <li>新华区</li>
          <li>运河区</li>
          <li>沧县</li>
          <li>青县</li>
          <li>东光县</li>
          <li>海兴县</li>
          <li>盐山县</li>
          <li>肃宁县</li>
          <li>南皮县</li>
          <li>吴桥县</li>
          <li>献县</li>
          <li>孟村回族自治县</li>
          <li>泊头市</li>
          <li>任丘市</li>
          <li>黄骅市</li>
          <li>河间市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="廊坊市" name="lang">
        <p>选择地区：</p>
        <ul>
          <li>安次区</li>
          <li>广阳区</li>
          <li>固安县</li>
          <li>永清县</li>
          <li>香河县</li>
          <li>大城县</li>
          <li>文安县</li>
          <li>大厂回族自治县</li>
          <li>开发区</li>
          <li>燕郊经济技术开发区</li>
          <li>霸州市</li>
          <li>三河市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="衡水市" name="heng">
        <p>选择地区：</p>
        <ul>
          <li>桃城区</li>
          <li>枣强县</li>
          <li>武邑县</li>
          <li>武强县</li>
          <li>饶阳县</li>
          <li>安平县</li>
          <li>故城县</li>
          <li>景县</li>
          <li>阜城县</li>
          <li>冀州市</li>
          <li>深州市</li>
          <li>其它区</li>
        </ul>
      </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num:0,
      numm:0,
      zaikuloginForm:{
        username:'admin',
        password:'123456'
      },
      zhuanjialoginloginForm:{
        username:'zhuanjia',
        password:'123456'
      },
      // 这是表单的验证规则对象
      zaikuloginFormRules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur'},
        ]
      },
      zhuanjialoginFormRules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur'},
        ]
      },
      list:['赵县2020年“气代煤”工程超任务户安全技术评估服务项目第一标段',
      '赵县2020年“气代煤”工程超任务户安全技术评估服务项目第二标段',
      '赵县2020年“气代煤”工程超任务户安全技术评估服务项目第三标段'],
      activeName: 'shi',
    }
  },
  methods:{
    zaiku_login(){
      this.$refs.zaikuloginFormRef.validate(async valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        // 2.通过编程式导航跳转到后台主页，路由地址是/home
        // this.$router.push('/home')
      })
    },
    zhuanjia_login(){
      this.$refs.zhuanjialoginFormRef.validate(async valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        // 2.通过编程式导航跳转到后台主页，路由地址是/home
        // this.$router.push('/home')
      })
    },
    handleClick(tab, event) {
      
    }
  }
}
</script>

<style lang="less" scoped>
// @import url("../../assets/css/base.css");
  .content{
    width: 26%;
    height: 300px;
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 30px;
  }
  .container{
    width: 70%;
    height: 95%;
    // border: 1px solid red;
    margin: 0 auto;
    margin-top: 5%;
      ul .active{
        color: rgb(2,148,200);
      }
      ul{
        width: 70%;
        height: 30px;
        // border: 1px solid blue;
        margin: 0 auto;
        // display: flex;
          li{
            // flex: 1;
            width: 46%;
            line-height: 30px;
            text-align: center;
            font-size: 22px;
          }
          li:first-child{
            width: 60%;
          }
          li:last-child{
            width: 37%;
          }
          span{
            display: inline-block;
            width: 2px;
            height: 100%;
            background-color: #333;
          }
      }
  }
  .denglu{
    width: 100%;
    height: 65%;
    margin: 0 auto;
    margin-top: 5%;
    // border: 1px solid black;
  }
  .el-button{
    width: 100%;
    border-radius: 15px;
  }
  .zaiku_login{
    width: 100%;
    height: 100%;
  }
  .zhuanjia_login{
    width: 100%;
    height: 100%;
  }
  .text{
    width: 100%;
    height: 18%;
    font-size: 14px;
  }

  .biaoduan{
    width: 40%;
    height: 200px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid red;
  }
  .xuanze{
    width: 100%;
    height: 20%;
    margin: 0 auto;
    display: table;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
      p{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 18px;
        color: rgb(2,129,180);
      }
  }
  .biaoduan_list{
    width: 86%;
    height: auto;
    margin: 0 auto;
    margin-top: 1%;
    // border: 1px solid black;
  }
  .biaoduan_list li{
    height: 30px;
  }

  .diqu{
    width: 70%;
    height: 200px;
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 30px;
      p{
        padding-left: 20px;
      }
      ul li{
        list-style: none;
        float: left;
        width: 10%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-left: 10px;
        margin-top: 10px;
        color: #333;
        background-color: rgb(243,244,246);
        overflow: hidden;
      }
      li:hover{
        color: #fff;
        background-color: rgb(0,97,197);
      }
  }
  
</style>