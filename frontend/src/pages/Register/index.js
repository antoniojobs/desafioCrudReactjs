import React,{useState} from 'react';
// import {Link} from 'react-router-dom';
import {/* FiArrowLeft, */FiArrowDownCircle, FiHome} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from'../../services/api';
import './styles.css';

//{captura dos valores dos inputs atraves de useState (estados)
export default function Register() {
    
    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();
    // console.log({nome,telefone,email,cidade,uf});

//fazo cadastro de usuários    
async function handleRegister(e) {
   e.preventDefault();//previne o recarregamento de submit
    try {
        //dados para envio a api
        const data = ({nome,telefone,email,cidade,uf});
        const respose = await api.post('usuarios',data);
        alert(`Seu ID de acesso: ${respose.data.id}`);
        console.log(data);
        history.push('/');
    } catch (error) {
        console.log('deu erro');
        alert('Erro no cadastro, usuario não cadastrado');
    }
}
//}
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <FiArrowDownCircle size={100} color="#1122c1cc" /> 
                    <h1>Cadrate-se</h1>
                    <p>Aqui você poderá se cadastrar de maneira simples para usar o sistema</p>
                </section>  
            
                <form onSubmit={handleRegister}className="form">
                    
                    <input /* required */ placeholder="Nome" value={nome} onChange={e => setName(e.target.value)}/>
                    <input /* required */ placeholder="telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    <input /* required */ type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                <div className="input-group">
                    <input /* required */ placeholder="cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
                    <input /* required */ placeholder="uf" style={{width:80}} value={uf} onChange={e => setUf(e.target.value)}/>
                </div>

                    <button className="button" type="submit">Cadastrar</button>
                    <FiHome className="back-link" size="20" color="#1122c1cc" /> 
                    <Link to="/">home</Link>
                </form>
            </div>
        </div>
    );
}
