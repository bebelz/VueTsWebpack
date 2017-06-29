import Vue from "vue";
import FullTypescriptComponent from './components/FullTypescriptComponent';
import SingleFileComponent from './components/SingleFileComponent.vue';
import MultipleFilesComponent from './components/multiple-files-component/MultipleFilesComponent.vue';

let v = new Vue({
	el: "#app",
	template: `
    <div>
        <full-typescript-component :title="'Hello'" :cptStart="1"></full-typescript-component>
        <single-file-component :title="'Hello'" :cptStart="1"></single-file-component>
        <multiple-files-component :title="'Hello'" :cptStart="1"></multiple-files-component>
    </div>
    `,
	components: { FullTypescriptComponent, SingleFileComponent , MultipleFilesComponent}
});