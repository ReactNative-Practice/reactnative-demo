import React, { Component } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Style from 'styles/login'
import Color from 'constants/Color';
import Toast from 'components/Toast'
import { inject } from 'mobx-react/native';

@inject('store')
class Login extends Component<{}>  {

    constructor(props) {
        super(props);

        this.state = {
            mobile: '13212341234',
            password: '123123',
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: '登录',
        headerRight: (<Text></Text>),
        headerLeft: (<Text></Text>),
    })

    login = () => {
        let params = {
            mobile: this.state.mobile,
            password: this.state.password,
        }

        if (params.mobile == '') {
            Toast.show('请输入手机号', 2000);
            return false;
        }

        let reg = new RegExp(/^1[34578]\d{9}$/);
        if (!reg.test(params.mobile)) {
            Toast.show('请输入正确的手机号', 2000);
            return false;
        }

        if (params.password == '') {
            Toast.show('请输入密码', 2000);
            return false;
        }

        this.props.store.user.login(params);
    }


    render() {
        const { navigate } = this.props.navigation
        return <View style={Style.container}>
            <Text h1>Login</Text>

            <Input
                placeholder='请输入手机号'
                displayError={false}
                inputStyle={{ height: 35, padding: 0, }}
                leftIcon={<Icon name='user' size={24} color='black' />}
                errorStyle={{ color: 'red' }}
                errorMessage='手机号错误'
                onChangeText={(value) => this.setState({ mobile: value })}
                value={this.state.mobile}
            />

            <Input
                placeholder="密码"
                secureTextEntry={true}
                inputStyle={{ height: 35, padding: 0, }}
                leftIcon={<Icon name='lock' size={24} color='black' />}
                onChangeText={(value) => this.setState({ password: value })}
                value={this.state.password}
            />

            <Button
                buttonStyle={{ width: 200, marginTop: 20 }}
                title="登   录"
                onPress={() => this.login()}
            />

            <Button
                clear
                title="注 册"
                titleStyle={{ fontSize: 16, color: Color.font }}
                onPress={() => navigate('SignUp')}
            />
        </View>
    }
}

export default Login;
