/**
 *
 * Serdar Ulutas
 * 2023-Sept-27
 *
 * https://mad9135.github.io/f2023/deliverables/assign.html#_2-react-native-app
 *
 */

import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Person from "./components/Person";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  const url = "https://random-data-api.com/api/v2/users?size=10";
  // const insets = useSafeAreaInsets();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    setLoading(true);
    setError("");
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        setLoading(false);
        setUsers(users);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || "Fetch error");
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    // console.log(users);
  }, [users]);

  const renderUser = ({ item }) => {
    return <Person user={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(user) => user.uid}
        renderItem={renderUser}
        ItemSeparatorComponent={<View style={styles.listSeparator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listSeparator: {
    marginBottom: 4,
  },
});
