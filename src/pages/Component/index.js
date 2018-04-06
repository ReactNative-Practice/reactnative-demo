import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Axios, { _Axios, AxiosConfig } from 'services/Axios';
import axios from 'axios'
import { inject } from 'mobx-react/native';
import { Button, Divider } from 'react-native-elements';
import StorageUtil from 'utils/StorageUtil';

@inject('store')
class ComponentScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: '组件',
        headerRight: (<Text></Text>),
        headerLeft: (<Text></Text>),
    })

    request = (code = '', action = 'get') => {
        console.log('request: Axios ', code);

        if (action == 'get') {
            Axios.get('banner?code=' + code, res => {
                console.log('_axios res: ', res)
            }, (err) => {
                console.log('ComponentScreen error:', err)
            });
        } else {
            Axios.post('banner?code=' + code, res => {
                console.log('_axios res: ', res)
            }, (err) => {
                console.log('ComponentScreen error:', err)
            });
        }
    }

    logout = () => {
        this.props.store.user.logout();
    }

    render() {
        const { navigate, setParams, state } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Index screen</Text>
                <TouchableOpacity
                    onPress={() =>
                        navigate("Profile", { title: "Profile", parentKey: state.key })}
                >
                    <Text>Go to Profile</Text>
                </TouchableOpacity>

                <Text>
                    {state.params &&
                        state.params.search &&
                        `Searched for ${state.params.search}`}
                </Text>

                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Login Page"
                />

                <Divider />
                <Button
                    onPress={() => this.props.navigation.navigate('FlatlistScreen')}
                    title="flatlist page"
                />

                <Divider />
                <Button
                    onPress={() => this.props.navigation.navigate('TabViewExample')}
                    title="tabView page"
                />

                <Divider />
                <Button onPress={() => this.request()}
                    title="axios get 200"
                />

                <Divider />
                <Button onPress={() => this.request(401)}
                    title="axios get 401"
                />

                <Divider />
                <Button onPress={() => this.request(500)}
                    title="axios get 500"
                />

                <Divider />
                <Button onPress={() => this.request('', 'post')}
                    title="axios post 200"
                />

                <Divider />
                <Button onPress={() => this.request(401, 'post')}
                    title="axios post 401"
                />

                <Divider />
                <Button onPress={() => this.request(500, 'post')}
                    title="axios post 500"
                />

                <Divider />
                <Button onPress={() => this.logout()}
                    title="logout"
                />

                <Divider />
                <Button onPress={() => navigate('Detail')}
                    title="to detail"
                />

                <Divider />
                <Button onPress={() => navigate('Favorite')}
                    title="to profile favorite"
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
        justifyContent: "center",
    }
});

export default ComponentScreen;
