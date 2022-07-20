import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const Submit1 = () => {
    navigation.navigate("BmrCalculator");
  };
  const Submit2 = () => {
    navigation.navigate("BodyfatCalculator");
  };
  const Submit3 = () => {
    navigation.navigate("BmiCalculator");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fitness Calculator</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => Submit1()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>BMR Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Submit2()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>Body Fat Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Submit3()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.calText}>Body Mass Index</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://en.wikipedia.org/wiki/Basal_metabolic_rate"
            )
          }
        >
          <Text style={styles.calText}>Know About BMR </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://en.wikipedia.org/wiki/Body_fat_percentage")
          }
        >
          <Text style={styles.calText}>Know About Body Fat </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://en.wikipedia.org/wiki/Body_mass_index")
          }
        >
          <Text style={styles.calText}>Know About Body Mass Index </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <FontAwesome5 name="dumbbell" size={25} color="black" />
        <Ionicons name="body" size={25} color="black" />
        <MaterialCommunityIcons name="jump-rope" size={25} color="black" />
        <MaterialCommunityIcons name="dumbbell" size={25} color="black" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2c9f0",
  },
  headerText: {
    fontSize: 25,
    color: "#fc0390",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    margin: 20,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "yellow",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 15,
    marginTop: 10,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  mainText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  mainImage: {
    height: 120,
    width: 200,
  },
  calText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 260,
    height: 390,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  buttonContainer2: {
    width: 250,
    height: 85,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
