import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
    <Text>111</Text>
</View>;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]}><Text>222</Text></View>;

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Tab1' },
            { key: 'second', title: 'Tab2' },
            { key: 'third', title: 'Tab3' },
            { key: 'fourth', title: 'fourth' },
            { key: 'fifth', title: 'fifth' },
            { key: 'sixth', title: 'sixth' },
            { key: 'seventh', title: 'seventh' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar scrollEnabled
        tabStyle={{ flex: 1, padding: 0, borderWidth: 1 }}
        style={{ height: 50,}}
        {...props} />

    _renderScene = () => {
        return SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: FirstRoute,
            fourth: SecondRoute,
            fifth: FirstRoute,
            sixth: SecondRoute,
            seventh: FirstRoute,
        })
    }

    render() {
        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this._renderScene()}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});