import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem";
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ion-')//设置icon自定义组件
        }
      }
    }),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/lang/**'),
    })
  ],
  resolve: {
    alias: {//配置路径别名,需要使用nodejs的path模块
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,//表示根元素字体大小或根据input参数返回根元素字体大小
          unitPrecision: 5,//精度，保留5位小数
          propList: ['*'],//可以从 px 更改为 rem 的属性
          selectorBlackList: [],//不替换的选择器
          // replace: true,
          // mediaQuery: false,
          // minPixelValue: 0,
          exclude: /node_modules/i
        })
      ]
    }
  }
})
