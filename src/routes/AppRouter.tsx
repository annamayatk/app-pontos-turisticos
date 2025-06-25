import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import PontosTuristicos from "../screens/PontosTuristicos";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#363636",
          width: 300,
        },
        drawerActiveBackgroundColor: "#505050",
        drawerActiveTintColor: "#00FFAA",
        drawerInactiveTintColor: "#CCCCCC",
        headerStyle: {
          backgroundColor: "#363636",
        },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Início" }}
      />
      <Drawer.Screen
        name="PontosTuristicos"
        component={PontosTuristicos}
        options={{ title: "Pontos Turísticos" }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />
    </Drawer.Navigator>
  );
}
