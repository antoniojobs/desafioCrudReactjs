import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn,FiArrowDownCircle} from 'react-icons/fi';
import './styles.css';
// import recruImg from '../../assets/recruiters.png';

export default function Register() {
    return(
        <div className="logon-container">
            <section className="form">
                <FiArrowDownCircle size={100} color="#1122c1cc" />
                    <form>
                        <h1>Cadastre-se aqui</h1>
                        <input placeholder="email" required/>
                        <input placeholder="senha" required/>
                        
                        <button className="buttoncad" type="submit">Entrar</button>
                        <Link className="a" to="/">
                            <FiLogIn className="svg" size={16} color="#ec0e0e" />
                            Voltar para home
                        </Link>
                    </form>
                </section>
        </div>
    );
}
