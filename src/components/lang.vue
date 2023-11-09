<template>
  <div class="lang">
    <ion-icon name="language-outline" id="lang-trigger" class="md hydrated"
      :class="{ 'scale3d-enable': langActive, 'scale3d-disable': !langActive }" @mouseover="setLangActive(true)"
      @mouseleave="setLangActive(false)"></ion-icon>
    <Transition name="zoom">
      <div class="lang-dropdown" v-show="langActive" @mouseover="setLangActive(true)"
        @mouseleave="setLangActive(false)">
        <ul>
          <li v-for="k in langs" class="lang-option" :key="k.id" @click="setLang(k['lang'])">
            {{ k["name"] }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const langs = [
  { lang: "zh", name: "简体中文" },
  { lang: "en", name: "English" },
];
let langActive = ref(false);
let timeoutID = 0;
const { locale } = useI18n();

function setLangActive(value) {
  if (value) {
    if (timeoutID !== 0) clearTimeout(timeoutID);
    langActive.value = true;
  } else {
    timeoutID = setTimeout(() => {
      langActive.value = false;
    }, 20);
  }
}

//调整网页语言
function setLang(lang) {
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
  document.getElementsByTagName("html")[0].setAttribute("xml:lang", lang);
  locale.value = lang;
  localStorage.setItem("lang", lang);
}
</script>
    
<style lang="scss" scoped>
.lang {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;

  @media screen and (max-width: 1150px) {
    & {
      margin-right: 100px;
    }
  }

  ion-icon {
    font-size: 25PX;
    transition: transform 0.7s, color 0.7s;
    -webkit-transition: transform 0.7s, color 0.7s; //适配safari
    cursor: pointer;
  }

  .lang-dropdown {
    position: fixed;
    z-index: 4;
    background: transparent;
    margin-top: 20px;
    padding-top: 10px;
    min-width: auto;
    height: auto;

    ul {
      display: flex;
      flex-direction: column; //主轴垂直,辅轴水平
      align-items: center; //辅轴居中
      list-style: none; //清理默认样式
      background-color: #fff;
      color: #2c3e50; //ul里面的文本颜色
      border-radius: 12px; //圆角
      padding: 10px;
      -webkit-box-shadow: 0 5px 20px 0 rgb(0 0 0 / 5%);
      box-shadow: 0 5px 20px #0000002c;

      li {
        padding: 5px 5px;
        width: 100%;
        text-align: center;
        cursor: pointer;
        margin: 0;
        border: 0;
        background: transparent;
        opacity: 0.7;
        font-size: 1rem;
        font-weight: 700;
        -webkit-transition: all 0.25s ease, color 0s; //适配safari
        transition: all 0.25s ease, color 0s;

        &:hover {
          color: #000000;
          opacity: 1;
        }
      }
    }
  }
}

.zoom-enter-active {
  animation: zoomIn 0.5s;
}

.zoom-leave-active {
  animation: zoomOut 0.25s;
}

// 语言图标动画
.scale3d-enable {
  color: rgba(0, 0, 0, 1);
  transform: scale3d(1.1, 1.1, 1.1);
}

.scale3d-disable {
  color: rgba(0, 0, 0, 0.8);
  transform: scale3d(1, 1, 1);
}
</style>