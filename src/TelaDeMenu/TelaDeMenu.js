import colegio from '../assets/logoo.png';
import {browseRouter as Router,Routes,route} from 'react-router-dom'

import marcos from '../assets/eu.jpeg';
import login from '../TelaDeLogin/TelaDeLogin'
///tentei importar ainda com o basico do html porem sem sucesso
import './Menu.css'

let TelaDeMenu  = () => {
    return(
<div>
          
  

            <header className="cabecalho">
                <img className="cabecalho-imagem" src={colegio}alt="Logo do colégio"/>
                <nav className="cabecalho-menu">
                <a class="cabecalho-menu-item" href = {login}>Login</a>

                
                <a class="cabecalho-menu-item" href = "LOGIN.html">listagem</a>
                <a class="cabecalho-menu-item" href = "LOGIN.html">cadastro</a>
               
                </nav>
            </header>

            <main className="conteudo">
                <section className="conteudo-principal">
                <div className="conteudo-principal-escrito">
                    <h1 classname="conteudo-principal-escrito-titulo">Sobre mim</h1>
                    <h2 className="conteudo-principal-escrito-subtitulo">Meu nome é Marcos Paulo tenho 19 anos, estudante de ánalise desenvolvimento de sistemas, possuo conhecimetos de Python , javaScript, HTML e CSS , e sigo em busca conseguir essa oportunidade para aprimorar minhas habilidades com programação e me tornar o profissional cada vez melhor para o time Mobimark </h2>
                  
                </div>
                
                <img className="conteudo-principal-imagem"src={marcos} alt="Imagem do Marcos"/>  
                </section>

                <section className="conteudo-secundario">
                <h3 className="conteudo-secundario-titulo">o que foi utilizado no Projeto/ Dificuldades econtradas / sugestões </h3>
                
            
                <p className="conteudo-secundario-paragrafo">1. foi utilizado <strong>React , HTML e CSS</strong> </p>
                <p className="conteudo-secundario-paragrafo">2. Dificulades encontradas talvez um pouco mais de tempo de estudo teria conseguido <strong> o linkamento de telas  e o consumo de api</strong></p>
                <p class="conteudo-secundario-paragrafo">3.  <strong>Na Tela de Login é importante ter um comentario sobre como conseguir a matricula e a senha   </strong> </p>
                <p class="conteudo-secundario-paragrafo">  <strong>Na Tela de cadastro é importante ter uma barra digitação para 'observações' não obrigatoria ao usuario   </strong> </p>
                </section>
            
            </main>
            
           
           
            
               
</div>
    )
}


export default TelaDeMenu