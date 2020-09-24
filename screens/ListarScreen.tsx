import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

import { Text, View } from "../components/Themed";

export default function ListarScreen() {
  const [carregado, setCarregado] = React.useState(true);
  const [data, setData] = React.useState([]);

  // carregando dados da api usando useEffect
  React.useEffect(() => {
    fetch("http://192.168.0.23/projeto-clinica/services/paciente/exibir.php")
      .then((response) => response.json())
      .then((pacientes) => setData(pacientes.dados))
      .catch((error) => console.error(error))
      .finally(() => setCarregado(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes Cadastrados</Text>

      {carregado ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.dados}>Nome: {item.nome}</Text>
              <Text style={styles.dados}>Nascimento: {item.nascimento}</Text>
              <Text style={styles.dados}>Sexo: {item.sexo}</Text>
              <Text style={styles.dados}>Email: {item.email}</Text>
              <Text style={styles.dados}>Telefone: {item.telefone}</Text>
              <Text style={styles.dados}>Usuário: {item.usuario}</Text>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            </View>
          )}
          keyExtractor={({ idproduto }, index) => idproduto}
        />
      )}
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
    paddingVertical: 22,
    color: "#b71c1c",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  FlatList: {
    width: "90%",
  },
  dados: {
    fontSize: 16,
  },
});
