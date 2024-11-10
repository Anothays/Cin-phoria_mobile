import { useThemeColors } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../Context/AuthContext";

export default function Account() {
  const { authState, onLogout } = useAuth();
  const colors = useThemeColors();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const user = authState?.user;

  const handleEditProfilePicture = () => {
    alert("Feature en dévelopement");
  };

  const handleLogout = async () => {
    await onLogout!();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignSelf: "stretch",
      backgroundColor: colors.backgroundPrimary,
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: 24,
    },
    avatarContainer: {
      position: "relative",
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: colors.secondary,
    },
    cameraIcon: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: colors.secondary,
      borderRadius: 10,
      padding: 5,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 12,
      color: colors.tint,
    },
    actionList: {
      marginTop: 16,
    },
    actionItem: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#555",
    },
    actionText: {
      fontSize: 16,
      color: colors.tint,
    },
  });

  return (
    <View style={{ ...styles.container }}>
      {/* Avatar et en-tête */}
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: `${process.env.EXPO_PUBLIC_API_URL}/assets/logos/cinephoria_logo.png`,
            }}
            style={styles.avatar}
          />
          <TouchableOpacity
            style={styles.cameraIcon}
            onPress={handleEditProfilePicture}
          >
            <Ionicons name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>
          {user!.firstname} {user!.lastname}
        </Text>
      </View>

      {/* Liste des actions */}
      <View style={styles.actionList}>
        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => alert("Feature en développement")}
        >
          <Text style={styles.actionText}>Modifier mon profil</Text>
        </TouchableOpacity>

        <View style={styles.actionItem}>
          <Text style={styles.actionText}>Mode sombre</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => alert("Feature en développement")}
          />
        </View>

        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => alert("Feature en développement")}
        >
          <Text style={styles.actionText}>Termes et conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => alert("Feature en développement")}
        >
          <Text style={styles.actionText}>Politique d'utilisation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem} onPress={handleLogout}>
          <Ionicons name="log-out" size={20} color={colors.tint} />
          <Text style={styles.actionText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
