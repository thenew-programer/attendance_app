import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/Student/ProfileScreen'; // Import the ProfileScreen component

const ProfileStack = createStackNavigator();

const SProfileStackNavigator = () => {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} />
			{/* Add additional screens if needed */}
		</ProfileStack.Navigator>
	);
};

export default SProfileStackNavigator;
