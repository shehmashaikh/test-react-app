import React, { Component } from "react";
import { Button } from "react-native";

export class CustomButton extends Component {
    render() {
        return (
            <Button
                title={this.props.title}
                onPress={() => { this.props.onPress()}}
            />
        )
    }
}