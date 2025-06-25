import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

interface RouteParams {
  nome: string;
  descricao: string;
  imagem: any;
  site: string;
  telefone: string;
  instagram: string;
}

export default function DetalheLocal() {
  const route = useRoute();
  const { nome, descricao, imagem, site, telefone, instagram } =
    route.params as RouteParams;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <View style={styles.container}>
        <Image source={imagem} style={styles.imagem} />
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.botaoTexto}>Mais Informações</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitulo}>Informações de Contato</Text>

              <TouchableOpacity onPress={() => Linking.openURL(site)}>
                <Text style={styles.link}>Site Oficial</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${telefone}`)}
              >
                <Text style={styles.link}>Telefone: {telefone}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(instagram)}>
                <Text style={styles.link}>Instagram</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoFechar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.botaoFecharTexto}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
