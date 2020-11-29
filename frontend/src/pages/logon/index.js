import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn,FiArrowDownCircle} from 'react-icons/fi';
import './styles.css';
import recruImg from '../../assets/recruiters.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <FiArrowDownCircle size={100} color="#ec0e0e" />
                    <form>
                        <h1>Logue-se aqui</h1>
                        <input placeholder="email" required/>
                        <input placeholder="senha" required/>
                        
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/cadastro">
                            <FiLogIn className="svg" size={16} color="#ec0e0e" />
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
                <img className="img"  src={recruImg}alt='recrutadores'/>
        </div>
    );
}
