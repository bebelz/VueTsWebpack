import Vue from 'vue';
import Component from 'vue-class-component';

// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    props: {
        test: String
    },
    template: '<button @click="onClick">Click!</button>',
})
export default class MyComponent extends Vue {
    test: string;

    // Initial data can be declared as instance properties
    message: string = 'Hello!';
    // Component methods can be declared as instance methods
    onClick (): void {
        window.alert(this.message + ' : ' + this.test);
    }
}