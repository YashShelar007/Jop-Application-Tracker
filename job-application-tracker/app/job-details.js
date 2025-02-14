import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const JobDetails = () => {
  const { title, company } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  company: {
    fontSize: 18,
    color: "#666",
    marginTop: 8,
  },
});
