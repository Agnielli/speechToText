import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  error: {
    borderColor: 'red'
  },
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error,
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput;