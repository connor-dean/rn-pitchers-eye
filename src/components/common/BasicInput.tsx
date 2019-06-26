import React from "react";
import { View, TextInput } from "react-native";

interface BasicInputProps {
  onChangeText: () => void;
}

class BasicInput extends React.Component<BasicInputProps, any> {
  render() {
    return <TextInput style={style} onChangeText={this.props.onChangeText} />;
  }
}

const style = {
  height: 50,
  width: 400,
  borderWidth: 2,
  borderRadius: 5,
  borderColor: "gray",
  margin: 5,
  paddingLeft: 10,
  paddingRight: 10
};

export default BasicInput;
