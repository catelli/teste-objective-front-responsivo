import React,{ useEffect, useState } from 'react';

function Modal(){
    useEffect(() => {
        async function characterInfo(){
            
        }
        characterInfo();
},[]);
    return  <div className="box-modal fadeIn" id="modal">
                <div className="content-modal float-right">
                    <div className="back-button float-right" 
                    onClick={Voltar} >
                        ←
                    </div>
                </div>
            </div>
        ;
}

export default Modal;