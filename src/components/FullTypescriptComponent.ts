import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        title: String,
        cptStart: Number
    },
    template: `
        <div>
            <span class="title">{{ title }}</span>
            <button @click="onClick">Click!</button>
            <span>clicked : {{ cpt }}</span>
        </div>`
})
export default class FullTypescriptComponent extends Vue {
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