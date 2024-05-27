import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom";

import {  Container, InputContainer, LeftContainer, RightContainer, Title} from "../Login/styles";
import { Button } from '../../components/Button'
import Logo from '../../assets/logo.png'

export function Register() {
  const schema = yup
  .object({
    email: yup.string().email('Digite um email valido').required('O email é obrigatório'),
    senha: yup.string().min(6, 'A senha deve ter no minimo 6 caracteres').required('A senha é obrigatória'),
    nome: yup.string().required('O nome é obrigatório'),
    confirmPassaword: yup.string().required().oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)
  
  return (
    <Container>
        <LeftContainer>
          <img src={Logo} alt="logo-devburguer"/>
        </LeftContainer>
        <RightContainer>
          <Title> <span>Criar Conta </span> </Title>
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
              <label>Nome</label>
              <input type="text" {...register("nome")}/>
              <p>{errors?.nome?.message}</p>
            </InputContainer>
            <br/>
            <InputContainer>
              <label>Email</label>
              <input type="email" {...register("email")}/>
              <p>{errors?.email?.message}</p>
            </InputContainer>
              <br/>
            <InputContainer>
              <label>Senha</label>
              <input type="password" {...register("senha")}/>
              <p>{errors?.senha?.message}</p>
            </InputContainer>
            <br/>
            <InputContainer>
              <label>Confirmar Senha</label>
              <input type="password" {...register("senha")}/>
              <p>{errors?.confirmPassaword?.message}</p>
            </InputContainer>
            <br/>
            <Button type="submit">Cadastrar</Button>
          </form>
          <p>
            Já possui conta? <Link style={{color: '#000'}} to={'/login'}>Entra</Link>
          </p>
        </RightContainer>
    </Container>
  );
}
