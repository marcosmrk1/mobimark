import react from 'react'


import './TelaDeLogin.css'
import colegio from '../assets/logoo.png';
import seta from '../assets/seta.png';



let TelaDeLogin =() => {
    
return(
    <div className="container">
        <header className="header">
            <img className="logo" src={colegio} alt="" />
            <h3>Bem-vindo aluno(a)</h3>
        </header>

    <form>
        <div className="inputcontainer">
            <label htmlFor="Matricula">Matricula</label>
            <input type= "number" autoSave='on' id='matricula'  placeholder='Digite sua matricula' />
        </div>
    </form>


    <form>
        <div className="inputcontainer">
            <label htmlFor="password">Senha</label>
            <input type= "password" autoSave='on' id='password' placeholder='Digite sua senha '  />
        </div>
    


    <button className="botao">
        entrar <img className = 'img'src={seta} alt="seta pequena conectar" />
    
    
    </button>
    
    
    <div className="final">
        <p>
            Não tem acesso? <strong> Entre em contato com a escola   </strong>
            <a href="http://www.mobimark.com.br/">Clique aqui</a>
        </p>
    </div>



    </form>
    </div>
    
    

)
}
export default TelaDeLogin