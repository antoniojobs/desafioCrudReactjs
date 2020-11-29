import React from 'react';
// import {Link} from 'react-router-dom';
import {FiArrowLeft,FiArrowDownCircle, FiHome} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
// import recruImg from '../../assets/recruiters.png';

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <FiArrowDownCircle size={100} color="#1122c1cc" /> 
                    <h1>Cadrate-se</h1>
                    <p>Aqui você poderá se cadastrar de maneira simples para usar o sistema</p>
                </section>  
            
                <form className="form">
                    <input required placeholder="Nome" />
                    <input required placeholder="Celular" />
                    <input required type="email" placeholder="E-mail" />
                    
                <div className="input-group">
                    <input required placeholder="cidade" />
                    <input required placeholder="uf" style={{width:80}} />
                </div>
                    <button className="button" type="submit">Cadastrar</button>
                    <FiHome className="back-link" size="20" color="#1122c1cc" /> 
                    <Link to="/">home</Link>
                </form>
            </div>
        </div>
    );
}
