<template>
  <section id="about">
    <div class="container">
      <div class="frist">
        <h2>{{ $t("message.about-frist") }}</h2>
        <div class="block"></div>
      </div>
      <div class="group">
        <textCard v-for="textCard in textCardGroup" :typcn-icon="textCard.icon" :title="textCard.title"
          :content="textCard.content" :key="textCard.id">
        </textCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import textCard from "./textcard.vue";
import { reactive, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const textCardGroup = reactive([
  {
    icon: "typcn-chart-line",
    title: t("message.about-textcard1-title"),
    content: t("message.about-textcard1-content"),
  },
  {
    icon: "typcn-folder-add",
    title: t("message.about-textcard2-title"),
    content: t("message.about-textcard2-content"),
  },
  {
    icon: "typcn-cog-outline",
    title: t("message.about-textcard3-title"),
    content: t("message.about-textcard3-content"),
  },
  {
    icon: "typcn-device-desktop",
    title: t("message.about-textcard4-title"),
    content: t("message.about-textcard4-content"),
  },
  {
    icon: "typcn-puzzle-outline",
    title: t("message.about-textcard5-title"),
    content: t("message.about-textcard5-content"),
  },
  {
    icon: "typcn-th-small-outline",
    title: t("message.about-textcard6-title"),
    content: t("message.about-textcard6-content"),
  },
]);

//监听语言更改，然后更新CardGroup内容
watch(locale, async (newLocale, oldLocale) => {
  updateTextCardGroup();
});

function updateTextCardGroup() {
  for (let i = 0, len = textCardGroup.length; i < len; ++i) {
    textCardGroup[i].title = t(`message.about-textcard${i + 1}-title`);
    textCardGroup[i].content = t(`message.about-textcard${i + 1}-content`);
  }
}
</script>

<style lang="scss" scoped>
#about {
  padding: 120px 0 50px 0;

  .container {
    position: relative;
    width: 100%;
    max-width: 1250px;
    max-height: 800px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;

    .group {
      display: flex;
      flex-wrap: wrap; //装不下就换行
      justify-content: space-between;
      align-content: space-between;
      max-height: 800px;
      overflow: hidden;
    }

    .frist {
      h2 {
        font-size: 40px;
        font-weight: 300;
      }

      .block {
        width: 95px;
        height: 3px;
        background: #e55d87;
        background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
        background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
        background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
        margin-bottom: 50px;
      }
    }
  }

  .container:after,
  .row:after,
  .u-cf {
    content: "";
    display: table;
    clear: both;
  }

  .six.columns {
    width: 48%;
  }
}
</style>