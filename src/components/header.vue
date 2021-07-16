<template>
  <div class="header">
    <div class="top">
      <div class="logo fl">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div class="tel fr">
        <img src="@/assets/img/tel.png" alt="">
        <span>咨询热线：400-123-4567</span>
        <button class="zhuce">注册</button>
      </div>
    </div>

    <!--  -->
    <div class="menu">
      <div class="menu_list">
        <router-link 
          :to="item.link" 
          v-for="(item,index) in menuLists"
          :key="index"
          :class="{'active':activeIndex === index}"
          @click.native="changeIndex(index)"
          class="menu_list_item"
          >
            {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuLists:[
        {
          title:'首页',
          link:'/'
        },
        {
          title:'交易中心',
          link:'/jiaoyizhongxin'
        },
        {
          title:'器械供应',
          link:'/qixiegongying'
        },
        {
          title:'药品招标',
          link:'/yaopinzhaobiao'
        },
        {
          title:'耗材招标',
          link:'/haocaizhaobiao'
        },
        {
          title:'帮助中心',
          link:'/help'
        },
        {
          title:'联系我们',
          link:'/lianxi'
        }
      ],
      activeIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.activeIndex = index
    }
  },
  watch:{
    '$route'(val){
      this.menuLists.map((item,index) => {
        if(val.path.indexOf(item.link) !== -1){
          this.activeIndex = index
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    // height: 130px;
    // border:1px solid red;
  }
  .top{
    width: 70%;
    height: 50px;
    background-color: #D3D3D3;
    // border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
  }
  .tel{
    height: 50px;
     display: flex;
    justify-content: flex-start;
    align-items: center;
    // border: 1px solid red;
      img{
        height: 100%;
      }
      span{
        color: rgb(6, 105, 187);
      }
      button{
        margin-left: 10px;
        padding: 2px 20px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        background-color: rgb(253,207,59);
        color: #fff;
      }
  }

  .menu{
    width: 100%;
    height: 60px;
    margin-top: 70px;
    background-color: #C0C0C0;
    // border: 1px solid red;
  }
  .menu_list{
    width: 70%;
    height: 60px;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
      .menu_list_item{
        flex: 1;
        height: 100%;
        color: #333;
        text-align: center;
        line-height: 60px;
          &:hover,
          &.active {
            background-color: rgb(0,102,187);
            color: #fff;
          }
      }
  }
</style>