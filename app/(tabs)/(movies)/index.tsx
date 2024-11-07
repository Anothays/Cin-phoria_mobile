import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColor";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
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

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.backgroundPrimary }}
    >
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/logos/cinephoria_logo.png")}
            style={styles.logo}
          />
          {/* <TouchableOpacity style={styles.cinemaSelector}>
            <Text style={styles.cinemaText}>Tous les cinémas</Text>
          </TouchableOpacity> */}
        </View>

        {/* Menu Tabs */}
        <View style={styles.menuTabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <ThemedText>À L'AFFICHE</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <ThemedText>LABELS</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <ThemedText>ÉVÉNEMENTS</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <ThemedText>EN FAMILLE</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Featured Movie */}
        <View style={styles.featuredMovie}>
          <Image
            source={require("@/assets/images/pizza.jpeg")}
            style={styles.featuredImage}
          />
          <ThemedText>TROIS AMIES</ThemedText>
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.ratingText}>3.8</ThemedText>
            <ThemedText style={styles.starRating}>★★★★★</ThemedText>
          </View>
        </View>

        {/* Movie Grid */}
        <View style={styles.movieGrid}>
          {movies.map((movie, index) => (
            <TouchableOpacity key={index} style={styles.movieCard}>
              <Image source={movie.image} style={styles.movieImage} />
              <ThemedText style={styles.movieTitle}>{movie.title}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0d1b2a",
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
