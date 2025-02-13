import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Popularjobs;