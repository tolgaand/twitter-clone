<template>
  <q-layout view="lHr lpR fFf">
    <left-menu></left-menu>
    <right-menu></right-menu>
    <Header></Header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftMenu from "src/components/LeftMenu";
import RightMenu from "src/components/RightMenu";
import Header from "src/components/Header";

export default {
  components: {
    Header,
    LeftMenu,
    RightMenu
  }
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
