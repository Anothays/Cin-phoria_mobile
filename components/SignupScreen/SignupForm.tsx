import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAuth } from "../Context/AuthContext";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { onLogin } = useAuth();

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const response = await onLogin!(email, password);
      if (!response || response.error) {
        alert("Identifiants invalides");
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logos/cinephoria_logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.text}>Une authentification est requise</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      {isLoading ? (
        <ActivityIndicator size={35} />
      ) : (
        <Button title="Se connecter" onPress={handleSignup} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 75,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
