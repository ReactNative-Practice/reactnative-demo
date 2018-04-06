import React, { Component } from 'react'
import { Text, View, FlatList, } from 'react-native';

const sourceData = {
    title: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    img: 'https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg',
    source: '中国青年报',
    category: '',
    datetime: '2018-04-03',
    is_recommand: false,
}

class FlatListScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            refreshing: false,
            sourceData: [1, 2, 3],
            isEmpty: false
        }
    }

    loadData() {
        let data = [];
        let i = data.length;
        for (i; i < i + 5; i++) {
            data.push(i);
        }
        console.log('itemList load:', )
        this.setState({ sourceData: this.state.sourceData.concat(data) })
    }

    _keyExtractor = (item, index) => '' + index;

    _renderRefresh = () => {
        console.log('_renderRefresh')
        this.setState({ refreshing: true })//开始刷新
        setTimeout(() => {
            this.loadData()
        }, 3000);
    }

    _renderItem = ({ item }) => (
        <Text style={{ padding: 20, borderWidth: 1 }}> {item}</Text >
    );

    // 上拉加载更多
    _onEndReached = () => {
        if (this.state.isEmpty) {
            return false;
        }
        console.log('_onEndReached itemList')

        this.loadData();
    }

    render() {
        return <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onRefresh={this._renderRefresh}
            refreshing={this.state.refreshing}
            onEndReachedThreshold={0.1}
            onEndReached={this._onEndReached}
            numColumns={1}
            data={this.state.sourceData}>
        </FlatList>
    }
}

export default FlatListScreen;