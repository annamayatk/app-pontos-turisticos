import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Sobre() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../../assets/foto-anna.png")}
        style={styles.foto}
        resizeMode="cover"
      />

      <Text style={styles.titulo}>Sobre o Aplicativo</Text>
      <Text style={styles.texto}>
        Este app foi desenvolvido por{" "}
        <Text style={{ fontWeight: "bold" }}>Anna May</Text> como parte de um
        exercício prático realizado na {" "}
        <Text style={{ fontWeight: "bold" }}>Residência em Software</Text> do Serratec, sob orientação do
        professor <Text style={{ fontWeight: "bold" }}>Roni Schanuel</Text>.
      </Text>

      <Text style={styles.texto}>
        A proposta era criar um aplicativo sobre pontos turísticos de Petrópolis
        utilizando React Native e React Navigation.
      </Text>
      <Text style={styles.texto}>
        Se a estrada da programação é longa, ao menos ela passa por Petrópolis.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Ver Contatos</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contato da Desenvolvedora</Text>

            <Text style={styles.contato}>📧 annamayatk@gmail.com</Text>

            <Text
              style={styles.contato}
              onPress={() => Linking.openURL("https://github.com/annamayatk")}
            >
              💻 github.com/annamayatk
            </Text>

            <Text
              style={styles.contato}
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/annamayduarteatkinson"
                )
              }
            >
              🔗 linkedin.com/in/annamayduarteatkinson
            </Text>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
