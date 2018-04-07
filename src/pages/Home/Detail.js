import React, { Component } from 'react';
import {
    View,
    Text,
    WebView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button, Divider } from 'react-native-elements'

const detail = {
    title: '中国对原产于美国的大豆飞机等106项商品加征25%关税',
    img: 'https://cms-bucket.nosdn.127.net/6b801eaf979948dfafb99bd9a5e1d19c20180404154633.jpeg',
    source: '中国青年报',
    content: '<p>　　据央视周三消息，中国发布对美国的关税反制措施，将对原产于美国106项商品加征关税。</p><p>　　国务院关税税则委员会决定对原产于美国的大豆、汽车、化工品等14类106项商品加征25%的关税。实施日期另行公布。</p><p>　　同日，国务院关税税则委员会发布公告称：</p><p>　　2018年4月4日，美国政府发布了加征关税的商品清单，将对我输美的1333项500亿美元的商品加征25%的关税。美方这一措施违反了世界贸易组织规则，严重侵犯我国合法权益，威胁我国家发展利益。</p><p>　　根据我方在世界贸易组织项下的权利和义务，以及《中华人民共和国对外贸易法》和《中华人民共和国进出口关税条例》相关规定，经国务院批准，国务院关税税则委员会决定对原产于美国的大豆、汽车、化工品等14类106项商品加征25%的关税。</p><p>　　在公告中，国务院关税税则委员会公布了对美加征关税商品清单，大豆、玉米、小麦、牛肉、汽车、飞机和部分化学品等在列。</p><p>　　周三，美国三大股指期货下挫，标普500指数期货下挫0.7%，道指期货下跌近200点。</p><p>　　外交部发言人耿爽周三表示，中美之间就贸易问题一直保持沟通。在推动通过对话协商解决有关问题上，中方展示了充分的诚意，开展了大量的工作。但对话协商妥善解决问题的最佳机会被美方一再错过。希望美方认清形势、保持理性，倾听工商界和普通民众的声音，及早摒弃单边主义、贸易保护主义做法，通过对话协商解决中美贸易分歧。同时我们也希望双方的协商遵从国际法和贸易规则，而不是美国的国内法。要做到相互尊重、平等相待，而不是居高临下，由一方来单方进行胁迫。协商要体现互谅互让、有取有予，而不应是漫天要价、胡搅蛮缠。</p><p style="text-align:center"><img  title="中国强力反击！ 对美大豆、汽车、飞机等106项商品加征25%关税" alt="中国强力反击！ 对美大豆、汽车、飞机等106项商品加征25%关税" src="//pic2.cnal.com/cnalnews/industry/2018-04-04/c0daf8fc69c984ed78cb0a776df92d29.jpg" style="width:662px;height:3635px;" width="662" vspace="0" hspace="0" height="3635" border="0" /></p>',
    type_name: '',
    type_id: '',
    created_time: '2018-04-03',
    is_recommand: false,
}

class Detail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    static navigationOptions = {
        tabBarVisible: false,
    }

    componentWillMount() {
    }

    // 请求数据
    loadData() {

    }

    render() {
        const { goBack } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text>Detail screen</Text>
                <Text>typeid {this.props.typeId}</Text>

                <Divider />
                <Button onPress={() => goBack()}
                    title="go back"
                />

                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{ html: this.state.data.content }}>
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Detail;
