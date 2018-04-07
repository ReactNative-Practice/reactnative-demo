import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator,
    TouchableNativeFeedback
} from 'react-native';
import ItemCell from './ItemCell'
import { Divider } from 'react-native-elements'
import Banner from 'components/Banner'
import Color from 'constants/Color'

const sourceData = {
    title: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    img: 'https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg',
    source: '中国青年报',
    content: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    type_name: '',
    type_id: '',
    created_time: '2018-04-03',
    is_recommand: false,
}

class ItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sourceData: [],
            refreshing: false,
            isEmpty: false,
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    loadData() {
        let data = [];
        for (i = 0; i < 5; i++) {
            data.push(sourceData);
        }
        console.log('itemList load:', this.props.typeId, data)
        this.setState({ sourceData: this.state.sourceData.concat(data), refreshing: false })
    }

    _header = () => {
        if (this.props.typeId == 1) {
            return <View style={{ height: 160 }}><Banner /></View>
        } else {
            return null
        }
    }

    _renderItem = ({ item }) => {
        return <View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.nav.navigate('Detail', { typeId: item.id })}>
                <ItemCell
                    nav={this.props.nav}
                    item={item}
                />
            </TouchableOpacity>
        </View>
    }

    _keyExtractor = (item, index) => '' + index;

    _renderRefresh = () => {
        console.log('_renderRefresh itemList')
        this.loadData();
        this.setState({ refreshing: true })//开始刷新
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 3000);
    }

    _footer = () => {
        if (this.state.isEmpty) {
            return null;
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
            return <View>
                <Text style={{ textAlign: 'center', paddingTop: 10 }}>没有更多数据了</Text>
            </View>
        }
        return null;
    }

    // 上拉加载更多
    _onEndReached = () => {
        console.log('_onEndReached itemList')
        if (this.state.isEmpty) {
            return false;
        }

        this.loadData();
    }

    render() {
        const { typeId, nav } = this.props;
        console.log('ItemList: ', typeId, nav);

        return <FlatList
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            onRefresh={this._renderRefresh}
            refreshing={this.state.refreshing}
            onEndReachedThreshold={0.1}
            onEndReached={this._onEndReached}
            numColumns={1}
            ListEmptyComponent={this._renderEmptyView}
            getItemLayout={(data, index) => (
                { length: 80, offset: (80 + 2) * index, index }
            )}
            data={this.state.sourceData}>
        </FlatList>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        color: '#333',
        height: 60,
        borderWidth: 1,
    },
    imgView: {
        flex: 1,
    },
    img: {
        width: 80,
        height: 80,
    },
    content: {
        flex: 3,
    }
})

export default ItemList;