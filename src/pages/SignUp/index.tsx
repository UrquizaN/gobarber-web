import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErros';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.svg';

import { Container, Content, ContentContainer, Background } from './styles';

interface SignUpFormProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode realizar logon no GoBarber.',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro!',
        description: 'Erro ao realizar o cadastro. Tente novamente.',
      });
    }
  }, [addToast, history]);

  return (
    <>
      <Container>
        <Background />
        <ContentContainer>
          <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu cadastro</h1>

              <Input icon={FiUser} name="name" placeholder="Nome" />
              <Input icon={FiMail} name="email" placeholder="E-mail" />
              <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="/">
              <FiArrowLeft />
              Voltar para logon
            </Link>
          </Content>
        </ContentContainer>
      </Container>
    </>
  );
};
export default SignUp;
