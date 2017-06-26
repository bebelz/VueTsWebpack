import Vue from "vue";
import HelloComponent from './components/Hello.vue';
import MyComponent from './components/Hello2';

let v = new Vue({
	el: "#app",
	template: `
    <div>
        TEST
        <my-component :test="'test'"></my-component>
        <hello-component :test="'test2'"></hello-component>
    </div>
    `,
	components: { MyComponent, HelloComponent }
});