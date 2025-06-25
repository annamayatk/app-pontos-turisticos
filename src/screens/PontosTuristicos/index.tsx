import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
  navigate: (screen: string, params?: any) => void;
};

export default function PontosTuristicos() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Pontos Turísticos de Petrópolis</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("DetalheLocal", {
            nome: "Palácio de Cristal",
            descricao: "Com sua estrutura charmosa de ferro e vidro, o Palácio de Cristal é um dos cartões-postais mais fotogênicos de Petrópolis. Inspirado nas estufas europeias, o espaço já recebeu bailes, exposições e eventos culturais, sendo até hoje um símbolo de elegância e beleza da cidade.",
            imagem: require("../../../assets/palacio.jpeg"),
            site: "https://pcvb.com.br/perfil-mantenedores/perfil/palacio-de-cristal/",
            telefone: "(24) 2247-3721",
            instagram: "https://www.instagram.com/palaciodecristalpetropolis/",
          })
        }
      >
        <Text style={styles.nome}>Palácio de Cristal</Text>
        <Text style={styles.descricao}>
          Um dos ícones da cidade, conhecido por sua estrutura de ferro e vidro.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("DetalheLocal", {
            nome: "Museu Imperial",
            descricao: "Antiga residência de verão da família imperial brasileira, o Museu Imperial guarda relíquias, móveis originais, joias da coroa e documentos históricos. Um verdadeiro mergulho no Brasil do século XIX, em meio a jardins impecáveis e salões que ainda parecem sussurrar histórias da monarquia",
            imagem: require("../../../assets/museu.jpg"),
            site: "https://museuimperial.museus.gov.br",
            telefone: " (24) 2233-0345",
            instagram: "https://instagram.com/museu.imperial",
          })
        }
      >
        <Text style={styles.nome}>Museu Imperial</Text>
        <Text style={styles.descricao}>
          Antiga residência de verão da família imperial brasileira.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


