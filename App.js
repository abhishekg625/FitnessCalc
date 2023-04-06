import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import BmrClaculator from "./src/BmrClaculator";
import BodyfatCalculator from "./src/BodyFat/BodyfatCalculator";
import BmiCalculator from "./src/Bmi/BmiCalculator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Fitness Buddy",
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="BmrCalculator"
          component={BmrClaculator}
          options={{
            title: "BMR Calculator",
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="BodyfatCalculator"
          component={BodyfatCalculator}
          options={{
            title: "Body Fat Calculator",
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="BmiCalculator"
          component={BmiCalculator}
          options={{
            title: "Body Mass Index",
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
