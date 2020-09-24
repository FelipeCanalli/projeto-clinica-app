import * as React from "react";
import { Alert, StyleSheet, TextInput, Picker, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import { Text, View } from "../components/Themed";

let nom = "";
let nas = "";
let sex = "";
let ema = "";
let tel = "";
let usu = "";
let sen = "";
let cfn = "";

export default function CadastroScreen() {
  const [nome, setNome] = React.useState("");
  const [nascimento, setNascimento] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmar, setConfirmar] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo1.png")}
        style={styles.imagem}
      />
      <Text style={styles.title}>Tela de Cadastro</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Nome completo"
        onChangeText={(value) => setNome(value)}
        value={nome}
      />

      <DatePicker
        style={{ width: "80%", paddingVertical: 6 }}
        date={nascimento}
        mode="date"
        placeholder="Data de nascimento"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {
          setNascimento(date);
          value = { date };
        }}
      />

      <Picker
        mode="dropdown"
        selectedValue={sexo}
        onValueChange={setSexo}
        style={styles.Picker}
      >
        <Picker.Item label="Gênero" value="" />
        <Picker.Item label="Masculino" value="M" />
        <Picker.Item label="Feminino" value="F" />
      </Picker>

      <TextInput
        style={styles.TextInput}
        keyboardType="email-address"
        placeholder="E-mail"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Telefone"
        keyboardType="number-pad"
        onChangeText={(value) => setTelefone(value)}
        value={telefone}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Usuário"
        onChangeText={(value) => setUsuario(value)}
        value={usuario}
        keyboardType="visible-password"
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(value) => setSenha(value)}
        value={senha}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Repita a senha"
        secureTextEntry
        onChangeText={(value) => setConfirmar(value)}
        value={confirmar}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          // let = const
          nom = nome;
          nas = nascimento;
          sex = sexo;
          ema = email;
          tel = telefone;
          usu = usuario;
          sen = senha;
          cfn = confirmar;
          efetuarCadastro();
        }}
      >
        <Text style={styles.btn_text}>Cadastrar</Text>
      </TouchableOpacity>
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
  imagem: {
    width: 150,
    height: 150,
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
    width: "80%",
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
  },
  btn_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  Picker: {
    height: 40,
    width: "80%",
    padding: 10,
    margin: 10,
  },
});

function efetuarCadastro() {
  fetch("http://192.168.0.23/projeto-clinica/services/paciente/cadastrar.php", {
    method: "POST",
    headers: {
      Accept: "appllication/json",
      "Content-Type": "aplication/json",
    },

    body: JSON.stringify({
      // dados da api : let,
      nome: nom,
      nascimento: nas,
      sexo: sex,
      email: ema,
      telefone: tel,
      usuario: usu,
      senha: sen,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      Alert.alert("Olhe o console");
    })
    .catch((error) => console.error(error));
}
