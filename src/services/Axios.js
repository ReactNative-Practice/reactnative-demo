import axios from 'axios'
import Api from 'constants/api'
import { inject } from 'mobx-react/native';
import NavigatorService from 'services/Navigation'
import { NavigationActions } from 'react-navigation'
import { ToastAndroid } from 'react-native'
import store from '../stores'

export let AxiosConfig = {
    baseURL: Api.baseUrl,
    timeout: 10000,
    headers: {
        'Authorization': '',
        'Accept': 'application/json',
    }
};

// 拦截配置
let interceptorConfig = {};
let instance: axios;

export class _Axios {

    constructor(props) {

        if (props && typeof (props) == "object") {
            instance = axios.create(props);
        } else {
            instance = axios.create(AxiosConfig);
        }

        /**
         * 请求拦截器 进行相关参数校验，控制是否继续当次请求
         * @return
         ***/
        instance.interceptors.request.use(function (config) {
            // 添加token
            if (global.token) {
                config.headers['Authorization'] = 'Bearer ' + global.token
            }

            if (config) interceptorConfig = config;
            console.log('[请求拦截器]: ', '**', config.headers)
            return config
        }, function (error) {
            return Promise.reject(error);
        });

        /**
         * 响应拦截器，打印日志，简单的结果解析
         * @return
         ***/
        instance.interceptors.response.use((response) => {
            console.log('Data [响应拦截器]:', response);
            return response
        }, (error) => {
            let res = error.response;
            // Do something with response error
            console.log('error [响应拦截器]:', typeof res, error, '***');
            if (res && res.status == 401) {
                NavigatorService.navigate('Login')
            } else if (res && res.status == 500) {
                ToastAndroid.show('服务器错误，请稍后重试', ToastAndroid.SHORT);
            }
        })
    }

    get(url, success, fail) {
        instance.get(url)
            .then(res => {

                if (success) {
                    success(res)
                }

            })
            .catch((err) => {

                if (fail) {
                    fail(err)
                }

            })
    }

    post(url, params, success, fail) {
        return instance.post(url, params)
            .then(res => {

                if (success) {
                    success(res)
                }

            })
            .catch(err => {
                console.log('post error: ', err.message, err.response, err.status)
                if (fail) {
                    fail(err)
                }

            })
    }


}

const Axios = new _Axios();
export default Axios