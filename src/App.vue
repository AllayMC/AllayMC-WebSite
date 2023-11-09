<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

onBeforeMount(() => {
  const lang = localStorage.getItem("lang");
  if (lang !== null) {
    locale.value = lang;
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.getElementsByTagName("html")[0].setAttribute("xml:lang", lang);
  }
});
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 1000px;
  scroll-behavior: smooth; //平滑滚动
  overflow-x: hidden;
}
</style>
