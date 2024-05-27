import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom";

import {  Container, InputContainer, LeftContainer, RightContainer, Title} from "../Login/styles";
import { Button } from '../../components/Button'
import Logo from '../../assets/logo.png'

export function Login() {
  const schema = yup
  .object({
    email: yup.string().email('Digite um email valido').required('O email é obrigatório'),
    senha: yup.string().min(6, 'A senha deve ter no minimo 6 caracteres').required('A senha é obrigatória'),
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
          <Title>Olá, seja bem vindo ao <span>Dev Burguer! </span> 
          <br/>
          Acesse com seu <span>Login e senha.</span></Title>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit">Entrar</Button>
          </form>
          <p>
            Não possui conta? <Link style={{color:'#000'}} to={"/cadastro"}>Clique aqui</Link>
          </p>
        </RightContainer>
    </Container>
  );
}
