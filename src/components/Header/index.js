import React from 'react';
import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/avatar.jpg';

function Header(){
    return <header>
        <div className="content">
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
            <div className="user">
                <div className="candidate-box float-right">
                    <div className="candidate-name text-right float-right">
                        <span className="bold">Gabriel Catelli Goulart</span> Teste de Front-end
                    </div>
                    <div className="candidate-img ">
                        <div className="candidate-img-box">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </header>;
}

export default Header;