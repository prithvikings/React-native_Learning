import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";

const profilegallery = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const colorScheme = useColorScheme();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={"#fff"} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark" ? styles.darkBg : styles.lightBg,
      ]}
    >
      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.picture.large }} style={styles.avatar} />
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}

        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default profilegallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBg: {
    backgroundColor: "#000",
  },
  lightBg: {
    backgroundColor: "#fff",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12121b",
  },
  card: {
    margin: 10,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#1e1e2c",
    shadowColor:"#000",
    shadowOffset:{width:0,height:4},
    shadowOpacity:0.3,
    shadowRadius:6,
    elevation:6
  },
  avatar:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:10
  },
  name:{
fontSize:20,
fontWeight:"600",
color:"#fff",
marginBottom:4
  },
  email:{
    fontSize:14,
    color:"#bbb"
  }
});
