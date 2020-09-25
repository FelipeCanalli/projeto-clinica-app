import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroScreen from "./CadastroScreen";

const Stack = createStackNavigator();

let us = "";
let sh = "";

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.imagem}
      />
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        style={styles.TextInput}
        placeholder="Usuário"
        keyboardType="ascii-capable"
        onChangeText={(value) => setUsuario(value)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(value) => setSenha(value)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          us = usuario;
          sh = senha;
          logar();
        }}
      >
        <Text style={styles.btn_text}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.cadastro}
        onPress={() => navigation.navigate("CadastroScreen")}
      >
        Ainda não é cadastrado ?
      </Text>
    </View>
  );
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}

function logar() {
  fetch("http://192.168.0.23/projeto-clinica/services/paciente/logar.php", {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "apllication/json",
    },
    body: JSON.stringify({
      usuario: us,
      senha: sh,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      alert("Olhe o console");
    })
    .catch((error) => console.error(`Erro ao tentar logar ${error}`));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  imagem: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  TextInput: {
    height: 40,
    width: "60%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b71c1c",
    borderRadius: 6,
    width: 200,
    height: 50,
    margin: 30,
  },
  btn_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cadastro: {
    color: "blue",
    fontSize: 15,
    fontWeight: "bold",
  },
});
