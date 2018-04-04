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
        const { item, navigation } = this.props;

        return <View style={styles.container}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={{ uri: item.img }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <View>
                    <Text>{item.source}</Text>
                    <Text>{item.datetime}</Text>
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

export default ItemCell;