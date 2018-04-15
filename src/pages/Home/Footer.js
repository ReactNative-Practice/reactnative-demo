import React, { Component } from 'react';
import {
    View,
    WebView,
    Keyboard,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button, Divider, Text, Input, Icon } from 'react-native-elements'
import HTMLView from 'react-native-htmlview'
import WebContainer from 'components/WebContainer.js'
import Color from 'constants/Color';
import Detail from 'pages/Home/Detail';
const height = Dimensions.get('screen').height;

class Footer extends Component {

    _textInput: any;
    constructor(props) {
        super(props);

        this.state = {
            inputVisible: false,
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        console.log('Keyboard Shown');
        this.setState({ inputVisible: true })
    }

    _keyboardDidHide = () => {
        console.log('Keyboard Hide');
        this.setState({ inputVisible: false })
    }

    render() {
        const item = this.props.item;
        console.log('footer render', this.state, item)

        if (this.state.inputVisible) {
            return <View style={styles.comment}>
                <Input
                    ref={textInput => (this._textInput = textInput)}
                    placeholder='发表评论'
                    containerStyle={styles.commentInput}
                    inputStyle={styles.commentInputStyle}
                />
                <Button clear titleStyle={styles.titleStyle} style={styles.commentSend} title={"发送"}></Button>
            </View>
        } else {
            return <View style={styles.comment}>
                {/* <Input
                    placeholder='发表评论'
                    containerStyle={styles.inputContainerWarp}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    onFocus={() => {
                    }}
                /> */}
                <View style={[styles.inputContainerWarp, styles.inputContainerStyle]}>
                    <Text style={[styles.inputStyle, styles.textinputStyle]}
                        onPress={() => {
                            this.setState({ inputVisible: true }, () => {
                                this._textInput.focus();
                            })
                        }}>发表评论</Text>
                </View>
                <Icon containerStyle={styles.iconContainerStyle}
                    name="comments"
                    type="font-awesome"
                    size={22}
                    onPress={() => {
                        this.props.nav.navigate('Comment', { id: item.id })
                    }}
                    color='#ddd' />
                <Icon containerStyle={styles.iconContainerStyle}
                    name="star"
                    type="font-awesome"
                    size={22}
                    onPress={() => {
                        alert('fovarate')
                    }}
                    color='#ddd' />
                <Icon containerStyle={styles.iconContainerStyle}
                    name="share"
                    type="font-awesome"
                    size={22}
                    color='#ddd' />
            </View >
        }
    }

}

const styles = StyleSheet.create({
    share: {
        borderWidth: 0.8,
        borderColor: '#ddd',
        borderRadius: 5,
        height: 50,
    },
    commentList: {
        marginBottom: 50,
    },
    comment: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
    },
    commentInput: {
        width: '83%',
        borderWidth: 0.8,
        borderRadius: 20,
        borderColor: '#ccc',
        paddingLeft: 5,
        paddingRight: 10,
    },
    commentInputStyle: {
        fontSize: 14,
        fontSize: 14,
        padding: 0,

    },
    commentSend: {
        width: '14%',
        // borderColor: 'blue',
        // borderWidth: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#444',
        lineHeight: 40,
        textAlign: 'center',
    },
    inputContainerStyle: {
        borderWidth: 0.8,
        borderRadius: 20,
        borderColor: '#ccc',
        margin: 3,
        padding: 0,
    },
    inputContainerWarp: {
        width: 230,
    },
    inputStyle: {
        height: 30,
        fontSize: 14,
        padding: 0,
    },
    textinputStyle: {
        paddingLeft: 5,
        lineHeight: 30,
    },

    iconContainerStyle: {
        width: 60,
        padding: 10,
    },
    iconStyle: {
        fontWeight: "100",
    },
    titleStyle: {
        color: Color.button
    }
});

export default Footer;