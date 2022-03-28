<template>
  <div class = "goods">
    <goods-list-item v-for = "item in goods" :goodsItem ="item" @click = "" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  flex-wrap : wrap;
  display: flex;
  justify-content: space-around;

  padding: 2px;
}
</style>
