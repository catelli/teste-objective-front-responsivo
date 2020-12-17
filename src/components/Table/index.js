//-------------import--------------//
import React,{ useEffect, useState } from 'react';
//Api Marvel
import apiEndpoint from '../../server/api'
//md5
import md5 from 'crypto-js/md5';
//conteudo
import Header from '../Header';
import Modal from '../Modal';
//Styled
import {    Container,
            Pagination,
            PaginationButton,
            PaginationNumbers
        } from './styles';
//--------------------------------//
function Table(){

        //Define a constant de personagens da api - setCharacters()
        const  [characters, setCharacters] = useState([]);
        const  [totalCha, setTotal] = useState(0);
        const  [limitCha, setLimit] = useState(10);
        const  [pagesCha, setPages] = useState([]);
        const  [currentPage, setCurrentPage] = useState(1);


       
        
        useEffect(() => {
            async function loadCharacters(){
                const privateKey = '2bcd7f6d48b05a00ec0a51734bdadaf8d9f9d1af';
                const publicKey = 'ec6672cc827665e5efa18ae9b1cfdd38';
                const timeStamp = '1';
                const hashMd5 = md5(timeStamp+privateKey+publicKey).toString();
                const currentPageOffset = Math.ceil(currentPage * limitCha) - limitCha;
                
                //chamar GET
                const response = await apiEndpoint.get('/public/characters',{ params: { apikey: publicKey, ts: timeStamp, hash: hashMd5, limit: limitCha, offset: currentPageOffset} });
                
                console.log(response.data.data);

                setTotal(response.data.data.total);
                const totalPages =  Math.ceil(100 / limitCha);
                //const totalPages =  Math.ceil(totalCha / limitCha);
                const arrayChaPages = [];
                for(let i = 1; i < totalPages; i++){
                    arrayChaPages.push(i);
                }
                setPages(arrayChaPages);
                setCharacters(response.data.data.results);
              
            }
        loadCharacters();
    },[limitCha,currentPage]);
    return (
        <Container>
            <Modal></Modal>
            <Header></Header>
            <div className="content-table fadeIn">
            <div className="box-top">
                <div className="title dark-smoke-color bold">
                    <h2>Busca de Personagens</h2>
                </div>  
                <div className="subtitle dark-smoke-color bold">
                    <p>Nome do personagem</p>
                </div> 
                <div className="input-search">
                    <input placeholder="Search" type="text"/>
                </div>  
               
            </div>    
            <table>
                <thead>
                    <tr>
                        <th>Personagem</th>
                        <th>Séries</th>
                        <th>Eventos</th>
                    </tr>
                </thead>
                <tbody className="dark-smoke-color">
                    {characters.map((character) => (
                        <tr key={character.id} 
                            onClick={() => {
                                window.getElementById('#modal').show()
                            }}
                        >
                            <td className="name-img-box">
                                <div className="box-img-character">
                                    <div className="img-character float-left">
                                        <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="Imagem do Personagem" />
                                    </div>
                                </div>
                                <div className="name-character">
                                    {character.name}
                                </div>
                            </td>
                            <td>
                                {character.series.items.slice(0, 3).map((seriesItems) => (
                                    <p key={seriesItems.name}>{seriesItems.name}</p>
                                ))}
                            </td>
                            <td>
                                {character.events.items.slice(0, 3).map((eventsItems) => (
                                    <p key={eventsItems.name}>{eventsItems.name}</p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <Pagination>
                <PaginationButton>
                    {currentPage > 1 && (
                        <PaginationNumbers onClick={() => setCurrentPage(currentPage - 1)} > ← </PaginationNumbers>                        
                    )}
                        {pagesCha.map((pageN) => (
                            <PaginationNumbers 
                            className="numbers-page" 
                            isSelect={pageN == currentPage} 
                            key={pageN}
                            onClick={() => setCurrentPage(pageN) || window.scrollTo({top: 0, behavior: 'smooth'})}>
                                {pageN}
                            </PaginationNumbers>
                        ))}
                    {currentPage < pagesCha.length && (
                        <PaginationNumbers onClick={() => setCurrentPage(currentPage + 1)}> → </PaginationNumbers>                     
                    )}
                    {currentPage < pagesCha.length && (
                        <PaginationNumbers onClick={() => setCurrentPage(pagesCha.length) || console.log(pagesCha)}> →→ </PaginationNumbers>                     
                    )}
                </PaginationButton>
            </Pagination>
        </Container>
    );
}
export default Table;