import React, { useState } from "react";
import CustomInput from "../Components/Btns/CustomInput";
import { Text, StyleSheet, Pressable, View, Alert } from "react-native";
import CustomButton from "../Components/Btns/CustomButton";

const SignUp = ({ navigation }) => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const onSignInPressed = () => {
    Alert.alert(`${Username}, ${Email}, ${password}, ${password2}`);
  };
  const onLoginPressed = () => {
    console.warn("onLoginPressed");
  };
  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInTextContainer}>
        <Text style={styles.signInText}>Sign Up</Text>
      </View>
      <CustomInput
        value={Username}
        setValue={setUsername}
        placeholder="Username"
      />
      <CustomInput value={Email} setValue={setEmail} placeholder="Email" />

      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <CustomInput
        value={password2}
        setValue={setPassword2}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <CustomButton onPress={onSignInPressed} text="Sign Up" />
      <View style={styles.otherButtonContainer}>
        <Pressable onPress={onSignUpPressed}>
          <Text style={styles.otherButtonText}> Sign Up</Text>
        </Pressable>
        <Text style={styles.otherButtonText}>|</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.otherButtonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8D98A",
  },
  signInTextContainer: {
    marginTop: "13%",
    marginLeft: "11%",
    marginBottom: 18,
  },
  signInText: {
    fontSize: 50,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 20,
  },
  otherButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 7,
  },
  otherButtonText: {
    fontWeight: "500",
    fontSize: 15,
    color: "#000000",
    marginRight: 8,
  },
});
export default SignUp;
