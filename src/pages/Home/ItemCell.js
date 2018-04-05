import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class ItemCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item, nav } = this.props;

        return <View style={styles.container}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={{ uri: item.img }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.cellBottom}>
                    <Text style={styles.source}>{item.source}</Text>
                    <Text style={styles.datetime}>{item.datetime}</Text>
                </View>
            </View>
        </View>
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
    },
    cellBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    source: {
        flex: 1,
    },
    datetime: {
        flex: 1,
    }
})

export default ItemCell;