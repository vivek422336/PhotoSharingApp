import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";
import { UpcomingScreen } from "../screens/UpcomingScreen";
import { CompletedScreen } from "../screens/CompletedScreen";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, name }: { focused: boolean; name: string }) => (
  <Text testID="tab-icon" style={{ color: focused ? "#007AFF" : "gray" }}>
    {name}
  </Text>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name={route.name} />
          ),
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Upcoming" component={UpcomingScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
