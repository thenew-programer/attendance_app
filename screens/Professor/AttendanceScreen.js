import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

const ProfessorAttendanceScreen = () => {
	const [nfcSupported, setNfcSupported] = useState(true);
	const [nfcEnabled, setNfcEnabled] = useState(true);
	const [tagData, setTagData] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	// useEffect(() => {
	// 	async function initializeNfc() {
	// 		console.warn('Initializing NFC...');
	// 		try {
	// 			const supported = 'hello';
	// 			// const supported = await NfcManager.isSupported();
	// 			// console.warn("Is Supported: ", supported);
	// 			// setNfcSupported(supported);
	// 			if (supported != null) {
	// 				await NfcManager.start();
	// 				console.warn('Starting NfcManager...');
	// 				const enabled = await NfcManager.isEnabled();
	// 				console.warn("Is Supported: ", enabled);
	// 				setNfcEnabled(enabled);
	// 				if (enabled != null) {
	// 					NfcManager.setEventListener(NfcTech.Ndef, handleTagDiscovered);
	// 					console.warn("Listening...");
	// 				}
	// 			}
	// 		} catch (error) {
	// 			console.error('Error initializing NFC');
	// 		}
	// 	}
	//
	// 	initializeNfc();
	//
	// 	return () => {
	// 		NfcManager.setEventListener(NfcTech.Ndef, null);
	// 		NfcManager.stop();
	// 	};
	// }, []);

	const handleTagDiscovered = (tag) => {
		setTagData(tag);
		setModalVisible(true);
		// Here you can process the tag data and register attendance
	};

	const startNfcScan = async () => {
		try {
			await NfcManager.start();
			NfcManager.setEventListener(NfcTech.Ndef, handleTagDiscovered);
			await NfcManager.requestTechnology(NfcTech.Ndef);
		} catch (ex) {
			console.warn(ex);
		}
	};

	return (
		<View style={styles.container}>
			{nfcSupported && nfcEnabled ? (
				<>
					<Text style={styles.text}>NFC is supported and enabled</Text>
					<TouchableOpacity style={styles.button} onPress={startNfcScan}>
						<Text style={styles.buttonText}>Start NFC Scan</Text>
					</TouchableOpacity>
					{tagData && (
						<Modal
							visible={true}
							animationType="slide"
							transparent={true}
							onRequestClose={() => setModalVisible(false)}
						>
							<View style={styles.modalContainer}>
								<Text style={styles.tagText}>Tag ID: {tagData.id}</Text>
								{/* Display other tag data as needed */}
								<TouchableOpacity style={styles.finishButton} onPress={() => setModalVisible(false)}>
									<Text style={styles.buttonText}>Finish Attendance</Text>
								</TouchableOpacity>
							</View>
						</Modal>
					)}
				</>
			) : (
				<Text style={styles.text}>NFC is not supported or enabled on this device</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#007bff',
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 10,
		marginBottom: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	tagText: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	finishButton: {
		backgroundColor: '#007bff',
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 10,
	},
});

export default ProfessorAttendanceScreen;
