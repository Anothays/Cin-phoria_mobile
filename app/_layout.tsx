import { AuthProvider } from "@/components/Context/AuthContext";
import { Stack } from "expo-router";

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Stack.Screen
        name="tickets/[reservationId]"
        options={{
          headerShown: true,
          headerBackTitle: "retour",
        }}
      />
    </Stack>
  );
};
