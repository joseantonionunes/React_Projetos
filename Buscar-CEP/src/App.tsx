
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './service/api';
import './index.css'


function App() {


   const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    async function handleSearch(){
      // 01310930/json/

      if(input === '') {
          alert("Preencha algum cep!")
          return;
      }

      try{
          const response = await api.get(`${input}/json`);
          setCep(response.data)
          setInput("")

      }catch{
          alert("Ops!! Erro ao buscar.")
          setInput("")
      }
  }
      
  return (
    <>
      <section className='section'>
            <h1 className='title'>Buscador CEP</h1>
                <div className='div'>
                    <input type="text" placeholder="Digite seu cep..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />

                    <button className='button' onClick={handleSearch}>
                        <FiSearch size={25} color="#121212"/>
                    </button>
                </div>

                {Object.keys(cep).length > 0 && (
                    <main className='main'>
                    <h2>CEP: {cep.cep}</h2>
                    
                    <span>{cep.logradouro}</span>
                    <span>Complemento {cep.complemento}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.localidade} - {cep.uf}</span>

                </main>
                )}
              
        </section>
    </>
  )
}

export default App
