<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

  <!-- 测试面板组件
  纯展示类组件通用封装思路总结：
  1.搭建纯静态的部分，不管可变的部分
  2.抽象可变的部分为组件参数非复杂的模版抽象成props，复杂的结构模版抽象为插槽 -->

  <!-- <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
<div>
  我是新鲜好物插槽内容
</div>
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
    <div>
      我是人气推荐插槽内容
    </div>
  </HomePanel> --> 
</template>
