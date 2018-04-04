import { observable, computed, action } from 'mobx'
import Axios from 'services/Axios';
import _ from 'lodash'

// type
export default class Type {
    @observable
    data = [];

    @action
    getType() {
        this.data = [
            { id: 1, label: '热门' },
            { id: 2, label: '科技' },
            { id: 3, label: '财经' },
            { id: 4, label: '体育' },
            { id: 5, label: '健康' },
            { id: 6, label: '娱乐' },
            { id: 7, label: '电影' },
            { id: 8, label: '农业' },
        ];
    }
}