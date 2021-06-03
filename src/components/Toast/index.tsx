import React from 'react';
import { useTransition } from 'react-spring';

import Message from './Message';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  messages: ToastMessage[]
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messageWithTransitions((style, message) => (
        <Message key={message.id} message={message} style={style} />
      ))}
    </Container>
  );
};

export default Toast;
