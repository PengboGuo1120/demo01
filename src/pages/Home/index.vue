<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- // 用于父子组件通信；自定义事件（子->父通信）；@bus；slot插槽；vuex；props -->
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
    <Brand></Brand>
  </div>
</template>

<script>
//引入剩余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'

export default {
  name: '',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    // 通知vuex发送请求，获取数据，存储于仓库中
    //派发action 获取floorlist
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },
  methods: {}
}
</script>

<style></style>
