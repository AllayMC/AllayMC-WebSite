import { createPinia, defineStore } from "pinia";

// 创建store实例
const pinia = createPinia()
export default pinia;

//api store
export const useApiStore = defineStore('apiStore', {
    state: () => {
        return { count1: 0, count2: 0 }
    }
});