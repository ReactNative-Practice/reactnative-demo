import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class ItemList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item, navigation } = this.props;

        return <FlatList
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