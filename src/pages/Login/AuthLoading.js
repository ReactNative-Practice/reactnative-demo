import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import StorageUtil from 'utils/StorageUtil'

export default class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    static navigationOptions = {
        header: null
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await StorageUtil.get('token');
        console.log('userToken::', userToken)
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <ActivityIndicator />
            </View>
        );
    }
}