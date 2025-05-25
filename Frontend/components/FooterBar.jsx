import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonLogout from './ButtonLogout';

export const FooterBar = () => {
  const navigate = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const renderButton = (name, icon, color) => {
    const isActive = activeButton === name;
    
    return (
      <TouchableOpacity
        onPressIn={() => setActiveButton(name)}
        onPressOut={() => setActiveButton(null)}
        onPress={() => navigate.navigate(name)}
        style={[
          styles.button,
          isActive && styles.buttonPressed
        ]}
      >
        <FontAwesome 
          name={icon} 
          size={30} 
          color={color}
          style={[
            styles.icon,
            isActive && styles.iconPressed
          ]} 
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.footer}>
      {renderButton("Home", "home", "#F0EAD2")}
      {renderButton("Graphics", "pie-chart", "#E85D04")}
      {renderButton("Sciense", "database", "#ADC178")}
      <ButtonLogout/>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#0B2545",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: [{ scale: 0.95 }],
  },
  icon: {
    opacity: 1,
  },
  iconPressed: {
    opacity: 0.8
  }
})