import React, { useState } from "react";
import { PermissionsAndroid } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import LoginScreen from "./screens/Auth/LoginScreen";
import StudentDashboardScreen from "./screens/Student/DashboardScreen";
import ProfessorDashboardScreen from "./screens/Professor/DashboardScreen";
import StudentAttendanceScreen from "./screens/Student/StudentAttendanceScreen";
import StudentSettingsScreen from "./screens/Student/StudentSettingsScreen";
import ProfessorAttendanceScreen from "./screens/Professor/AttendanceScreen";
import ProfessorJustifyAttendance from "./screens/Professor/JustifyAttendanceScreen";
// Components
import TopBar from "./components/TopBar";
// Navigators
import ProfileStackNavigator from "./navigation/Professor/Profile";
import SettingsStackNavigator from "./navigation/Professor/Settings";
import SProfileStackNavigator from "./navigation/Student/SProfile";
import SSettingsStackNavigator from "./navigation/Student/SSettings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to track user's authentication status
  const [userType, setUserType] = useState(""); // State to track user's type (student or professor)

  const handleLogin = (type) => {
    setUserType(type);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType("");
  };

  return (
    <NavigationContainer>
      {loggedIn && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main">
            {() => (
              <>
                <TopBar onLogout={handleLogout} />
                <Tab.Navigator
                  screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "black",
                  }}
                >
                  {userType === "student" ? (
                    <>
                      <Tab.Screen
                        name="Dashboard"
                        component={StudentDashboardScreen}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="dashboard"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Attendance"
                        component={StudentAttendanceScreen}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="event-available"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Settings"
                        component={StudentSettingsScreen}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="settings"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Tab.Screen
                        name="Dashboard"
                        component={ProfessorDashboardScreen}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="dashboard"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Attendance"
                        component={ProfessorAttendanceScreen}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="event-available"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Justify Attendance"
                        component={ProfessorJustifyAttendance}
                        options={{
                          tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                              name="check"
                              size={size}
                              color={color}
                            />
                          ),
                        }}
                      />
                    </>
                  )}
                </Tab.Navigator>
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Profile" component={ProfileStackNavigator} />
          <Stack.Screen name="Settings" component={SettingsStackNavigator} />
          <Stack.Screen name="SProfile" component={SProfileStackNavigator} />
          <Stack.Screen name="SSettings" component={SSettingsStackNavigator} />
        </Stack.Navigator>
      )}
      {!loggedIn && <LoginScreen onLogin={handleLogin} />}
    </NavigationContainer>
  );
};

export default App;
