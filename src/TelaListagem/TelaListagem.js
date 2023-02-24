import  React , {useState} from 'react'

export const TelaListagem = () => {
  
    const [estado ,] = useState  (2)
  
  
  
  
    return (
     
   <div>
        <h1>selecione o municipio</h1>
        <form>
        <select name = 'estado' value = {estado}>
            
            <option value = "1">Teresina</option>
            <option value = "2">Campo Maior</option>
            <option value = "3">Picos</option>
            <option value = "">Parnaiba</option>
            <option value = "1">Piripiri</option>
            <option value = "2">Altos</option>
            <option value = "3">José De Freitas</option>
            <option value = "1">Oeiras</option>
            <option value = "2">Miguel Alves</option>
            <option value = "3">Valença do Piauí</option>


            <h3><a href="">Voltar</a></h3>







        </select><br/>  <br/>
        
        
        <button type = 'submit'>Confirmar</button>

        </form>
    </div>
  )
}

export default TelaListagem