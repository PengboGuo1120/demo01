<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseLeave" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{ current: currentIndex === index }">
                <h3 @mouseenter="changeIndex(index)">
                  <!-- 1级标签 -->
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <!-- 二、三级分类列表 -->
                <div class="item-list clearfix" :style="{ display: currentIndex === index ? 'block' : 'none' }">
                  <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <!-- 2级标签 -->
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                          <!-- 3级标签 -->
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 该引入方式将lodash全部功能引入,最好按需引入
// import _ from 'lodash'
import throttle from 'lodash/throttle'

export default {
  name: 'TypeNav',
  data() {
    return {
      // 存储用户鼠标移动到哪一个一级分类
      currentIndex: -1,
      show: true
    }
  },
  methods: {
    mouseLeave() {
      this.currentIndex = -1
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    goSearch(event) {
      //将跳转事件放在父标签中，减少循环创建回调函数，利用事件委派。
      // 为子节点当中的<a>标签，添加自定义属性data-categoryName
      //通过点击事件event target dataset获取具体点击的数据
      let element = event.target
      let { categoryname, category1id, category2id, category3id } = element.dataset
      if (categoryname) {
        //整理路由跳转的传递参数
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        //区分1/2/3级标签
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        //拼接路径和参数形成最终跳转参数
        // 判断如果路由跳转带有params参数 应该携带
        if (this.$route.params) {
          location.params = this.$route.params
          location.query = query
          this.$router.push(location)
        }
      }
    },
    //控制导航栏的鼠标进入显示和移除隐藏
    enterShow() {
      this.show = true
    }
  },
  // 组件挂载完毕后，向服务器发送请求
  mounted() {
    // 如果不是home组件，隐藏typeNav
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      //
      categoryList: state => state.home.categoryList
    })
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .current {
    background-color: skyblue;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 502px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    //过渡动画样式
    //进入开始状态
    .sort-enter {
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
