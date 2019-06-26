import React, { Component } from "react";
import { View } from "react-native";
import { ScreenOrientation } from "expo";
import BasicButton from "../components/common/BasicButton";
import BasicInput from "../components/common/BasicInput";

class LoginForm extends Component {
  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  onEmailInput() {
    console.log("Email Input");
  }

  onPasswordInput() {
    console.log("Password Input");
  }

  render() {
    return (
      <View style={style.container}>
        <BasicInput onChangeText={this.onEmailInput} />
        <BasicInput onChangeText={this.onPasswordInput} />
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
