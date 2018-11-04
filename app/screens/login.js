import React, { Component } from 'react';
import { CustomInput } from '../components/CustomInput';
import { View } from "react-native";
import { CustomButton } from '../components/CustomButton';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailVerified: false,
            isPasswordVerified: false,
        };
    }

    setEmail(email) {
        if (email === "akash") {
            this.setState({
                isEmailVerified: true,
                isPasswordVerified: this.state.isPasswordVerified
            })
        } else {
            this.setState({
                isEmailVerified: false,
                isPasswordVerified: this.state.isPasswordVerified
            })
        }
    }


    setPassword(password) {
        if (password === "akash") {
            this.setState({
                isEmailVerified: this.state.isEmailVerified,
                isPasswordVerified: true
            })
        } else {
            this.setState({
                isEmailVerified: this.state.isEmailVerified,
                isPasswordVerified: false
            })
        }
    }

    onSign(){
        console.log("Ottawa")
    }
    render() {
        return (
            <View>
                <CustomInput
                    fieldName="email"
                    placeholder="example@google.com"
                    onChangeText={(text) => this.setEmail(text)}
                    isVerified={this.state.isEmailVerified} />
                <CustomInput
                    fieldName="password"
                    placeholder="****"
                    onChangeText={(text) => this.setPassword(text)}
                    isVerified={this.state.isPasswordVerified} />
                <CustomButton
                    title="Sign In"
                    onPress = {() => this.onSign()} />
            </View>
        )
    }
}
