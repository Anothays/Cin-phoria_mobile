import Account from "@/components/AccountScreen/Account";
import { useAuth } from "@/components/Context/AuthContext";
import SignUpForm from "@/components/SignupScreen/SignupForm";
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
      {authState?.authenticated ? <Account /> : <SignUpForm />}
    </SafeAreaView>
  );
}
