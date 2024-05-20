<template>
  <Topmenu></Topmenu>
  <div id="bg">
    <div class="wapper">
      <h1 id="slogan" v-html="$t('message.home-slogan')"></h1>
      <div id="mbuttons">
        <a href="https://github.com/AllayMC/Allay/actions"><Mbutton>Download</Mbutton></a>
        <a href="https://docs.allaymc.org"><Mbutton>Document</Mbutton></a>
      </div>
    </div>
    <div class="bubbles">
      <li v-for="bubble in bubbles" :style="{ '--i': bubble }" :key="bubble.id"></li>
    </div>
    <svg class="transition-background" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"
      preserveAspectRatio="none">
      <path
        d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z"
        class=""></path>
    </svg>
  </div>
  <!-- <About></About> -->
  <!-- <Stat></Stat> -->
</template>

<script setup>
import Topmenu from "@/components/topmenu.vue";
import About from "@/components/about.vue";
import Stat from "@/components/stat.vue";
import Mbutton from "@/components/mbutton.vue";

//气泡效果
function calcRandomArr() {
  let num;
  const width = document
    .getElementsByTagName("body")[0]
    .getBoundingClientRect().width;
  if (width >= 1500) num = 45;
  else if (width <= 800) num = 25;
  else num = 30;
  let bubbles = [];
  for (let i = 0, len = num; i < len; ++i) {
    let a = Math.round(Math.random() * 15) + 5;
    a += Math.random();
    bubbles.push(a + "s");
  }
  return bubbles;
}
const bubbles = calcRandomArr();
</script>

<style lang="scss" scoped>
@keyframes bubble {
  0% {
    transform: translateY(120vh) scale(0);
  }

  100% {
    transform: translateY(0vh) scale(1);
  }
}

#bg {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .transition-background {
    position: absolute;
    width: 100%;
    bottom: -10%;
    height: 200px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 120%;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  }

  .bubbles {
    display: flex;
    position: absolute;
    top: 0px;

    li {
      list-style: none;
      width: 30px;
      height: 30px;
      z-index: 1;
      background: linear-gradient(to right bottom,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.3));
      margin: 0 4px;
      border-radius: 50%;
      animation: bubble 15s linear infinite;
      animation-duration: var(--i);
    }
  }

  .wapper {
    display: flex;
    flex-direction: column;
    max-height: 300px;
    max-width: 650px;

    #slogan {
      color: #ffffff;
      font-size: 60px;
      text-align: center;
      /* 文本对齐中间 */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 2;
    }

    #mbuttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .m-button {
        margin: 30px 0px 15px 15px;
        min-width: 120px;
        height: 60px;
      }
    }
  }
}
</style>