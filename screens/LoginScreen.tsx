import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../components/Themed";
import CadastroScreen from "./CadastroScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput style={styles.TextInput} placeholder="Usuário" />
      <TextInput style={styles.TextInput} placeholder="Senha" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text
        style={{ color: "blue" }}
        onPress={() => navigation.navigate(CadastroScreen)}
      >
        Ainda não é cadastrado ?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  TextInput: {
    height: 40,
    width: "40%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 30,
    width: 200,
  },
});
