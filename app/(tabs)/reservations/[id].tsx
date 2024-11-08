import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "@/style/GlobalStyles";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function ReservationDetails() {
  const params = useLocalSearchParams() as { [key: string]: string };
  const ticketCodesArray = params.ticketCodes.split(",");
  const { height, width } = Dimensions.get("screen");
  console.log(height);

  const itemSize = width / 1.3;
  const styles = StyleSheet.create({
    flatList: {
      // backgroundColor: "red",
      alignSelf: "stretch",
    },
    qrCodeContainer: {
      padding: 0,
      margin: 0,
      height: height,
      alignItems: "center",
      // backgroundColor: "green",
      justifyContent: "center",
      top: -itemSize / 4,
    },
  });

  const renderQRCodeItem = ({ item }: { item: string }) => (
    <ThemedView style={styles.qrCodeContainer}>
      <ThemedText type="title">{params.movieTitle}</ThemedText>
      <ThemedText type="subtitle">
        {params.date} - {params.beginAt}
      </ThemedText>
      <ThemedText type="subtitle">
        Salle {params.room} - [{params.format}] - {params.version}
      </ThemedText>
      <QRCode value={item} logoBackgroundColor="transparent" size={itemSize} />
      <ThemedText>{item}</ThemedText>
    </ThemedView>
  );
  return (
    <SafeAreaView style={globalStyles.screen}>
      <FlatList
        style={styles.flatList}
        data={ticketCodesArray}
        renderItem={renderQRCodeItem}
        keyExtractor={(item) => item}
        pagingEnabled={true}
        snapToAlignment="start"
        snapToInterval={height}
        showsVerticalScrollIndicator={true}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
}
