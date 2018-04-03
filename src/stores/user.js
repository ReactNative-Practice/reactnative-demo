import { observable, computed, action } from 'mobx'
import Axios from 'services/Axios';
import _ from 'lodash'
import Toast from 'components/Toast'
import NavigationService from 'services/Navigation';
import StorageUtil from 'utils/StorageUtil';

// user store
class User {

    @observable
    token = '';


    @action
    login = (params) => {
        let data = {
            "grant_type": "password",
            "client_id": "2",
            "client_secret": "hrsgtjQ7PxAWlKihsCj3qL9XRJbOgLYFP9DBtCWg"
        }

        data = _.merge(params, data);
        console.log('login data:', data)
        Axios.post('login', data, (res) => {
            console.log('user store:::', res)
            this.token = res
            global.token = res.access_token;

            StorageUtil.save('token', res)
            NavigationService.navigate('Home')
        }, err => {
            console.log('err.login:', err.response)
            let res = err.response;
            if (res && res.status == 400) {
                Toast.show(res.data.message)
            }
        })
    }

    @action
    logout() {
        this.token = ''
        StorageUtil.delete('token')
        global.token = ''
        NavigationService.navigate('Login')
    }

}

export default User;