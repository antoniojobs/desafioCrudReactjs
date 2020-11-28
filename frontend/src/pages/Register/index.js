import React from 'react';
import {FiLogIn,FiArrowDownCircle} from 'react-icons/fi';
// import './styles.css';
// import recruImg from '../../assets/recruiters.png';

export default function Register() {
    return(
        <div className="logon-container">
            <section className="form">
                <FiArrowDownCircle size={100} color="#1122c1cc" />
                    <form>
                        <h1>Logue-se aqui</h1>
                        <input placeholder="email" required/>
                        <input placeholder="senha" required/>
                        
                        <button className="button" type="submit">Entrar</button>
                        <a className="a" href="/register">
                            <FiLogIn className="svg" size={16} color="#ec0e0e" />
                            Não tenho cadastro
                        </a>
                    </form>
                </section>
                {/* <img className="img"  src={recruImg}alt='recrutadores'/> */}
        </div>
    );
}
