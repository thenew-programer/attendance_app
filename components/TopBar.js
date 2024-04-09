import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	Text,
	StyleSheet,
	Modal,
	Pressable,
	TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create stack navigators for profile and settings screens
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

// Define Profile Stack
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* Add additional screens if needed */}
    </ProfileStack.Navigator>
  );
};

// Define Settings Stack
const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* Add additional screens if needed */}
    </SettingsStack.Navigator>
  );
};

const TopBar = ({ onLogout }) => {
	const navigation = useNavigation();
	const [menuVisible, setMenuVisible] = useState(false);

	const handleProfile = () => {
		// Navigate to profile screen
		navigation.navigate('Profile');
		setMenuVisible(false);
	};

	const handleSettings = () => {
		// Navigate to settings screen
		navigation.navigate('Settings');
		setMenuVisible(false);
	};

	const handleLogout = () => {
		// Perform logout logic
		onLogout();
		setMenuVisible(false);
	};

	return (
		<View style={styles.container}>
			{/* Logo */}
			<Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />

			{/* Menu button */}
			<TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
				<MaterialIcons name="menu" size={24} color="black" />
			</TouchableOpacity>

			{/* Dropdown menu */}
			<Modal
				animationType="fade"
				transparent={true}
				visible={menuVisible}
				onRequestClose={() => setMenuVisible(false)}
			>
				<TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
					<View style={styles.modalContainer}>
						<View style={styles.menu}>
							<Pressable style={styles.menuItem} onPress={handleProfile}>
								<Text style={styles.menuText}>Profile</Text>
							</Pressable>
							<Pressable style={styles.menuItem} onPress={handleSettings}>
								<Text style={styles.menuText}>Settings</Text>
							</Pressable>
							<Pressable style={styles.menuItem} onPress={handleLogout}>
								<Text style={styles.menuText}>Logout</Text>
							</Pressable>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingTop: 15,
		paddingBottom: 5,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	},
	logo: {
		width: 150,
		height: 70,
	},
	menuButton: {
		paddingHorizontal: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	menu: {
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 20,
		width: '60%',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	menuItem: {
		paddingVertical: 10,
	},
	menuText: {
		fontSize: 20,
	},
});

export default TopBar;
