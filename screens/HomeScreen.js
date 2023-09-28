/**
 *
 * Serdar Ulutas
 * 2023-Sept-27
 *
 * https://mad9135.github.io/f2023/deliverables/assign.html#_2-react-native-app
 *
 */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import Person from "../components/Person";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FloatingActionButton from "../components/FloatingActionButton";

const HomeScreen = () => {
  const url = "https://random-data-api.com/api/v2/users?size=10";
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  const getUsers = async () => {
    setError("");
    setRefreshing(true);
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
        setError(err.message || "Fetch error");
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderUser = ({ item }) => {
    return <Person user={item} />;
  };

  const handleRefresh = () => {
    getUsers();
  };

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <FlatList
        data={users}
        keyExtractor={(user) => user.uid}
        renderItem={renderUser}
        ItemSeparatorComponent={<View style={styles.listSeparator} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      <FloatingActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listSeparator: {
    marginBottom: 4,
  },
});

export default HomeScreen;
