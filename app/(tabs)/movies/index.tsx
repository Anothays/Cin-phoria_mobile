import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColors } from "@/hooks/useThemeColor";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  const colors = useThemeColors();

  const movies = [
    { title: "A TOUTE ALLURE", image: require("@/assets/images/pizza.jpeg") },
    {
      title: "AMARAN - VERSION TAMOUL",
      image: require("@/assets/images/pizza.jpeg"),
    },
    { title: "AU BOULOT!", image: require("@/assets/images/pizza.jpeg") },
    // Add more movies as needed
  ];

  alert("Page en cours de développement");
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView>
        <ThemedText>Les films</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  time: { color: "#fff" },
  statusIcon: {
    /* Add style for status icon */
  },
  logoContainer: { alignItems: "center", paddingVertical: 20 },
  logo: { width: 80, height: 40, resizeMode: "contain" },
  cinemaSelector: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  cinemaText: { fontSize: 16 },
  changeText: { color: "#4e9cff", marginLeft: 5 },
  menuTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "",
  },
  tab: { paddingVertical: 10, paddingHorizontal: 15 },
  activeTab: { backgroundColor: "#4e9cff", borderRadius: 5 },
  featuredMovie: { padding: 15 },
  featuredImage: { width: "100%", height: 200, borderRadius: 10 },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  ratingText: { marginRight: 5 },
  starRating: { color: "#ffd700" },
  movieGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 15,
  },
  movieCard: { width: "45%", marginBottom: 20 },
  movieImage: { width: "100%", height: 150, borderRadius: 10 },
  movieTitle: { textAlign: "center", marginTop: 5 },
});
