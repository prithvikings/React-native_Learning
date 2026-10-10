import { Text, View, StyleSheet } from "react-native";
import ProfileGallery from "../components/profile-gallery";

export default function Index() {
  return (
    <ProfileGallery />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
