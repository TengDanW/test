<template>
  <div class="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style>
@import url("../../assets/css/base.css");
.tar-bar {
  display: flex;
  background-color: #f2f2f2;
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px #d8d6d6;
}

</style>