import axios from "axios";
import { useApiStore } from "@/stores";

export async function getPNXServers() {
    const apiStore = useApiStore();
    let data;
    await axios.get('https://bstats.org/api/v1/plugins/10277/charts/nukkit_version/data').then(function (response) {
        // 处理成功情况
        data = response.data;
    }).catch(function (error) {
        // 处理错误情况
        console.log(error);
    });
    let count = 0;
    for (const each of data) {
        if (each.name.indexOf("PNX") !== -1) {
            count += each.y;
        }
    }
    apiStore.count1 = count;
}
export async function getPNXStars() {
    const apiStore = useApiStore();
    let count = 0;
    await axios.get('https://api.powernukkitx.cn/get-github-star').then(function (response) {
        // 处理成功情况
        count = response.data;
    }).catch(function (error) {
        // 处理错误情况
        console.log(error);
    });
    apiStore.count2 = count;
}