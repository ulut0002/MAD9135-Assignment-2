import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import UserAvatar from "react-native-user-avatar";
import defaultImage from "../assets/user.png";

const avatar_size = 60;

const IOS_Person = ({ user }) => {
  const { first_name = "", last_name = "", avatar = "", uid } = user;

  return (
    <View style={[styles.container]}>
      <UserAvatar
        size={avatar_size}
        name={(first_name + " " + last_name).trim()}
        src={avatar || defaultImage}
        style={styles.avatar}
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
        style={styles.avatar}
      />
    </View>
  );
};

const Person = ({ user }) => {
  return Platform.OS === "ios" ? (
    <IOS_Person user={user} />
  ) : (
    <AndroidPerson user={user} />
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
    // backgroundColor: "transparent",
    // color: "black",
  },
  name_container: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 3,
    flex: 1,
  },

  border: {
    // borderWidth: 1,
    // borderRadius: 1,
  },
});

export default Person;
