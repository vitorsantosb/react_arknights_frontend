import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { TextInput, Button, Box, ScrollArea, Text, Notification, Container, Title } from '@mantine/core';

const socket = io('http://localhost:5000');

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [welcomeMessage, setWelcomeMessage] = useState('');
	
	useEffect(() => {
		// Ouvir mensagens recebidas
		socket.on('message', (data) => {
			setMessages((prevMessages) => [...prevMessages, data]);
		});
		
		// Limpar o efeito
		return () => {
			socket.off('message');
		};
	}, []);
	
	const sendMessage = (e) => {
		e.preventDefault();
		if (input) {
			socket.emit('message', { text: input });
			setInput('');
		}
	};
	
	return (
		<Container>
			<Title order={2} align="center" mb="md">Chat em Tempo Real</Title>
			
			{welcomeMessage && (
				<Notification color="blue" mb="lg">
					{welcomeMessage}
				</Notification>
			)}
			
			<ScrollArea style={{ height: 300, marginBottom: 20 }}>
				<Box>
					{messages.map((msg, index) => (
						<Text key={index} mb="xs">
							{msg.text}
						</Text>
					))}
				</Box>
			</ScrollArea>
			
			<form onSubmit={sendMessage}>
				<TextInput
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Digite sua mensagem..."
					mb="sm"
				/>
				<Button type="submit" fullWidth>
					Enviar
				</Button>
			</form>
		</Container>
	);
};

export default Chat;
