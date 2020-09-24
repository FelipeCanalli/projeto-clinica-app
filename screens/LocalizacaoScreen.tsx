import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function LocalizacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Localização</Text>
      <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
        Em breve...
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
});
