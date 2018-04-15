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
import Footer from './Footer'

const height = Dimensions.get('screen').height;

const detail = {
    id: 1,
    title: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    img: 'https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg',
    source: '中国青年报',
    content: '<p>11据央视周三消息，中国发布对美国的关税反制措施，将对原产于美国106项商品加征关税。<br>国务院关税税则委员会决定对原产于美国的大豆、汽车、化工品等14类106项商品加征25%的关税。实施日期另行公布。</p><img src="https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg"><p> 同日，国务院关税税则委员会发布公告称： 2018年4月4日，美国政府发布了加征关税的商品清单，将对我输美的1333项500亿美元的商品加征25%的关税。美方这一措施违反了世界贸易组织规则，严重侵犯我国合法权益，威胁我国家发展利益。</p><p>根据我方在世界贸易组织项下的权利和义务，以及《中华人民共和国对外贸易法》和《中华人民共和国进出口关税条例》相关规定，经国务院批准，国务院关税税则委员会决定对原产于美国的大豆、汽车、化工品等14类106项商品加征25%的关税。 在公告中，国务院关税税则委员会公布了对美加征关税商品清单，大豆、玉米、小麦、牛肉、汽车、飞机和部分化学品等在列。 周三，美国三大股指期货下挫，标普500指数期货下挫0.7%，道指期货下跌近200点。 外交部发言人耿爽周三表示，中美之间就贸易问题一直保持沟通。在推动通过对话协商解决有关问题上，中方展示了充分的诚意，开展了大量的工作。但对话协商妥善解决问题的最佳机会被美方一再错过。希望美方认清形势、保持理性，倾听工商界和普通民众的声音，及早摒弃单边主义、贸易保护主义做法，通过对话协商解决中美贸易分歧。同时我们也希望双方的协商遵从国际法和贸易规则，而不是美国的国内法。要做到相互尊重、平等相待，而不是居高临下，由一方来单方进行胁迫。协商要体现互谅互让、有取有予，而不应是漫天要价、胡搅蛮缠。</p>',
    type_name: '',
    type_id: '',
    created_time: '2018-04-03',
    is_recommand: false,
}

class Detail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: detail,
            height: 500,
            inputVisible: false,
        }
    }

    static navigationOptions = {
        tabBarVisible: false,
    }


    // 请求数据
    loadData() {

    }

    render() {
        const { goBack } = this.props.navigation
        console.log('html: ', this.state.data.content)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.warp}>
                        <Text style={styles.title}>{this.state.data.title}</Text>
                        <View style={styles.subtitle}>
                            <Text style={styles.source}>{this.state.data.source} </Text>
                            <Text style={styles.datetime}>{this.state.data.created_time}</Text>
                        </View>

                        <HTMLView
                            value={this.state.data.content}
                            stylesheet={webViewStyles}
                        />

                        <View style={styles.share}>
                            <Text>分享</Text>
                        </View>

                        <View style={styles.commentList}>
                            <Text>热门评论</Text>
                        </View>
                    </View>
                </ScrollView>

                
                <Footer nav={this.props.navigation} item={this.state.data} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        // backgroundColor: "#ccc",
        paddingBottom: 50,
    },
    warp: {
        padding: 15,
    },
    title: {
        fontSize: 26,
        color: '#333',
    },
    subtitle: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    source: {
        fontSize: 16,
    },
    datetime: {
        fontSize: 16,
    },
    share: {
        borderWidth: 0.8,
        borderColor: '#ddd',
        borderRadius: 5,
        height: 50,
    },
    commentList: {
        marginBottom: 50,
    },
});

const webViewStyles = StyleSheet.create({
    body: {
        lineHeight: 26,
    },
    img: {
        alignItems: "center",
        textAlign: 'center',
    },
    p: {
        lineHeight: 26,
        fontSize: 16,
        color: '#5d5d5d',
    },
    a: {
        color: 'blue',
    },
});


export default Detail;
