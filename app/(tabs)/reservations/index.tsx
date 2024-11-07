import { useAuth } from "@/components/Context/AuthContext";
import SignUpForm from "@/components/SignupScreen/SignupForm";
import { ThemedText } from "@/components/ThemedText";
import { globalStyles } from "@/style/GlobalStyles";
import { SafeAreaView } from "react-native";

export default function index() {
  const { authState } = useAuth();

  return (
    <SafeAreaView
      style={{
        ...globalStyles.screen,
      }}
    >
      {authState?.authenticated ? (
        <ThemedText>Mes réservations</ThemedText>
      ) : (
        <SignUpForm />
      )}
    </SafeAreaView>
  );
}
