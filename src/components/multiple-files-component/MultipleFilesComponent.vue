<template>
    <div>
        <span class="title">{{ title }}</span>
        <button @click="onClick">Click!</button>
        <span>clicked : {{ cpt }}</span>
    </div>
</template>

<script lang="ts" src="./MultipleFilesComponent.ts">
</script>

<style scoped>
    .title {
        font-weight: bold;
    }
</style>
