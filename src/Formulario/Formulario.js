
import colegio from '../assets/logoo.png';

import axios from 'axios' 
import React, { useEffect, useState } from "react";

import './Formulario.css'
let Formulario = () => {


    const api = async ()  => {
        
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
      
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
      
        headers.append('GET', 'POST', 'OPTIONS');
      


        
        
        
        const response = await  axios.get('https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?situacaoFuncionamento=1&energiaInexistente=on&aguaInexistente=on&esgotoInexistente=on&cozinha=on', {
            headers:headers 
         
            
          })
        console.log(response)
      
        
      }
      useEffect(()=> {
       api()
      
        },[])
  
        



return(
   <div className="naousar">
        <img className='logo' src={colegio} alt="Logo do colegio a cima" />
       
        <div className="login-container">
            
            <h1>Cadastro</h1>
            <p><strong>Complete as infomações da escola</strong></p>
        
        <form action="">
            
            <label for="text" ><strong>escola</strong></label>
            <input type = 'text' name = 'escola' id=" 'escola" placeholder="Informe o nome da escola"/>

            <label for = "text" ><strong>Nome do diretor</strong></label>
            <input id = "diretor" type="text" name="name" placeholder="Digite o nome do diretor"/>


            <label for = "localizacao"><strong>Localização da escola</strong></label>
            <select name="localizacao" id="loc">
                <option value="'urbano">urbano</option>
                <option value="'rural">rural</option>

            </select>
            
            <label for = "localizacao"><strong>Localização da escola</strong></label>
            <select name="localizacao" id="loc">
                <option value="'manha">Manhã</option>
                <option value="'Tarde">Tarde</option>
                <option value="'Noite">Noite</option>
                <option value="'Integral">Integral</option>
                </select>

     
            <div className="btn" >enviar</div>
            
            </form>


            
    
        </div>
        </div>
    
   
)  
}

export default Formulario

