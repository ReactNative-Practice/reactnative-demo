import React, { Component } from "react";
import { BackHandler, View, ToastAndroid } from 'react-native'
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
import FlatlistScreen from 'pages/Component/FlatlistScreen'

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
            swipeEnabled: false,
            animationEnabled: false,
            showLabel: true,
            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ width: 24, height: 24 }}>
                    <Icon
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        size={24}
                        style={{ color: tintColor }}
                    />
                </View>
            ),
        })
    }
)

const ComponentTab = StackNavigator(
    {
        TabViewExample: TabViewExample,
        ComponentScreen: ComponentScreen,
        FlatlistScreen: FlatlistScreen,
    },
    {
        initialRouteName: "ComponentScreen",
        navigationOptions: ({ navigation: { state } }) => ({
            ...navigationConfig,
            tabBarLabel: '组件',
            swipeEnabled: false,
            showLabel: true,
            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ width: 24, height: 24 }}>
                    <Icon
                        name={focused ? 'ios-film' : 'ios-film-outline'}
                        size={24}
                        style={{ color: tintColor }}
                    />
                </View>
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
            swipeEnabled: false,
            showLabel: true,
            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ width: 24, height: 24 }}>
                    <Icon
                        name={focused ? 'ios-people' : 'ios-people-outline'}
                        size={24}
                        style={{ color: tintColor }}
                    />
                </View>
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
            swipeEnabled: false,
            showLabel: true,
            tabBarIcon: ({ tintColor, focused }) => (
                <View style={{ width: 24, height: 24 }}>
                    <Icon
                        name={focused ? 'ios-settings' : 'ios-settings-outline'}
                        size={24}
                        style={{ color: tintColor }}
                    />
                </View>
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
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            labelStyle: {
                fontSize: 13
            },
            tabStyle: {
                paddingBottom: 0
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