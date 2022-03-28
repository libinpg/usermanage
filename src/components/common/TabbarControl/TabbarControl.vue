<template>
<div class = "tabbar-control">
  <div v-for = "(item, index) in titles " class="tabbar-control-item" :class = "{ active: index === currentIndex}" @click = "btnClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabbarControl",
  props: {
    titles: {
       type: Array,
       default() {
         return []
       }
     }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
}
</script>

<style scoped>
.tabbar-control {
  display: flex;
  text-align: center;
  font-size: 15px;
}

.tabbar-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}

.tabbar-control-item span{
  padding: 5px;
}
</style>
