import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from "react-navigation";

class Profile extends Component {
    updateHome = params => {
        const { state, dispatch, goBack } = this.props.navigation;
        dispatch(
            NavigationActions.setParams({
                params,
                key: state.params.parentKey
            })
        );

        goBack(null);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile screen</Text>

                <TouchableOpacity
                    onPress={() => this.updateHome({ search: "Cats", title: "Cats" })}
                >
                    <Text>Search for Cats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.updateHome({ search: "Dogs", title: "Dogs" })}
                >
                    <Text>Search for Dogs</Text>
                </TouchableOpacity>
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
