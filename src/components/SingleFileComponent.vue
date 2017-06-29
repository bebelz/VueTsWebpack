<template>
    <div>
        <span class="title">{{ title }}</span>
        <button @click="onClick">Click!</button>
        <span>clicked : {{ cpt }}</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: {
            title: String,
            cptStart: Number
        }
    })
    export default class SingleFileComponent extends Vue {
        title: string;
        cptStart: number;

        cpt: number;

        constructor() {
            super();
            this.cpt = !this.cptStart ? 0 : this.cptStart;
        }

        onClick (): void {
            this.cpt++;
        }
    }
</script>

<style scoped>
    .title {
        font-weight: bold;
    }
</style>
