import styled from 'styled-components';
import searchIcon from  '../../assets/icons/search-solid.svg'

export const chaTable = styled.table`
    width: 500px;
    border-collapse: collapse;
`;
export const Pagination = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding:25px 0;
    background-color:#fff;
`;
export const PaginationButton = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
`;
export const PaginationNumbers = styled.div`
    cursor:pointer;
    width: 40px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 3px;
    background-color: #F5F5F5;
    &:hover {
        background-color: #167ABC;
        color: #fff;
    }
    ${(props) => props.isSelect && {
        background: '#167ABC',
        color: '#fff'
    }}
`;
export const Container = styled.div`
    font-family: 'PT Sans', sans-serif;
    background: #E5E5E5;
    header {
        width: 100%;
        position: fixed;
        z-index:10;
        height: 64px;
        background: #fff;
    }
    input[type="text"]{
        width: 295px;
        height: 32px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        padding-left: 16px;
        &::placeholder{
            font-size: 14px;
            font-style: italic;
            color: #8E8E8E;
        }
    }
    table {
        width: 100%;
        border:none;
        border-collapse: separate;
        border-spacing: 0 0.5em;
    }
    table thead{
        text-align: left;
        font-size: 12px;
        letter-spacing: 0px;
        color: #8E8E8E;
        font-weight: 100;
        opacity: 1;
    }
    table thead tr th {
        padding-left:24px;
        width: 33.33%;
    }    
    table tbody tr{
        box-shadow: 0px 0px 5px #00000033;
        border-radius: 4px;
        height: 88px;
        font-size:14px;
        cursor:pointer;
        //animacao
        -webkit-transition: all 150ms ease;
        -moz-transition: all 150ms ease;
        -ms-transition: all 150ms ease;
        -o-transition: all 150ms ease;
        transition: all 150ms ease;
        &:hover{
            box-shadow: 0px 0px 5px #00000073;
            transform: scale(1.02);
        }
    }
    table tbody tr td{
        border:none;
        background: #fff;
        
    }
    table tbody tr td p {
        padding-left:24px;
      
    }
    table p {
        margin:0;
    }
    tr:first-child td:first-child { border-top-left-radius: 4px; }
    tr:first-child td:last-child { border-top-right-radius: 4px; }
    tr:last-child td:first-child { border-bottom-left-radius: 4px; }
    tr:last-child td:last-child { border-bottom-right-radius: 4px; }
    //class global
    .text-right{
        text-align: right;
    }
    .text-left{
        text-align: left;
    }
    .float-right{
        float: right;
    }
    .float-left{
        float: left;
    }
    .bold {
        font-weight:700;
    }
    .dark-smoke-color{
        color: #555555;
    }
    //--fim class global

    .content-table{
       padding: 65px 0 83px 0;
       width: 1140px;
       margin: 0 auto;
    }
    .logo{
        width:50%;
        height: 64px;
    }
    .user{
        width: 50%;
        color: #555555;
    }
    .content{
        display: flex;
    }
    .logo-img{
        width: 129px;
        padding: 16px 0 0 24px;
    }
    .candidate-img{
        padding: 16px;
    }
    .candidate-img-box{
        width: 32px;
        overflow: hidden;
        border-radius: 4px;
        height: 32px;
    }
    .candidate-img-box img{
        width: 100%;
    }
    .logo img{
        width:100%;
    }
    .name-character {
        font-weight:700;
    }
    .candidate-box{
        display: flex;
    }
    .candidate-name{
        font-size: 14px;
        line-height: 64px;
    }
    .title h2{
        text-align: left;
        font-size: 32px;
        margin-top:40px;
        margin-bottom:0;
    }
    .subtitle p{
        text-align: left;
        font-size:18px; 
        margin: 12px 0 0px 0;
    }
    .img-character{
        width: 48px;
        height: 48px;
        border-radius: 4px;
        overflow: hidden;
        margin:20px 24px;
    }
    .img-character img{
        height: 100%;
    }
    .name-character{
        height:48px;
        margin:20px 5px;
        line-height:48px;
        font-size:16px;
    }
    .input-search{
        margin-top: 10px;
        margin-bottom:40px;
    }
    .input-search input{
        background: url(${searchIcon}) right no-repeat #fff;
        background-size: 20px;
        background-position-x: 97%;
    }
    .box-modal{
        width: 100%;
        height: 100%;
        position: fixed;
        background: #00000050;
        z-index: 1;
    }
    .content-modal{
        width: 90%;
        background: #E5E5E5;
        height: 100%;
        padding-top: 65px;
    }
    .back-button{
        
    }
    //Animacoes
    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    } 
`;
