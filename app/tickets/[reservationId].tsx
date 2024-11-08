import Qrcode from "@/components/Qrcode";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColors } from "@/hooks/useThemeColor";
import { globalStyles } from "@/style/GlobalStyles";
import { ReservationType } from "@/types/ReservationType";
import { TicketType } from "@/types/TicketType";
import { Fontisto } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function ReservationDetails() {
  const params = useLocalSearchParams() as { [key: string]: string };
  const colors = useThemeColors();
  const tickets = JSON.parse(params.tickets) as TicketType[];
  const reservation = JSON.parse(params.reservation) as ReservationType;
  const { projectionEvent, seats, totalPrice } = reservation;
  const { movie, movieTheater, date, beginAt, endAt } = projectionEvent;

  const navigation = useNavigation();
  const { height, width } = Dimensions.get("screen");

  const itemSize = width / 1.3;
  const styles = StyleSheet.create({
    flatList: {
      alignSelf: "stretch",
    },
    qrCodeContainer: {
      padding: 0,
      margin: 0,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      top: -itemSize / 4,
    },
    stickyHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      width: "100%",
      flexWrap: "wrap",
      gap: 10,
      // backgroundColor: "lightgrey",
    },
    headerInfoSection: {
      flexWrap: "wrap",
      // flex: 1,
      // marginRight: 5,
      // backgroundColor: "lightgrey",
    },
    headerText: {
      fontSize: 16,
      fontWeight: "900",
      color: colors.tint,
      textAlign: "center",
      // backgroundColor: "blue",
    },
    subHeaderText: {
      fontSize: 14,
      color: "#555",
    },
    coverImage: {
      width: 90,
      height: "auto",
      objectFit: "contain",
      // backgroundColor: "red",
    },
    seatscontainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      // backgroundColor: "red",
    },
    seats: {
      flex: 1,
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      // backgroundColor: "green",
    },
  });

  useEffect(() => {
    navigation.setOptions({ title: reservation.projectionEvent.movie.title });
  }, [navigation]);

  const renderQRCodeItem = ({ item }: { item: TicketType }) => (
    <ThemedView style={styles.qrCodeContainer} key={item.id}>
      <Qrcode size={itemSize} ticket={item} />
    </ThemedView>
  );

  return (
    <SafeAreaView style={globalStyles.screen}>
      {/* Sticky Header */}
      <ThemedView style={styles.stickyHeader}>
        <ThemedView style={styles.headerInfoSection}>
          <ThemedText>{movieTheater.theaterName}</ThemedText>
          <ThemedText>
            Salle {projectionEvent.projectionRoom.titleRoom} -{" "}
            {projectionEvent.beginAt}
          </ThemedText>
          <ThemedText>
            {projectionEvent.format.projectionFormatName} -{" "}
            {projectionEvent.language}
          </ThemedText>
          <ThemedText style={styles.subHeaderText}></ThemedText>
        </ThemedView>
        <ThemedView style={styles.seats}>
          <ThemedText>Sièges</ThemedText>
          <ThemedView style={styles.seatscontainer}>
            {seats.map((seat) => (
              <ThemedText key={seat.id}>
                <ThemedText style={styles.headerText}>
                  {seat.rowAndNumberSeat}{" "}
                </ThemedText>
                {seat.forReducedMobility ? (
                  <Fontisto
                    name="paralysis-disability"
                    size={16}
                    color={colors.tint}
                  />
                ) : null}
              </ThemedText>
            ))}
          </ThemedView>
        </ThemedView>
        <Image
          source={{
            uri: `${process.env.EXPO_PUBLIC_API_URL}/uploads/images/${movie.coverImageName}`,
          }}
          style={styles.coverImage}
        />
      </ThemedView>

      {/* QR Codes List */}
      <FlatList
        style={styles.flatList}
        data={tickets}
        renderItem={renderQRCodeItem}
        keyExtractor={(item) => item["@id"]}
        pagingEnabled={true}
        snapToAlignment="start"
        snapToInterval={height}
        showsVerticalScrollIndicator={true}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
}
