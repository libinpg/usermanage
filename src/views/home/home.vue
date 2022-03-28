<template>
  <div id = "home">
    <nav-bar class = "home-nav"><div slot = "center">购物车</div></nav-bar>
    <HomeSwiper :banners = "banners"></HomeSwiper>
    <recommend-view :recommends = "recommends"></recommend-view>
    <FeatureView/>
    <TabbarControl :titles = "['流行','新款', '精选']" class="tabbar-control" @tabClick = "tabClick"></TabbarControl>
    <div>
      <GoodsList :goods = "goods[currentType].list"/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";

import RecommendView from "@/views/home/childComps/RecommendView";

import FeatureView from "@/views/home/childComps/FeatureView"

import {getMultiData, getGoodsData} from "@/network/home";

import TabbarControl from "@/components/common/TabbarControl/TabbarControl";

import GoodsList from "@/components/content/Goods/GoodsList";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabbarControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": {page: 0,list: []},
        "new": {page: 0,list: []},
        "sell": {page: 0,list: []}
      },
      currentType: 'pop'
    }
  },
  created() {
    this.getMultiData();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");

  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoodsData(type) {
      const page = this.goods[type].page + 1
      getGoodsData(type, page).then(res => {
        this.goods[type]["list"].push(...res.data.list)
      })
    },
    tabClick(index){
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = "new"
          break;
        case 2:
          this.currentType = 'sell'
      }
    }
  }
}

</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  color: #fff;
  background-color: var(--color-tint);
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 7;
}
.tabbar-control {
  position: sticky;
  background-color: var(--color-background);
  top: 40px;
  z-index: 9;
}
</style>
