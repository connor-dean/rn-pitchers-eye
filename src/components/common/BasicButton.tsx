import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface BasicButtonProps {
  title: string;
  onClick: () => void;
}

class BasicButton extends React.Component<BasicButtonProps, any> {
  render() {
    const { title, onClick } = this.props;
    return (
      <TouchableOpacity
        style={style.button}
        onPress={onClick}
        activeOpacity={0.8}
      >
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const style = {
  button: {
    alignItems: "center",
    backgroundColor: "#2d83c9",
    padding: 10,
    height: 50,
    width: 400,
    borderRadius: 5
  },
  text: {
    color: "#fcfbfc",
    fontWeight: "bold",
    fontSize: 18
  }
};

export default BasicButton;
