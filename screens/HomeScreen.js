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
import Toast from "react-native-toast-message";

const HomeScreen = () => {
  const url = "https://random-data-api.com/api/v2/users";
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  // retrieve 10 users and update state
  const fetchUsers = async () => {
    setRefreshing(true);
    fetch(`${url}?size=10`)
      .then((response) => response.json())
      .then((userList) => {
        setUsers(userList);
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
        showToastMessage({ text1: "Fetch error" });
        console.log(err);
      });
  };

  // When fetch fails, display a toast message.
  const showToastMessage = async (props) => {
    const { type = "error", text1 = "Fetch fail" } = props;
    Toast.show({ type, text1 });
  };

  // initial fetch
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUser = ({ item }) => {
    return <Person user={item} />;
  };

  const handleRefresh = () => {
    fetchUsers();
  };

  // fetch one user. Triggered by the FAB button.
  const fetchOneUser = async () => {
    fetch(`${url}?size=1`)
      .then((response) => response.json())
      .then((user) => {
        const newUsers = [user, ...users];
        setUsers(newUsers);
      })
      .catch((err) => {
        console.log(err);
      });
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
        { flex: 1 },
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
      <FloatingActionButton fetchOneUser={fetchOneUser} />
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
