import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Réservations",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
