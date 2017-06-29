import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        title: String,
        cptStart: Number
    }
})
export default class MultipleFilesComponent extends Vue {
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