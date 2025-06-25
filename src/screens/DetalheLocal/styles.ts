import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    flex: 1,
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    color: "#444",
  },
  botao: {
    backgroundColor: "#505050",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxWidth: 350,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  link: {
    color: "#007bff",
    marginBottom: 10,
    textDecorationLine: "underline",
    width: "100%",
    textAlign: "center",
  },
 
  cancelButton: {
    backgroundColor: "#505050",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  botaoFechar: {
  marginTop: 15,
  backgroundColor: "#363636",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
},

botaoFecharTexto: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

});
