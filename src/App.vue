<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home Search中显示，其余组件隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入Header组件
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 通知vuex发送请求，获取数据，存储于仓库中
    //派发action 获取商品三级列表
    this.$store.dispatch('categoryList')
  }
}
</script>

<style scoped></style>
