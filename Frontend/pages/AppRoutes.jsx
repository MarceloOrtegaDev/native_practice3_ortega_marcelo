import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Home } from "../views/Home";
import { FooterBar } from "../components/FooterBar";
import { Graphics } from "../views/Graphics";
import { Sciense } from "../views/Sciense";
import Login from "../views/Login";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState("Login");

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const route = navigationRef.getCurrentRoute()?.name;
        setCurrentRoute(route);
      }}
      onStateChange={() => {
        const route = navigationRef.getCurrentRoute()?.name;
        setCurrentRoute(route);
      }}
    >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Graphics" component={Graphics} />
        <Stack.Screen name="Sciense" component={Sciense} />
      </Stack.Navigator>

      {currentRoute !== "Login" && <FooterBar />}
    </NavigationContainer>
  );
};

export default AppNavigator;
