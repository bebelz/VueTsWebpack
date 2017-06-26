<template>
    <div>
        <button @click="onClick">Click!</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: {
            test: String
        },
        template: '<button @click="onClick">Click!</button>'
    })
    export default class HelloComponent extends Vue {
        test: string;

        // Initial data can be declared as instance properties
        message: string = 'Hello!';
        // Component methods can be declared as instance methods
        onClick (): void {
            window.alert(this.message + ' : ' + this.test);
        }
    }
</script>
