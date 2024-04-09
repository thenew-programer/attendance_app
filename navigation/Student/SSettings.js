import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../screens/Student/SettingsScreen'; // Import the SettingsScreen component

const SettingsStack = createStackNavigator();

const SSettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* Add additional screens if needed */}
    </SettingsStack.Navigator>
  );
};

export default SSettingsStackNavigator;
