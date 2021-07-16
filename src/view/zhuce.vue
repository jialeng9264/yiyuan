<template>
  <div>
    <!-- 轮播 -->
    <div class="recommendPage">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="@/assets/img/banner00.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/banner01.jpg" alt="">
        </swiper-slide>
      </swiper>
    </div>
    
    <div class="content">
      <p class="xin">新用户注册</p>
      <div class="container">
        <!-- 表单 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" :label-position="labelPosition" class="demo-ruleForm">
          <!-- 用户名 -->
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            <span>支持6位以上数字、字母</span>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            <span>支持6位以上数字、字母</span>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            <span>请确认密码</span>
          </el-form-item>
          <!-- 单位名称 -->
          <el-form-item label="单位名称" prop="danweiname">
            <el-input v-model="ruleForm.danweiname"></el-input>
            <span>请输入与营业执照一致的名称</span>
          </el-form-item>
          <!-- 联系人 -->
          <el-form-item label="联系人" prop="lianxiren">
            <el-input v-model="ruleForm.lianxiren"></el-input>
            <span>请填写联系人姓名</span>
          </el-form-item>
          <!-- 职务 -->
          <el-form-item label="职务" prop="zhiwu">
            <el-input v-model="ruleForm.zhiwu"></el-input>
          </el-form-item>
          <!-- 联系电话 -->
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="ruleForm.phone" ></el-input>
          </el-form-item>
          <!-- 电子邮箱 -->
          <el-form-item prop="email" label="电子邮箱">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <!-- 注册返回 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即注册</el-button>
            <el-button type="warning" @click="back">返回</el-button>
          </el-form-item>
        </el-form>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var isMobileNumber= (rule, value, callback) => {
      if (!value) {
        return new Error("请输入电话号码");
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        const isPhone = reg.test(value);
        value = Number(value); //转换为数字
        if (typeof value === "number" && !isNaN(value)) {//判断是否为数字
        value = value.toString(); //转换成字符串
          if (value.length < 0 || value.length > 12 || !isPhone) { //判断是否为11位手机号
            callback(new Error("请输入正确的手机号码"));
          } else {
            callback();
          }
        } else {
          callback(new Error("请输入电话号码"));
        }
      }
    };
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
      labelPosition: 'right',
      ruleForm:{
        name:'',
        pass: '',
        checkPass: '',
        danweiname:'',
        lianxiren:'',
        zhiwu:'',
        phone:'',
        email:''
      },
      rules:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true,validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true,validator: validatePass2, trigger: 'blur' }
        ],
        danweiname: [
          { required: true,message: '请输入单位名称', trigger: 'blur' }
        ],
        lianxiren: [
          { required: true,message: '请输入联系人姓名', trigger: 'blur' }
        ],
        zhiwu: [
          { required: true,message: '请输入职位', trigger: 'blur' }
        ],
        phone:[
          { required: true,message: '请输入联系电话', trigger: 'blur' },
          { validator: isMobileNumber, trigger: "blur" }
        ],
        email:[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  components:{
    swiper,
    swiperSlide,
    'v-footer':footer
  },
  methods:{
    onSubmit() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    back(){
       this.$router.push('/shouye')
    }
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

  // 内容
  .content{
    width: 70%;
    height: 800px;
    margin: 0 auto;
    margin-top: 30px;
    // border: 1px solid red;
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%);
    // z-index: 99;
    background-color: #fff;
    box-shadow: 0px 1px 16px 2px rgba(0,0,0,0.4);
      .xin{
        display: inline-block;
        width: 80%;
        height: 40px;
        // border: 1px solid red;
        line-height: 40px;
        margin-left: 2%;
        margin-top: 2%;
        border-left: 7px solid #fdcf3b;
        font-size: 26px;
        color: #0069bb;
        padding-left: 20px;
      }
  }
  
  .container{
    width: 60%;
    height: 80%;
    // border: 1px solid red;
    margin: 0 auto;
    margin-top: 8%;
  }
  .el-input{
    width: 50%;
  }
  .footer{
    margin-top: 20px;
  }
</style>