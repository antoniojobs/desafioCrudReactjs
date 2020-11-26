import React from 'react';
import {FiLogIn,FiArrowDownCircle} from 'react-icons/fi';
import './styles.css';
// import logonImg from '../../assets/logo.png';
import recruImg from '../../assets/recruiters.png';
export default function logon() {
    return(
        <div className="logon-container">
            <section className="form">
            <FiArrowDownCircle size={100} color="#ec0e0e" />
                <form>
                    <h1>Logue-se aqui</h1>
                    <input placeholder="email"/>
                    <input placeholder="senha"/>
                    
                    <button className="button" type="submit">Entrar</button>
                    <a className="a" href="/register">
                        <FiLogIn className="svg" size={16} color="#ec0e0e" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
                <img  src={recruImg}alt='recrutadores'/>
        </div>
    );
}