import React, { Component } from "react";
import { View } from "react-native";
import { ScreenOrientation } from "expo";
import BasicButton from "../components/common/BasicButton";
import BasicInput from "../components/common/BasicInput";

interface State {
  emailInput: string;
  passwordInput: string;
}

class LoginForm extends React.Component<any, any> {
  state = { emailInput: "", passwordInput: "" };

  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  onEmailInput = (emailInput: string) => {
    this.setState({
      emailInput: emailInput
    });
  };

  onPasswordInput = (passwordInput: string) => {
    this.setState({
      passwordInput: passwordInput
    });
  };

  render() {
    console.log(this.state.emailInput);
    return (
      <View style={style.container}>
        <BasicInput onChangeText={e => this.onEmailInput(e)} />
        <BasicInput onChangeText={e => this.onPasswordInput(e)} />
        <BasicButton
          title="Log In"
          onClick={() => console.log("Button clicked")}
        />
      </View>
    );
  }
}

const style = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default LoginForm;
