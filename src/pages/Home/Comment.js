import React, { Component } from 'react'
import {
    Text,
    TextInput
} from 'react-native';

class CommentPage extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarVisible: false,
        title: "热门评论",
        headerRight: (<Text></Text>),
    }

    render() {
        return <Text>Comment list</Text>
    }
}

export default CommentPage;