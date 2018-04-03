import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Style from 'styles/login'
import Color from 'constants/Color';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile: '',
            password: '',
        }
    }

    componentDidMount() {

    }

    render() {
        return <View style={Style.container}>
            <Text h1>SignUp</Text>

            <Input
                placeholder='请输入手机号'
                displayError={false}
                inputStyle={{ height: 35, padding: 0, }}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                errorStyle={{ color: 'red' }}
                errorMessage='手机号错误'
            />

            <Input
                placeholder="密码"
                inputStyle={{ height: 35, padding: 0, }}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                }
            />

            <Input
                placeholder="确认密码"
                inputStyle={{ height: 35, padding: 0, }}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                }
            />

            <Button
                buttonStyle={{ width: 200, marginTop: 20 }}
                title="注   册"
            />
        </View>
    }
}

export default SignUp;
