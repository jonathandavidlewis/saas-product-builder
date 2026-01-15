import React, {useState} from 'react';
import {Text, Box, useInput, useApp} from 'ink';

const userStories = [
	'manage user accounts and permissions',
	'view analytics and usage statistics',
	'configure application settings',
	'manage billing and subscriptions',
	'set up integrations with third-party services',
	'create and manage API keys',
	'view audit logs and activity history',
	'customize branding and appearance',
];

export default function App() {
	const {exit} = useApp();
	const [selectedIndex, setSelectedIndex] = useState(0);

	useInput((input, key) => {
		if (input === 'q' || key.escape) {
			exit();
		}

		if (key.upArrow) {
			setSelectedIndex((prev) => (prev > 0 ? prev - 1 : userStories.length - 1));
		}

		if (key.downArrow) {
			setSelectedIndex((prev) => (prev < userStories.length - 1 ? prev + 1 : 0));
		}
	});

	return (
		<Box flexDirection="column" padding={1}>
			<Text bold color="cyan">
				User Stories
			</Text>
			<Text dimColor>As an application admin, I want to be able to...</Text>
			<Box flexDirection="column" marginTop={1}>
				{userStories.map((story, index) => {
					const isSelected = index === selectedIndex;
					return (
						<Text key={index}>
							<Text color={isSelected ? 'green' : 'white'}>
								{isSelected ? '>' : ' '}
							</Text>
							<Text color="yellow"> {index + 1}.</Text>
							<Text color={isSelected ? 'green' : 'white'}> {story}</Text>
						</Text>
					);
				})}
			</Box>
			<Box marginTop={1}>
				<Text dimColor>Use arrow keys to navigate, q to quit</Text>
			</Box>
		</Box>
	);
}
