import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColor";
import { globalStyles } from "@/style/GlobalStyles";
import { SafeAreaView, ScrollView } from "react-native";

export default function Index() {
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
