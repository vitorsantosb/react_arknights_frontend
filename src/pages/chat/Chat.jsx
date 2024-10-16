import React, { useEffect, useState, useRef } from 'react';
import { TextInput, Button, Box, ScrollArea, Title, Container } from '@mantine/core';
import socket from '../../services/websocket/websocket.js';
import MessagesBubble from '@/components/chat/messages/MessagesBubble.jsx';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const messagesEndRef = useRef(null); // Cria uma referência para o final do container de mensagens
	
	useEffect(() => {
		// Ouvir mensagens recebidas
		socket.on('message', (data) => {
			setMessages((prevMessages) => [...prevMessages, data]);
			scrollScreen(); // Chama scrollScreen após adicionar nova mensagem
		});
		
		// Limpar o efeito
		return () => {
			socket.off('message');
		};
	}, []);
	
	const sendMessage = (e) => {
		e.preventDefault();
		if (input) {
			socket.emit('message', {
				text: input,
				timestamp: Date.now(),
			});
			setInput('');
		}
	};
	
	const scrollScreen = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	
	return (
		<Container>
			<Title order={2} align="center" mb="md">Chat em Tempo Real</Title>
			
			<ScrollArea style={{ height: 600, marginBottom: 20 }}>
				<Box style={{ paddingBottom: '30px' }}>
					{messages.map((msg, index) => (
						<MessagesBubble
							username={"Vitor Batista"}
							userImage={"https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"}
							message={msg.text}
							timestamp={msg.timestamp}
							locale={'pt-BR'}
							key={index}
						/>
					))}
					<div ref={messagesEndRef} /> {/* Elemento para rolar até o final */}
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