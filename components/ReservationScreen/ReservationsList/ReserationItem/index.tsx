import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ReservationType } from "@/types/ReservationType";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ReservationItem({
  reservation,
}: {
  reservation: ReservationType;
}) {
  const { tickets, projectionEvent, seats, totalPrice } = reservation;
  const { movie, movieTheater, date, beginAt, endAt } = projectionEvent;
  const router = useRouter();
  const handlePress = () => {
    router.push({
      pathname: `/tickets/[reservationId]`,
      params: {
        tickets: JSON.stringify(tickets),
        reservation: JSON.stringify(reservation),
        reservationId: reservation.id,
        // ticketCodes: tickets.map((ti) => ti.uniqueCode),
        // movieTitle: movie.title,
        // date,
        // beginAt,
        // endAt,
        // room: projectionEvent.projectionRoom.titleRoom,
        // format: projectionEvent.format.projectionFormatName,
        // version: projectionEvent.language,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
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
          Le {date} - {movieTheater.theaterName}
        </ThemedText>
        <ThemedText style={[styles.subtext, { fontWeight: "bold" }]}>
          {beginAt} - {endAt}
        </ThemedText>

        <ThemedText style={[styles.subtext, { paddingVertical: 2 }]}>
          <Ionicons name="ticket-outline" size={24} color="#666" />
          {"x"}
          {tickets.length}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.priceContainer}>
        <MaterialIcons name="navigate-next" size={24} color="#666" />
      </ThemedView>
    </TouchableOpacity>
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtext: {
    fontSize: 14,
    color: "#666",
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
