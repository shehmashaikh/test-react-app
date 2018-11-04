import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export class CustomInput extends Component {
    render() {
        return (<View>
            <Text>
                {this.props.fieldName}
            </Text>
            <TextInput
                placeholder={this.props.placeholder}
                onChangeText={text => this.props.onChangeText ? this.props.onChangeText(text) : null}
            />
            {(!this.props.isVerified) ?
                <Text
                    style={styles.error}>
                    {this.props.fieldName} is invalid!!
                </Text> : null}
        </View>

        );
    }
}