import React, { Component } from "react";
import { BackHandler, ToastAndroid } from 'react-native'
import {
    getChildEventSubscriber,
    addNavigationHelpers,
    StackNavigator,
    TabNavigator,
    SwitchNavigator,
    NavigationActions
} from "react-navigation";
import Color from 'constants/Color'
import Icon from 'react-native-vector-icons/Ionicons';
import Login from 'pages/Login'
import Home from 'pages/Home'
import Detail from 'pages/Home/Detail'
import Profile from 'pages/Profile'
import Favorite from 'pages/Profile/Favorite'
import SignUp from 'pages/Login/SignUp'
import ForgotPwd from 'pages/Login/ForgotPwd'
import AuthLoading from 'pages/Login/AuthLoading'
import ComponentScreen from 'pages/Component'
import TabViewExample from 'pages/Component/TabViewExample'

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

const HomeTab = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
        AuthLoading: AuthLoading,
    },
    {
        initialRouteName: "Home",
        navigationOptions: ({ navigation: { state } }) => ({
            ...navigationConfig,
            tabBarLabel: '首页',
            lazyLoad: true,
            animationEnabled: false,
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor, fontWeight: 'bold' }}
                />
            ),
        })
    }
)

const ComponentTab = StackNavigator(
    {
        TabViewExample: TabViewExample,
        ComponentScreen: ComponentScreen,
    },
    {
        initialRouteName: "TabViewExample",
        navigationOptions: ({ navigation: { state } }) => ({
            ...navigationConfig,
            tabBarLabel: '组件',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-film' : 'ios-film-outline'}
                    size={26}
                    style={{ color: tintColor, fontWeight: 'bold' }}
                />
            ),
        })
    }
)

const LoginTab = StackNavigator(
    {
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        ForgotPwd: { screen: ForgotPwd },
    },
    {
        initialRouteName: "Login",
        navigationOptions: ({ navigation: { state } }) => ({
            ...navigationConfig,
            tabBarLabel: '登录',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-people' : 'ios-people-outline'}
                    size={26}
                    style={{ color: tintColor, fontWeight: 'bold' }}
                />
            ),
        })
    }
)

const ProfileTab = StackNavigator(
    {
        Profile: { screen: Profile },
        Favorite: { screen: Favorite },
    },
    {
        initialRouteName: "Profile",
        navigationOptions: () => ({
            ...navigationConfig,
            tabBarLabel: '个人中心',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                    size={26}
                    style={{ color: tintColor, fontWeight: 'bold' }}
                />
            ),
        })
    }
)

const Stack = TabNavigator(
    {
        Home: { screen: HomeTab },
        Component: { screen: ComponentTab },
        Login: { screen: LoginTab },
        Profile: { screen: ProfileTab }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
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