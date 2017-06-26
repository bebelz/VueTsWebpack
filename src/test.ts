import * as _ from 'lodash';

export default {
    component2() {
        let element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack2'], ' ');

        return element;
    }
}