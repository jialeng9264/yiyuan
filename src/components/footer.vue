<template>
  <div class="footer">
    <div class="footer_content">
      <div class="link">
        <router-link
          :to="item.link" 
          v-for="(item,index) in menuLists"
          :key="index"
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
          link:'shouye'
        },
        {
          title:'交易中心',
          link:'jiaoyizhongxin'
        },
        {
          title:'招标公告',
          link:'/'
        },
        {
          title:'中标公告',
          link:'/'
        },
        {
          title:'帮助中心',
          link:'help'
        },
        {
          title:'联系我们',
          link:'lianxi'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .footer{
    width: 100%;
    height: 140px;
    background-color: rgb(45,53,64);
    position: relative;
  }
  .footer_content{
    width: 70%;
    height: 50px;
    // background-color: red;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    border-bottom: 1px solid rgb(66,74,85)
  }
  a{
    color: #fff;
  }
  .link a:not(:last-child){
    border-right: 1px solid #fff;
    padding-right: 5px;
  }
  .link a:not(:first-child){
    padding-left: 5px;
  }
</style>