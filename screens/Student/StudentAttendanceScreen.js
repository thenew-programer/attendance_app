import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const StudentAttendanceScreen = () => {
	return (
	<View style={styles.container}>
			<Text>Professor Dashboard Screen</Text>
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



export default StudentAttendanceScreen;
