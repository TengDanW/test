<template>
  <div>
    <router-view></router-view>
  <Tabbar>
    <TabbarItem path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/star_active.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/star.svg" />
      </template>
      <template v-slot:item-text>
        <div>Home</div>
      </template>
    </TabbarItem>

    <TabbarItem path="/about">
      <template v-slot:item-icon >
        <img src="@/assets/img/star_active.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/star.svg" />
      </template>
      <template v-slot:item-text>
        <div>About</div>
      </template>
    </TabbarItem>

    <TabbarItem path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/star_active.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/star.svg" />
      </template>
      <template v-slot:item-text>
        <div >Profile</div>
      </template>
    </TabbarItem>
  </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/bar/TabBar";
import TabbarItem from "./components/bar/TabBarItem";

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  methods:{

  }
};
</script>

<style>
</style>
