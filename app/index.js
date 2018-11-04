import React, { Component } from "react";
import { View } from "react-native";
import { Login } from "./screens/login";

export class Main extends Component {
    render() {
        return (
            <View>
                <Login/>
            </View>
        );
    }
}