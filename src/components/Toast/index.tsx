import React from 'react';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Message from './Message';

interface ToastProps {
  messages: ToastMessage[]
}

const Toast: React.FC<ToastProps> = ({ messages }) => (
  <Container>
    {messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </Container>
);

export default Toast;
