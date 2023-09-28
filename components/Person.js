import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import UserAvatar from "react-native-user-avatar";

const avatar_size = 50;

const IOS_Person = ({ user }) => {
  const { first_name = "", last_name = "", avatar = "", uid } = user;

  return (
    <View style={[styles.container]}>
      <UserAvatar
        size={avatar_size}
        name={(first_name + " " + last_name).trim()}
        src={avatar}
      />
      <View style={[styles.border, styles.name_container]}>
        <Text style={[styles.name, styles.first_name]}>{first_name}</Text>
        <Text style={[styles.name, styles.last_name]}>{last_name}</Text>
      </View>
    </View>
  );
};

const AndroidPerson = ({ user }) => {
  const { first_name = "", last_name = "", avatar = "", uid } = user;
  return (
    <View style={[styles.container]}>
      <View style={[styles.border, styles.name_container]}>
        <Text style={[styles.name, styles.first_name]}>{first_name}</Text>
        <Text style={[styles.name, styles.last_name]}>{last_name}</Text>
      </View>
      <UserAvatar
        size={avatar_size}
        name={(first_name + " " + last_name).trim()}
        src={avatar}
      />
    </View>
  );
};

const Person = ({ user }) => {
  const { first_name = "", last_name = "", avatar = "", uid } = user;

  return Platform.OS === "ios" ? (
    <IOS_Person user={user} />
  ) : (
    <AndroidPerson user={user} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatar_container}>
        <UserAvatar
          size={50}
          name={(first_name + " " + last_name).trim()}
          src={avatar}
          style={styles.avatar}
        />
      </View>

      <View style={styles.name_container}>
        <Text style={styles.name_text}>{first_name}</Text>
        <Text style={styles.name_text}>{last_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 1,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    gap: 10,
  },
  name: {
    fontSize: 16,
  },
  first_name: {
    fontWeight: "500",
  },
  last_name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  avatar_container: {},
  avatar: {
    backgroundColor: "transparent",
  },
  name_container: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 3,
    flex: 1,
  },
  name_text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  border: {
    borderWidth: 1,
    borderRadius: 1,
  },
});

export default Person;
