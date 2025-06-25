import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type DrawerProps = DrawerNavigationProp<any>;

export default function Home() {
  const navigation = useNavigation<DrawerProps>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/petropolis.jpeg")}
        style={styles.imagem}
        resizeMode="cover"
      />

      <Text style={styles.titulo}>Bem-vindo a Petrópolis!</Text>
      <Text style={styles.subtitulo}>
        Acesse o menu lateral ou clique abaixo para explorar os pontos turísticos.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("PontosTuristicos")}
      >
        <Text style={styles.textoBotao}>Ver Pontos Turísticos</Text>
      </TouchableOpacity>
    </View>
  );
}
