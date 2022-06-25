import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";

const CREATE_SUBSCRUBER_MUTATION = gql`
  mutation createSubscriber($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRUBER_MUTATION);

  const handleSubscirebe = (e: FormEvent) => {
    e.preventDefault();

    createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate('/event')
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col bg-center items-center">
      <div className="w-full max-w-[1100px] flex items-center bg-cover bg-center justify-between mt-10 mx-auto">
        <div className="max-w-[640px]">
          <Logo/>
          <h1 className="mt-8 text-[2.5rem] leading-tight" >
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed" >
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded" >
          <strong className="text-2xl mb-6 block">inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscirebe} action="" className="flex flex-col gap-2 w-full"> 
            <input type='text' 
            placeholder="Seu nome completo" 
            value={name} onChange={e => setName(e.target.value)}
            className="bg-gray-900 roundend px-5 h-14 "/>
            <input type='email' 
            placeholder="Digite seu email" 
            value={email} onChange={e => setEmail(e.target.value)}
            className="bg-gray-900 roundend px-5 h-14" />
            <button type='submit' 
            disabled={loading}
            className="bg-green-500 uppercase py-4 mt-4 roundend disabled:opacity-50 font-bold text-small hover:bg-green-700 transition-colors"
            >Garantir minha vaga</button>
          </form>
        </div>
      </div>
      <img src="src/assets/code.png" alt=""/>
    </div>
  );
};