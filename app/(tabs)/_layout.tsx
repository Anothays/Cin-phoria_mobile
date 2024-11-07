import { useThemeColors } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const colors = useThemeColors();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(movies)"
        options={{
          title: "Films",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="movie" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="theaters"
        options={{
          title: "Cinémas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="theater" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "Mes résas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="ticket-confirmation"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Compte",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="account" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
