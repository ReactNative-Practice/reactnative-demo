import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Axios, { _Axios, AxiosConfig } from 'services/Axios';
import axios from 'axios'
import { inject } from 'mobx-react/native';
import Color from 'constants/Color';
import { Button, Divider } from 'react-native-elements';
import StorageUtil from 'utils/StorageUtil';
import Banner from 'components/Banner';
import ItemList from './ItemList';
import ItemCell from './ItemCell';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

@inject('store')
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            delayShowScrollTableView: false,
        }
    }

    componentWillMount() {
        this.props.store.type.getType();
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                delayShowScrollTableView: true
            });
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerRight: (<Text></Text>),
        headerLeft: (<Text></Text>),
    })


    logout = () => {
        this.props.store.user.logout();
    }

    _renderContent() {
        let type = this.props.store.type.data;
        console.log('type: ', type)
        let content = null;
        if (type) {
            content = type.map((item, i) => {
                return <View key={i} tabLabel={item.label}>
                    <ItemList
                        nav={this.props.navigation}
                        typeId={item.id}
                    />
                </View>
            })
        }

        return content;
    }

    render() {
        const { navigate, setParams, state } = this.props.navigation;
        let content = '';
        if (this.state.delayShowScrollTableView) {
            return (
                <ScrollableTabView
                    style={styles.container}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarBackgroundColor="#fff"
                    tabBarInactiveTextColor='#666'
                    tabBarActiveTextColor={Color.primary}
                    tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}
                >

                    {this._renderContent()}
                </ScrollableTabView>
            )
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    lineStyle: {
        // backgroundColor: 'white',
        // width: 70
    },
});

export default Home;
