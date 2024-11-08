import { TicketType } from "@/types/TicketType";
import QRCode from "react-native-qrcode-svg";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function Qrcode({
  ticket,
  size,
}: {
  ticket: TicketType;
  size: number;
}) {
  return (
    <ThemedView>
      <QRCode
        value={ticket.uniqueCode}
        logoBackgroundColor="transparent"
        backgroundColor="transparent"
        size={size}
      />
      <ThemedText>{ticket.uniqueCode}</ThemedText>
    </ThemedView>
  );
}
