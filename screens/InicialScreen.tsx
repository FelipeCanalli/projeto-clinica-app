import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";

export default function InicialScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/images/bg-telemedicina-1.png")}
          style={{ width: "auto", height: 230 }}
        />
        <Text style={styles.text}>
          Na Clínica São Paulo os médicos especialistas atuam na prevenção de
          doenças, tratando e curando enfermidades, e estão sempre dispostos a
          atender, buscando excelência em gerar bem-estar na vida de cada
          paciente. Conheça nossas especialidades abaixo e agende sua consulta
          conosco! Ver Todos
        </Text>

        <Text style={styles.title}>Nossos Exames</Text>

        <View style={styles.caixa}>
          <Image
            source={require("../assets/images/check.png")}
            style={styles.imagens}
          />
          <Image
            source={require("../assets/images/colesterol.png")}
            style={styles.imagens}
          />
          <Image
            source={require("../assets/images/dosagem.png")}
            style={styles.imagens}
          />
        </View>
        <View style={styles.caixa}>
          <Image
            source={require("../assets/images/hormonio.png")}
            style={styles.imagens}
          />
          <Image
            source={require("../assets/images/hemograma.png")}
            style={styles.imagens}
          />
          <Image
            source={require("../assets/images/gliserina.png")}
            style={styles.imagens}
          />
        </View>
      </ScrollView>
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
    // fontWeight: "bold",
    fontStyle: "italic",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 16,
    margin: 10,
    textAlign: "justify",
  },
  caixa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imagens: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});
