<template>
  <Transition name="nav">
    <div class="top" v-show="isActive">
      <nav id="topnav">
        <div id="logo">
          <img class="logo-img" src="../assets/img/allay-logo.png"/>
          <router-link to="/" class="logotext">AllayMC</router-link>
        </div>
        <div id="menu">
          <router-link to="/download">{{
            $t("message.topmenu-menu2")
          }}</router-link>
          <a href="#">{{ $t("message.topmenu-menu3") }}</a>
          <a href="#">{{ $t("message.topmenu-menu4") }}</a>
          <a href="#">{{ $t("message.topmenu-menu5") }}</a>
          <a href="#">{{ $t("message.topmenu-menu6") }}</a>
        </div>
        <div id="right-icon">
          <div class="link">
            <ion-icon name="logo-github" @click="turnOtherWebsite('https://github.com/PowerNukkitX/PowerNukkitX')">
            </ion-icon>
            <ion-icon name="logo-discord" @click="turnOtherWebsite('https://discord.gg/XXus4FB6qf')"></ion-icon>
            <ion-icon name="people-outline" @click="turnOtherWebsite('https://jq.qq.com/?_wv=1027&k=FmV7FLaO')">
            </ion-icon>
          </div>
          <Lang></Lang>
        </div>
      </nav>
    </div>
  </Transition>
  <a class="smoothscroll" href="#about">
    <div class="scroll-down"></div>
  </a>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Lang from "./lang.vue";

//控制nav是否显示
let isActive = ref(true);

onMounted(() => window.addEventListener("scroll", navigation)); //监听滚动
onUnmounted(() => window.removeEventListener("scroll", navigation));

//滚动距离隐藏top menu效果
function navigation() {
  let scrollY = document.documentElement.scrollTop;
  if (scrollY >= 520) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
}

//打开外部网站
function turnOtherWebsite(url) {
  window.open(url, "_blank");
}
</script>

<style lang="scss" scoped>
.top {
  display: -webkit-flex; //Safari
  display: flex;
  justify-content: center; //里面的元素水平垂直居中
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  max-height: 60PX;
  z-index: 3;
  overflow: hidden;
  transition: all 0.3s;
  padding-bottom: 4px;
  background-color: #ffffff;

  #topnav {
    display: -webkit-flex; //Safari
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    #logo {
      margin-left: 50px;

      @media screen and (max-width: 1150px) {
        & {
          left: 10PX;
        }
      }
      .logo-img{
        position: relative;
        top: 2PX;
        right: 2PX;
        width: 35px;
        height: 35px;
      }

      .logotext {
        font-weight: 500;
        font-size: 28px;
        font-family: "Poppins", sans-serif;
        //文字透明
        color: transparent;
        opacity: 1;
        /*将背景裁剪为文字 */
        background-clip: text;
        -webkit-background-clip: text;
        background-image: -webkit-linear-gradient(left,
            #e9a5a5,
            #b8c1c0 10%,
            #65c0e0 20%,
            #aea2db 30%,
            #81c1d9 40%,
            #e9a5a5 50%,
            #b8c1c0 60%,
            #65c0e0 70%,
            #aea2db 80%,
            #81c1d9 90%,
            #e9a5a5);
      }
    }

    #menu {
      display: -webkit-flex;
      display: flex;
      list-style: none;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 30px;
      margin-left: 40px;

      a {
        display: -webkit-flex;
        display: flex;
        position: relative;
        flex-direction: column; //主轴设为纵向
        text-transform: uppercase; //转换文字大写
        font-weight: 500;
        font-size: 15PX;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
        margin-right: 30px;

        &:hover {
          color: rgb(29, 201, 210);

          &:after {
            opacity: 1;
          }
        }
      }
    }

    #right-icon {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      margin-right: 40px;

      ion-icon {
        top: 3PX;
        margin-right: 10PX;
      }

      .lang {
        margin-left: 20px;
        position: relative;
        top: 1PX;
      }

      .link ion-icon {
        position: relative;
        font-size: 25PX;
        max-height: 35PX;
        color: rgba(0, 0, 0, 0.8);
        transform: scale3d(1, 1, 1);
        transition: all 0.35s linear;
        cursor: pointer;

        &:nth-child(2) {
          position: relative;
          top: 4PX;
        }

        &:hover {
          color: rgba(0, 0, 0, 1);
          transform: scale3d(1.1, 1.1, 1.1);
          transition: all 0.35s linear;
        }
      }
    }
  }
}

@keyframes colorful {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100% 0;
  }
}

/*过渡效果*/
//nav
.nav-enter-active,
.nav-leave-active {
  transition: opacity 0.5s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
</style>