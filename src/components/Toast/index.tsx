import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, ToastContent } from './styles';

const Toast: React.FC = () => (
  <Container>
    <ToastContent hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Ocorreu um erro</strong>
        <p>Não foi possível realizar o login</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </ToastContent>

    <ToastContent type="success" hasDescription={false}>
      <FiAlertCircle size={20} />

      <div>
        <strong>Ocorreu um erro</strong>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </ToastContent>

    <ToastContent type="error" hasDescription>
      <FiAlertCircle size={20} />

      <div>
        <strong>Ocorreu um erro</strong>
        <p>Não foi possível realizar o login</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </ToastContent>
  </Container>
);

export default Toast;
