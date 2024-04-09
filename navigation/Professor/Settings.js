import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../screens/Professor/SettingsScreen'; // Import the SettingsScreen component

const SettingsStack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* Add additional screens if needed */}
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
