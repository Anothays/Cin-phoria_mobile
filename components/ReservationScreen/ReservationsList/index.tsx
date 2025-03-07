import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useReservation from "@/hooks/useReservations";
import { ReservationType } from "@/types/ReservationType";
import React, { useState } from "react";
import { ActivityIndicator, SectionList, StyleSheet } from "react-native";
import ReservationItem from "./ReserationItem";

export default function Reservations() {
  const { isLoading, reservations, getData } = useReservation();
  const [refreshing, setRefreshing] = useState(false);
  const currentDate = new Date();

  if (isLoading) return <ActivityIndicator size="large" />;

  const renderReservationItem = ({ item }: { item: ReservationType }) => (
    <ReservationItem reservation={item} key={item.id} />
  );

  const onRefresh = async () => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  };

  const upcomingReservations: ReservationType[] = [];
  const finishedReservations: ReservationType[] = [];

  reservations.forEach((reservation) => {
    const projectionEventDate = `${reservation.projectionEvent.date.split("/").reverse().join("-")} ${reservation.projectionEvent.beginAt}`;
    const reservationDate = new Date(projectionEventDate);
    if (reservationDate > currentDate) {
      upcomingReservations.push(reservation);
    } else {
      finishedReservations.push(reservation);
    }
  });

  const sectionListData = [
    { title: "Vos séances à venir", data: upcomingReservations },
    { title: "Vos séances terminées", data: finishedReservations },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header}>Réservations</ThemedText>
      <SectionList
        sections={reservations.length > 0 ? sectionListData : []}
        renderSectionHeader={({ section }) =>
          section.data.length > 0 ? (
            <ThemedText style={styles.subheader}>{section.title}</ThemedText>
          ) : null
        }
        renderItem={renderReservationItem}
        ListEmptyComponent={
          <ThemedText style={styles.subheader}>
            Vous n'avez pas de réservation
          </ThemedText>
        }
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </ThemedView>
  );
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
    marginTop: 16,
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
