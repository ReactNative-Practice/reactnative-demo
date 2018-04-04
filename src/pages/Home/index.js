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

const sourceData = {
    title: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    img: 'https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg',
    source: '中国青年报',
    datetime: '2018-04-03',
    is_recommand: false,
}

@inject('store')
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            sourceData: [],
            delayShowScrollTableView: false,
        }
    }

    componentWillMount() {
        this.loadData()
        this.props.store.type.getType();
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                delayShowScrollTableView: true
            });
        }, 500);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerRight: (<Text></Text>),
        headerLeft: (<Text></Text>),
    })

    request = (code = '', action = 'get') => {
        console.log('request: Axios ', code);

        if (action == 'get') {
            Axios.get('banner?code=' + code, res => {
                console.log('_axios res: ', res)
            }, (err) => {
                console.log('home error:', err)
            });
        } else {
            Axios.post('banner?code=' + code, res => {
                console.log('_axios res: ', res)
            }, (err) => {
                console.log('home error:', err)
            });
        }
    }

    loadData() {
        let data = [];
        for (i = 0; i < 8; i++) {
            data.push(sourceData);
        }

        this.setState({ sourceData: this.state.sourceData.concat(data) })
    }

    logout = () => {
        this.props.store.user.logout();
    }

    // 上拉加载更多
    _onEndReached = () => {
        if (this.state.isEmpty) {
            return false;
        }

        this.loadData();
    };

    _header = () => {
        return null
    }

    _renderItem = ({ item }) => (
        <ItemCell
            nav={this.props.navigation}
            item={item}
        />
    );

    _keyExtractor = (item, index) => '' + index + '';

    _renderRefresh = () => {
        this.setState({ refreshing: true })//开始刷新
        //这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            // CustomToastAndroid.show('没有可刷新的内容！', CustomToastAndroid.SHORT);
            this.setState({ refreshing: false });
        }, 3000);
    };

    _footer = () => {
        if (this.state.isEmpty) {
            return <View></View>;
        }

        return <View style={{ padding: 8 }}>
            <ActivityIndicator size="small" />
            <Text style={{ textAlign: 'center' }}>加载中...</Text>
        </View>;
    }

    _separator = () => {
        return <Divider />;
    }

    // 空布局
    _renderEmptyView = () => {
        if (this.state.isEmpty) {
            return <View><Text style={{ textAlign: 'center', paddingTop: 10 }}>没有更多数据了</Text></View>
        }
        return <View></View>;
    }

    _renderContent() {
        let type = this.props.store.type.data;
        console.log('type: ', type)
        let content = null;
        if (type) {
            content = type.map((item, i) => {
                return <View tabLabel={item.label} key={i}
                    style={{ width: '100%', borderWidth: 1 }}
                >
                    {/* {i == 0
                        ? <View style={{ height: 160 }}><Banner /></View>
                        : null} */}
                    {/* <View style={{ width: '100%', height: 100, borderWidth: 1 }}>
                        <Text>xxx {i} {item.label}</Text>
                    </View> */}
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        // ListFooterComponent={this._footer}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        // onRefresh={this._renderRefresh}
                        refreshing={this.state.refreshing}
                        onEndReachedThreshold={0.2}
                        onEndReached={this._onEndReached}
                        numColumns={1}
                        // columnWrapperStyle={{ borderWidth: 2, borderColor: 'black', paddingLeft: 20 }}
                        //horizontal={true}
                        getItemLayout={(data, index) => (
                            { length: 100, offset: (100 + 2) * index, index }
                        )}
                        ListEmptyComponent={this._renderEmptyView}
                        data={this.state.sourceData}>
                    </FlatList>
                </View>
            })
        }

        return content;
    }

    render() {
        const { navigate, setParams, state } = this.props.navigation;
        let content = '';
        console.log('showScroll', this.state.delayShowScrollTableView)
        return (
            <ScrollableTabView
                style={styles.container}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
                tabBarBackgroundColor={Color.primary}
                tabBarInactiveTextColor='#A6C5BC'
                tabBarActiveTextColor='white'
                tabBarUnderlineColor='#FF0000'
                tabBarUnderlineStyle={styles.lineStyle}>

                <View tabLabel="tab1" style={{ marginTop: 50, borderWidth: 3, }}>
                    <Text style={{ color: 'red' }}>Tab 111</Text>
                </View>
                <View tabLabel="tab2" style={{ marginTop: 50, borderWidth: 3, }}>
                    <Text style={{ color: 'red' }}>Tab 2</Text>
                </View>

                <View tabLabel="tab3" style={{ marginTop: 50, borderWidth: 3, }}>
                    <Text style={{ color: 'red' }}>Tab 3</Text>
                </View>

                <View tabLabel="tab4" style={{ marginTop: 50, borderWidth: 3, }}>
                    <Text style={{ color: 'red' }}>Tab 4</Text>
                </View>


            </ScrollableTabView>

        );
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
