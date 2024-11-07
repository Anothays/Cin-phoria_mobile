import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColor";
import { SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "@/style/GlobalStyles";

export default function index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView
      style={{
        ...globalStyles.screen,
        backgroundColor: colors.backgroundSecondary,
      }}
    >
      <ScrollView>
        <ThemedText>Cinémas</ThemedText>
      </ScrollView>
    </SafeAreaView>
  );
}
