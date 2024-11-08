import { useAuth } from "@/components/Context/AuthContext";
import ReservationList from "@/components/ReservationScreen/ReservationsList";
import SignUpForm from "@/components/SignupScreen/SignupForm";
import { globalStyles } from "@/style/GlobalStyles";
import { SafeAreaView } from "react-native";

export default function Index() {
  const { authState } = useAuth();

  return (
    <SafeAreaView
      style={{
        ...globalStyles.screen,
      }}
    >
      {authState?.authenticated ? <ReservationList /> : <SignUpForm />}
    </SafeAreaView>
  );
}
