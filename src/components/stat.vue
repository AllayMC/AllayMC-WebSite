<template>
    <section id="stat">
        <div class="container">
            <div class="title">
                <h2>{{ $t("message.stat-title") }}</h2>
                <div class="block"></div>
            </div>
            <div class="content">
                <div class="stat">
                    <span>
                        <div class="num">{{apiStore.count1}}</div>{{$t("message.stat-span1")}}
                    </span>
                    <div class="subtitle">
                        {{$t("message.stat-subtitle1")}}
                    </div>
                </div>
                <div class="stat">
                    <span>
                        <div class="num">{{apiStore.count2}}</div>{{$t("message.stat-span2")}}
                    </span>
                    <div class="subtitle">
                        {{$t("message.stat-subtitle2")}}
                    </div>
                </div>
                <div class="stat">
                    <span>
                        {{$t("message.stat-span3")}}
                    </span>
                    <div class="subtitle">
                        {{$t("message.stat-subtitle3")}}
                    </div>
                </div>
                <div class="stat">
                    <span>
                        {{$t("message.stat-span4")}}
                    </span>
                    <div class="subtitle">
                        {{$t("message.stat-subtitle4")}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { getPNXServers, getPNXStars } from '@/api';
import { useApiStore } from "@/stores";
const apiStore = useApiStore();

onBeforeMount(() => {
    getPNXServers();
    getPNXStars();
});

</script>

<style lang="scss" scoped>
#stat {
    padding: 0 0 20px 0;

    .container {
        position: relative;
        width: 100%;
        max-width: 1250px;
        max-height: 800px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
        overflow: hidden;

        .title {
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

        .content {
            /* Safari */
            display: -webkit-flex;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;

            .stat {
                /* Safari */
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                scale: 1;
                width: 280px;
                height: 150px;
                background: #6cdbeb;
                border-radius: 10px;
                transition: scale .5s;

                span {
                    color: #ffffff;
                    font-size: 24px;
                    font-weight: 700;

                    .num {
                        display: inline-block;
                        font-size: 28px;
                    }
                }

                .subtitle {
                    color: #ffffff;
                    font-weight: 400;
                }

                &:hover {
                    scale: 1.1;
                }
            }
        }
    }
}
</style>