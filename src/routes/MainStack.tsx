import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRouter from "./AppRouter";
import DetalheLocal from "../screens/DetalheLocal";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={AppRouter} />
      <Stack.Screen name="DetalheLocal" component={DetalheLocal} />
    </Stack.Navigator>
  );
}