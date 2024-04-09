import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ProfessorJustifyAttendance = () => {
	return (
	<View style={styles.container}>
			<Text>Professor Justify attendance screen</Text>
		</View>
	)
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ProfessorJustifyAttendance;
