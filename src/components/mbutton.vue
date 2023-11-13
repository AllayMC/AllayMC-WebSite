<template>
    <button class="m-button">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
    
<script setup>
</script>
    
<style lang="scss" scoped>
.m-button {
    background: white;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    z-index: 50;
    transition: 200ms ease;

    &:hover {
        color: $theme-color-main;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
    }

    &:active {
        scale: 0.9;
    }
}
</style>