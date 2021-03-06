import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { Button, Divider } from 'react-native-elements'

class Profile extends Component {

    static navigationOptions = () => {
        title: '个人中心'
    }

    render() {
        const { navigate, goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>Profile screen</Text>

                <Divider />
                <Button onPress={() => navigate('Favorite')}
                    title="to profile favorite"
                />

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

export default Profile;
