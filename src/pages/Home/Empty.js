import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Empty extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item, navigation } = this.props;

        return <View style={styles.container}>
            <Text>Empty </Text>
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

export default Empty;