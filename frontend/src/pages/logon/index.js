import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logonImg from '../../assets/logo.png';
import recruImg from '../../assets/recruiters.png';
export default function logon() {
    return(
        <div className="logon-container">

        <h1>Ola Brasil</h1>
        <section className="form">
            <img src={logonImg} alt='logo'/>
            <form>
                <h1>Logue-se aqui</h1>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <button type="submit">Entrar</button>
                <a href="/register">
                    <FiLogIn size={16} color="#ec0e0e" />
                    Não tenho cadastro
                </a>
            </form>
        </section>
            <img src={recruImg}alt='recrutadores'/>
        </div>
    );
}