import React, { Component } from "react";
import { BackHandler, ToastAndroid } from 'react-native'
import {
    getChildEventSubscriber,
    addNavigationHelpers,
    StackNavigator,
    SwitchNavigator,
    NavigationActions
} from "react-navigation";
import Color from 'constants/Color'

import Login from 'pages/Login'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import SignUp from 'pages/Login/SignUp'
import ForgotPwd from 'pages/Login/ForgotPwd'
import AuthLoading from 'pages/Login/AuthLoading'

/** 配置导航的属性 **/
const navigationConfig = {
    headerStyle: {
        height: 45,
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: Color.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        flex: 1,
    },
}

// const AuthStack = StackNavigator(
//     {
//         Login: { screen: Login },
//         SignUp: { screen: SignUp },
//         ForgotPwd: { screen: ForgotPwd },
//     },
//     {
//         initialRouteName: "Login",
//         navigationOptions: ({ navigation: { state } }) => ({
//             title: state.params && state.params.title,
//             ...navigationConfig
//         })
//     }
// )

// const AppStack = StackNavigator(
//     {
//         Home: { screen: Home },
//         Profile: { screen: Profile },
//     },
//     {
//         initialRouteName: "Home",
//         navigationOptions: ({ navigation: { state } }) => ({
//             title: state.params && state.params.title,
//             ...navigationConfig
//         })
//     }
// )

const Stack = StackNavigator(
    {
        AuthLoading: AuthLoading,
        Home: { screen: Home },
        Profile: { screen: Profile },
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        ForgotPwd: { screen: ForgotPwd },
    },
    {
        initialRouteName: "AuthLoading",
        navigationOptions: ({ navigation: { state } }) => ({
            title: state.params && state.params.title,
            ...navigationConfig
        })
    }
)


const lastBackPressed = false
const defaultStateAction = Stack.router.getStateForAction
Stack.router.getStateForAction = (action, state) => {

    if (state && action.type === NavigationActions.BACK
        && (state.routes[state.routes.length - 1].routeName == 'Login'
            || state.routes.length === 1)) {
        if (lastBackPressed + 2000 < Date.now()) {
            ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
            lastBackPressed = Date.now();
            const routes = [...state.routes];
            return {
                ...state,
                ...state.routes,
                index: routes.length - 1,
            };
        } else {
            BackHandler.exitApp();
        }
    }

    return defaultStateAction(action, state);
}

export default Stack;