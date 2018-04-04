import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button, Divider } from 'react-native-elements'

class Favorite extends Component {

    render() {
        const { goBack } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text>Favorite screen</Text>

                <Divider />
                <Button onPress={() => goBack()}
                    title="go back"
                />
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

export default Favorite;
