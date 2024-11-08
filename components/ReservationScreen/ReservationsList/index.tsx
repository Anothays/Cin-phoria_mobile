import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useReservation from "@/hooks/useReservations";
import { ReservationType } from "@/types/ReservationType";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import ReservationItem from "./ReserationItem";

export default function Reservations() {
  const { isLoading, reservations, getData } = useReservation();

  if (isLoading) return <ActivityIndicator size="large" />;

  const renderReservationItem = ({ item }: { item: ReservationType }) => (
    <ReservationItem reservation={item} />
  );

  if (reservations.length > 0) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.header}>Réservations</ThemedText>
        <ThemedText style={styles.subheader}>Vos séances à venir</ThemedText>
        <FlatList
          data={reservations}
          renderItem={renderReservationItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getData} />
          }
        />
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    padding: 16,
    backgroundColor: "#f8f9fa",
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
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
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
  arrow: {
    fontSize: 18,
    color: "#666",
  },
});
