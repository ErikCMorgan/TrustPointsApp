import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

class UserDetailsScreen extends React.Component {
	state = {
		name: '',
		email: '',
	}

	handleNameChange = (text) => {
		this.setState({ name: text })
	}

	handleEmailChange = (text) => {
		this.setState({ email: text })
	}

	handleSubmit = () => {
		const { name, email } = this.state
		console.log(`Name is: ${name}, Email is: ${email}`)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>User Details</Text>

				<TextInput
					style={styles.input}
					placeholder="Name"
					onChangeText={this.handleNameChange}
				/>

				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={this.handleEmailChange}
					keyboardType="email-address"
				/>

				<Button title="Submit" onPress={this.handleSubmit} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		marginBottom: 16,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
	},
})

export default UserDetailsScreen
