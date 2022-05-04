<template>
    <div class="tar-bar-item" @click="toPage">
      <slot v-if="isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
  },
  methods:{
    toPage(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1;
    }
  },
};
</script>

<style>
@import url("../../assets/css/base.css");

.active {
  color:rgb(217, 139, 30)
}
.tar-bar-item img{
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle
}
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size:14px;
};



</style>