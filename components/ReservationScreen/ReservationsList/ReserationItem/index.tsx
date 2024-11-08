import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColors } from "@/hooks/useThemeColor";
import { ReservationType } from "@/types/ReservationType";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

export default function ReservationItem({
  reservation,
}: {
  reservation: ReservationType;
}) {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const { tickets, projectionEvent, seats, totalPrice } = reservation;
  const { movie, movieTheater, date, beginAt } = projectionEvent;
  console.log("projectionEvent", projectionEvent);

  return (
    <Pressable style={styles.itemContainer}>
      <Link
        href={{
          pathname: `/reservations/[id]`,
          params: {
            id: reservation.id,
            ticketCodes: tickets.map((ti) => ti.uniqueCode),
            movieTitle: movie.title,
            date,
            beginAt,
            room: projectionEvent.projectionRoom.titleRoom,
            format: projectionEvent.format.projectionFormatName,
            version: projectionEvent.language,
          },
        }}
      >
        <Image
          source={{
            uri: `${process.env.EXPO_PUBLIC_API_URL}/uploads/images/${reservation.projectionEvent.movie.coverImageName}`, // Remplace avec l'URL de l'image du film ou un placeholder
          }}
          width={80}
          height={80}
          borderRadius={5}
          style={styles.image}
        />

        <ThemedView style={styles.detailsContainer}>
          <ThemedText style={styles.title}>{movie.title}</ThemedText>

          <ThemedText style={styles.subtext}>
            Le {date} à {beginAt}, {movieTheater.theaterName}
          </ThemedText>

          <ThemedText style={styles.subtext}>
            <Ionicons name="ticket-outline" size={24} color="#666" />
            {"x"}
            {tickets.length}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.priceContainer}>
          <MaterialIcons name="navigate-next" size={24} color="#666" />
        </ThemedView>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  link: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subheader: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    marginRight: 12,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtext: {
    fontSize: 14,
    color: "#666",
    paddingVertical: 2,
    // backgroundColor: "green",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
