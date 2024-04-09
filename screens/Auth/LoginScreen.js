import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { Colors } from '../../constants/Colors';

const LoginScreen = ({ onLogin }) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState('student');
	const [showPassword, setShowPassword] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleLogin = () => {
		if (!username || !password) {
			if (!username) setUsernameError(true);
			if (!password) setPasswordError(true);
			// Alert the user that both username and password are required
			alert('Please provide both username and password.');
			return;
		}
			const loggedInUserType = userType; // Get the user type from state
			onLogin(loggedInUserType); // Call the onLogin callback with the user type
	};

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')}
				style={styles.logo}
				resizeMode="contain" />

			<Text style={styles.title}>Login</Text>
			<Picker
				style={styles.picker}
				selectedValue={userType}
				onValueChange={(itemValue) => setUserType(itemValue)}
			>
				<Picker.Item label="Student" value="student" />
				<Picker.Item label="Professor" value="professor" />
			</Picker>
			<TextInput
				style={[styles.input, usernameError && styles.inputError]}
				placeholder="Username"
				value={username}
				onChangeText={(value) => {
					setUsername(value);
					setUsernameError(false);
				}}
			/>
			<View style={styles.passwordContainer}>
				<TextInput
					style={[styles.passwordInput, passwordError && styles.inputError]}
					placeholder="Password"
					secureTextEntry={!showPassword}
					value={password}
					onChangeText={(value) => {
						setPassword(value);
						setPasswordError(false);
					}}
				/>
				<TouchableOpacity
					style={styles.showPasswordButton}
					onPress={() => setShowPassword(!showPassword)}
				>
					<Text style={styles.showPasswordButtonText}>
						{showPassword ? 'Hide' : 'Show'}
					</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 50, // Adjust the top padding to move the content down
	},
	logo: {
		width: 200, // Set the width of your logo image
		height: 200, // Set the height of your logo image
		marginBottom: 150,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop: -50,
		color: Colors.primary,
	},
	picker: {
		width: '80%',
		height: 50,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: Colors.quaternary, // Change to quaternary gray
		borderRadius: 10,
		color: Colors.secondary,
	},
	input: {
		width: '80%',
		height: 50,
		borderWidth: 1,
		borderColor: Colors.quaternary, // Change to quaternary gray
		borderRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	inputError: {
		borderColor: Colors.red, // Change border color to red for error state
	},
	passwordContainer: {
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	passwordInput: {
		flex: 1,
		height: 50,
		borderWidth: 1,
		borderColor: Colors.quaternary, // Change to quaternary gray
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		paddingHorizontal: 10,
	},
	showPasswordButton: {
		backgroundColor: Colors.primary,
		height: 50,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	showPasswordButtonText: {
		color: Colors.background,
	},
	button: {
		width: '80%',
		height: 50,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 200,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.background,
	},
});

export default LoginScreen;
